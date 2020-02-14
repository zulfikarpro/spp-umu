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
  updateAkademiData: {},
  // end Akademi

  // Login
  indexLoginUser: 0,
  oneLoginUser: {},
  // end Login

  // Permission
  indexGetPermission: 0,
  listPermissionData: {},
  permissionData: {
    academy_u: 0,
    academy_r: 0,
    student_r: 0,
    student_c: 0,
    billing_r: 0,
    billing_c: 0,
    order_c: 0,
    order_r: 0,
    approval_u: 0,
    order_u: 0,
    order_d: 0
  },
  // End Permission

  // Register
  regisUser: {
    name: '',
    nip: '',
    position: '',
    phone: '',
    email: '',
    placeDob: '',
    dateOfBirth: '',
    address: '',
    addressNow: '',
    gender: '',
    citizen: '',
    nik: ''
  },
  regisWakil: {
    name: '',
    nip: '',
    position: '',
    phone: '',
    email: '',
    placeDob: '',
    dateOfBirth: '',
    address: '',
    addressNow: '',
    gender: '',
    citizen: '',
    nik: ''
  },
  regisAkademi: {
    akademiName: '',
    akademiAddress: '',
    akademiPhone: '',
    akademiEmail: '',
    akademiBank: '',
    noRekening: '',
    nameRekening: ''
  },
  indexSaveWizard: 0,
  saveWizardData: {},
  // end Register

  // Start Order
  orderPenanggungJawab: {
    name: '',
    nip: '',
    position: '',
    phone: '',
    email: '',
    placeDob: '',
    dateOfBirth: '',
    address: '',
    addressNow: '',
    gender: '',
    citizen: '',
    nik: ''
  },
  orderAkademi: {
    akademiName: '',
    akademiAddress: '',
    akademiLogo: '',
    akademiPhone: '',
    akademiEmail: '',
    akademiBank: '',
    noRekening: '',
    nameRekening: ''
  },
  indexOneOrder: 0,
  oneOrderData: {},
  indexSaveOrder: 0,
  saveOrderData: {},
  indexApprovalOrder: 0,
  oneApprovalOrder: {},
  indexUpdateOrder: 0,
  updateOrderData: {},
  indexGetUpdateOrder: 0,
  getUpdateOrderData: {},
  deleteOrderData: {},
  indexDeleteOrder: 0,
  // End Order

  // Upload University
  indexTemplateUser: 0,
  // End University Upload

  // User
  indexChangePassword: 0,
  oneChangePassword: {}
  // End User
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
  },
  countSaveWizard (state) {
    state.indexSaveWizard++
  },
  respSaveWizard (state, resp) {
    state.saveWizardData = resp
  },
  countSaveOrder (state) {
    state.indexSaveOrder++
  },
  respSaveOrder (state, resp) {
    state.saveOrderData = resp
  },
  countUpdateOrder (state) {
    state.indexUpdateOrder++
  },
  respUpdateOrder (state, resp) {
    state.updateOrderData = resp
  },
  countDeleteOrder (state) {
    state.indexDeleteOrder++
  },
  respDeleteOrder (state, resp) {
    state.deleteOrderData = resp
  },
  countGetUpdateOrder (state) {
    state.indexGetUpdateOrder++
  },
  respGetUpdateOrder (state, resp) {
    state.getUpdateOrderData = resp
  },
  countLoginUser (state) {
    state.indexLoginUser++
  },
  respLoginUser (state, resp) {
    state.oneLoginUser = resp
  },
  countTemplateUser (state) {
    state.indexTemplateUser++
  },
  countGetOrder (state) {
    state.indexOneOrder++
  },
  respGetOrder (state, resp) {
    state.oneOrderData = resp
  },
  countApprovalOrder (state) {
    state.indexApprovalOrder++
  },
  respApprovalOrder (state, resp) {
    state.oneApprovalOrder = resp
  },
  countGetPermission (state) {
    state.indexGetPermission++
  },
  respGetPermission (state, resp) {
    state.listPermissionData = resp
  },
  countChangePassword (state) {
    state.indexChangePassword++
  },
  respChangePassword (state, resp) {
    state.oneChangePassword = resp
  }
}

