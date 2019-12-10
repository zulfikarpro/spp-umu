import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex, VueAxios, Axios)

// Production URI
let baseUrl = process.env.NODE_ENV === 'production' ? window.location.origin + ':10015' : window.location.origin

// Development URI
// let baseUrl = window.location.origin

export const state = {

  // Tagihan
  indexUploadTagihan: 0,
  uploadTagihanData: {},
  indexTemplateTagihan: 0,
  // end Tagihan

  // Siswa
  indexUploadSiswa: 0,
  uploadSiswaData: {},
  indexSiswaData: 0,
  oneSiswaData: {},
  indexTemplateSiswa: 0,
  // end Siswa

  // Akademi
  indexAkademiData: 0,
  oneAkademiData: {},
  indexUpdateAkademi: 0,
  updateAkademiData: {}
  // end Akademi

}

export const mutations = {
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
  countGetSiswa (state) {
    state.indexSiswaData++
  },
  respGetSiswa (state, resp) {
    state.oneSiswaData = resp
  },
  countTemplateSiswa (state) {
    state.indexTemplateSiswa++
  },
  countTemplateTagihan (state) {
    state.indexTemplateTagihan++
  },
  countGetAkademi (state) {
    state.indexAkademiData++
  },
  respGetAkademi (state, resp) {
    state.oneAkademiData = resp
  },
  countUpdateAkademi (state) {
    state.indexUpdateAkademi++
  },
  respUpdateAkademi (state, resp) {
    state.updateAkademiData = resp
  }
}

export const actions = {
  excelUploadSiswa ({commit}, x) {
    return Axios.post(baseUrl + '/umu-spp/siswa/excel/upload?idAkademi=1', x)
      .then((response) => {
        commit('countUploadSiswa')
        commit('respUploadSiswa', response.data)
      })
  },
  excelUploadTagihan ({commit}, [x, y]) {
    return Axios.post(baseUrl + '/umu-spp/tagihan/excel/upload?idAkademi=' + x, y)
      .then((response) => {
        commit('countUploadTagihan')
        commit('respUploadTagihan', response.data)
      })
  },
  getSiswaOne ({commit}, x) {
    return Axios.get(baseUrl + '/umu-spp/siswa/getSiswa?idSiswa=' + x)
      .then((response) => {
        commit('countGetSiswa')
        commit('respGetSiswa', response.data)
      })
  },
  excelTemplateSiswa ({commit}) {
    return Axios({
      method: 'GET',
      url: baseUrl + '/umu-spp/siswa/excel/template',
      responseType: 'blob'
    }).then((response) => {
      let userAgent = navigator.userAgent
      let url = window.URL.createObjectURL(new Blob([response.data]))
      let link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'siswa.xlsx')
      if (userAgent.includes('Firefox')) {
        document.body.appendChild(link)
        link.click()
        setTimeout(function () {
          window.URL.revokeObjectURL(url)
        }, 100)
      } else {
        link.click()
        window.URL.revokeObjectURL(url)
      }
      commit('countTemplateSiswa')
    })
  },
  excelTemplateTagihan ({commit}) {
    return Axios({
      method: 'GET',
      url: baseUrl + '/umu-spp/tagihan/excel/template',
      params: {
        idAkademi: 1
      },
      responseType: 'blob'
    }).then((response) => {
      let userAgent = navigator.userAgent
      let url = window.URL.createObjectURL(new Blob([response.data]))
      let link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'tagihan.xlsx')
      if (userAgent.includes('Firefox')) {
        document.body.appendChild(link)
        link.click()
        setTimeout(function () {
          window.URL.revokeObjectURL(url)
        }, 100)
      } else {
        link.click()
        window.URL.revokeObjectURL(url)
      }
      commit('countTemplateTagihan')
    })
  },
  getAkademiOne ({commit}, x) {
    return Axios.get(baseUrl + '/umu-spp/akademi/getAkademi?idAkademi=' + x)
      .then((response) => {
        commit('countGetAkademi')
        commit('respGetAkademi', response.data)
      })
  },
  updateAkademi ({commit}, [x, y]) {
    return Axios.post(baseUrl + '/umu-spp/akademi/updateData?idAkademi=' + x.idAkademi + '&&akademiName=' + x.akademiName + '&&akademiAddress=' +
    x.akademiAddress + '&&akademiPhone=' + x.akademiPhone + '&&akademiEmail=' + x.akademiEmail + '&&akademiWeb=' + x.akademiWeb, y)
      .then((response) => {
        commit('countUpdateAkademi')
        commit('respUpdateAkademi', response.data)
      })
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
