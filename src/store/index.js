import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex, VueAxios, Axios)
let baseUrl = window.location.origin

export const state = {
  oneStudent: {},
  // Tagihan
  indexUploadTagihan: 0,
  uploadTagihanData: {},
  // end Tagihan
  // Siswa
  indexUploadSiswa: 0,
  uploadSiswaData: {},
  indexSiswaData: 0,
  oneStudentData: {}
  // end Siswa
}

export const mutations = {
  getStudent (state, resp) {
    state.oneStudent = resp
  },
  countUploadSiswa (state) {
    state.indexUploadSiswa++
  },
  respUploadSiswa (state, resp) {
    state.uploadSiswaData = resp
  },
  countUploadTagihan (state) {
    state.indexUploadTagihan++
  },
  respUploadTagihan (state, resp) {
    state.uploadTagihanData = resp
  },
  countGetStudent (state) {
    state.indexSiswaData++
  },
  respGetStudent (state, resp) {
    state.oneStudentData = resp
  }
}

export const actions = {
  getStudentLocal ({commit}, x) {
    commit('getStudent', x)
  },
  excelUploadSiswa ({commit}, x) {
    return Axios.post(baseUrl + '/umu-spp/siswa/excel/upload?idAkademi=1', x)
      .then((response) => {
        commit('countUploadSiswa')
        commit('respUploadSiswa', response.data)
      })
  },
  excelUploadTagihan ({commit}, [x, y]) {
    return Axios.post(baseUrl + '/umu-spp/tagihan/excel/upload?idSiswa=' + x, y)
      .then((response) => {
        commit('countUploadTagihan')
        commit('respUploadTagihan', response.data)
      })
  },
  getStudentOne ({commit}, x) {
    return Axios.get(baseUrl + '/umu-spp/siswa/getSiswa?idSiswa=' + x)
      .then((response) => {
        commit('countGetStudent')
        commit('respGetStudent', response.data)
      })
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