export const actions = {
  excelUploadSiswa ({commit}, [x, y]) {
    return Axios.post(baseUrl + '/umu-spp/siswa/excel/upload?idAkademi=' + x, y)
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
  excelTemplateTagihan ({commit}, x) {
    return Axios({
      method: 'GET',
      url: baseUrl + '/umu-spp/tagihan/excel/template',
      params: {
        idAkademi: x
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
  },
  saveWizard ({commit}, x) {
    return Axios.post(baseUrl + '/umu-spp/user/registration', x)
      .then((response) => {
        commit('countSaveWizard')
        commit('respSaveWizard', response.data)
      })
      .catch((error) => {
        let err = error + ''
        if (err.includes('Invalid')) {
          alert('Tidak Dapat Diakses')
          console.log(error)
        } else {
          alert('Terjadi Kesalahan')
        }
      })
  },
  saveOrder ({commit}, x) {
    return Axios.post(baseUrl + '/umu-spp/order/add', x)
      .then((response) => {
        commit('countSaveOrder')
        commit('respSaveOrder', response.data)
      })
      .catch((error) => {
        let err = error + ''
        if (err.includes('Invalid')) {
          alert('Tidak Dapat Diakses')
          console.log(error)
        } else {
          alert('Terjadi Kesalahan')
        }
      })
  },
  updateOrder ({commit}, [x, y]) {
    return Axios.post(baseUrl + '/umu-spp/order/edit?idAkademi=' + x, y)
      .then((response) => {
        commit('countUpdateOrder')
        commit('respUpdateOrder', response.data)
      })
      .catch((error) => {
        let err = error + ''
        if (err.includes('Invalid')) {
          alert('Tidak Dapat Diakses')
          console.log(error)
        } else {
          alert('Terjadi Kesalahan')
        }
      })
  },
  deleteOrder ({commit}, x) {
    return Axios.post(baseUrl + '/umu-spp/order/delete?idAkademi=' + x)
      .then((response) => {
        commit('countDeleteOrder')
        commit('respDeleteOrder', response.data)
      })
      .catch((error) => {
        let err = error + ''
        if (err.includes('Invalid')) {
          alert('Tidak Dapat Diakses')
          console.log(error)
        } else {
          alert('Terjadi Kesalahan')
        }
      })
  },
  getUpdateOrder ({commit}, x) {
    return Axios.get(baseUrl + '/umu-spp/order/getOrderData?idAkademi=' + x)
      .then((response) => {
        commit('countGetUpdateOrder')
        commit('respGetUpdateOrder', response.data)
      })
      .catch((error) => {
        console.log(error.response)
        let err = error + ''
        if (err.includes('Invalid')) {
          alert('Tidak Dapat Diakses')
        } else if (err.response.status === '504') {
          alert('Periksa Koneksi')
        } else {
          alert('Terjadi Kesalahan')
        }
      })
  },
  getOrderOne ({commit}, x) {
    return Axios.get(baseUrl + '/umu-spp/order/view?idAkademi=' + x)
      .then((response) => {
        commit('countGetOrder')
        commit('respGetOrder', response.data)
      })
      .catch((error) => {
        console.log(error.response)
        let err = error + ''
        if (err.includes('Invalid')) {
          alert('Tidak Dapat Diakses')
        } else if (err.response.status === '504') {
          alert('Periksa Koneksi')
        } else {
          alert('Terjadi Kesalahan')
        }
      })
  },
  getPermission ({commit}, x) {
    return Axios.get(baseUrl + '/umu-spp/role/getPermission?roleName=' + x)
      .then((response) => {
        commit('countGetPermission')
        commit('respGetPermission', response.data)
      })
      .catch((error) => {
        console.log(error.response)
        let err = error + ''
        if (err.includes('Invalid')) {
          alert('Tidak Dapat Diakses')
        } else if (err.response.status === '504') {
          alert('Periksa Koneksi')
        } else {
          alert('Terjadi Kesalahan')
        }
      })
  },
  loginUser ({commit}, [x, y]) {
    return Axios.post(baseUrl + '/umu-spp/login/auth?email=' + x + '&password=' + y)
      .then((response) => {
        commit('countLoginUser')
        commit('respLoginUser', response.data)
      })
      .catch((error) => {
        console.log(error.response)
        let err = error + ''
        if (err.includes('Invalid')) {
          alert('Tidak Dapat Diakses')
        } else if (err.response.status === '504') {
          alert('Periksa Koneksi')
        } else {
          alert('Terjadi Kesalahan')
        }
      })
  },
  changePassword ({commit}, [x, y, z]) {
    return Axios.post(baseUrl + '/umu-spp/user/ubahPassword?email=' + x + '&oldPassword=' + y + '&newPassword=' + z)
      .then((response) => {
        commit('countChangePassword')
        commit('respChangePassword', response.data)
      })
      .catch((error) => {
        console.log(error.response)
        let err = error + ''
        if (err.includes('Invalid')) {
          alert('Tidak Dapat Diakses')
        } else if (err.response.status === '504') {
          alert('Periksa Koneksi')
        } else {
          alert('Terjadi Kesalahan')
        }
      })
  },
  approvalOrder ({commit}, [x, y]) {
    return Axios.post(baseUrl + '/umu-spp/order/approval?idAkademi=' + x + '&email=' + y)
      .then((response) => {
        commit('countApprovalOrder')
        commit('respApprovalOrder', response.data)
      })
      .catch((error) => {
        console.log(error.response)
        let err = error + ''
        if (err.includes('Invalid')) {
          alert('Tidak Dapat Diakses')
        } else if (err.response.status === '504') {
          alert('Periksa Koneksi')
        } else {
          alert('Terjadi Kesalahan')
        }
      })
  },
  pdfTemplateUser ({commit}) {
    return Axios({
      method: 'GET',
      url: baseUrl + '/umu-spp/user/pdf',
      responseType: 'blob'
    }).then((response) => {
      let userAgent = navigator.userAgent
      let url = window.URL.createObjectURL(new Blob([response.data]))
      let link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'Formulir_Pendaftaran_UMU.pdf')
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
      commit('countTemplateUser')
    })
      .catch((error) => {
        console.log(error.response)
        let err = error + ''
        if (err.includes('Invalid')) {
          alert('Tidak Dapat Diakses')
        } else {
          alert('Terjadi Kesalahan')
        }
      })
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
