<template>
<div class="container mt-7 shadow rounded">
<div class=" row px-3 py-3">
  <div class="col-sm-12 text-center font-weight-bold mb-4" style="font-size:x-large;">Ganti Password</div>
  <div class="col-sm-10 mx-auto">
    <div class="form-group row">
    <label  class="col-sm-4 col-form-label">Password Lama</label>
    <div class="col-sm-8">
      <input type="password" class="form-control" placeholder="" v-model.trim="$v.userData.oldPassword.$model">
      <small class="form-text text-danger" v-if="$v.userData.oldPassword.$dirty && !$v.userData.oldPassword.required">Harus Diisi</small>
      <small class="form-text text-danger" v-if="!$v.userData.oldPassword.minLength">Minimal 5 huruf</small>
    </div>
    </div>
    <div class="form-group row">
    <label  class="col-sm-4 col-form-label">Password Baru</label>
    <div class="col-sm-8">
      <input type="password" class="form-control" placeholder="" v-model.trim="$v.userData.newPassword.$model">
      <small class="form-text text-danger" v-if="$v.userData.newPassword.$dirty && !$v.userData.newPassword.required">Harus Diisi</small>
      <small class="form-text text-danger" v-if="!$v.userData.newPassword.minLength">Minimal 5 huruf</small>
    </div>
    </div>
    <div class="form-group row">
    <label  class="col-sm-4 col-form-label">Konfirmasi Password Baru</label>
    <div class="col-sm-8">
      <input type="password" class="form-control" placeholder="" v-model.trim="$v.userData.newPassword2.$model">
      <small class="form-text text-danger" v-if="$v.userData.newPassword2.$dirty && !$v.userData.newPassword2.required">Harus Diisi</small>
      <small class="form-text text-danger" v-if="!$v.userData.newPassword2.minLength">Minimal 5 huruf</small>
    </div>
    </div>
  <div class="col-sm-4 mt-4 mx-auto">
    <button type="submit" @click="submitForm" style="background-color:#ff5500;color:white;" class="btn btn-block py-3">Submit</button>
  </div>
</div>
</div>
<modal v-if="showModal" @close="showModal = false"><div slot="body">{{ msgModal }}</div></modal>
</div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
import modal from '../../Modal.vue'

export default {
  name: 'UserEdit',
  components: {
    modal
  },
  data () {
    return {
      objSession: JSON.parse(sessionStorage.getItem('umuSS')),
      userData: {
        oldPassword: '',
        newPassword: '',
        newPassword2: ''
      },
      failedMsg: '',
      showModal: false,
      msgModal: ''
    }
  },
  validations: {
    userData: {
      oldPassword: {required, minLength: minLength(5)},
      newPassword: {required, minLength: minLength(5)},
      newPassword2: {required, minLength: minLength(5)}
    }
  },
  computed: {
    indexChangePassword () {
      return this.$store.state.indexChangePassword
    }
  },
  watch: {
    'indexChangePassword' () {
      if (this.$store.state.oneChangePassword.success === true) {
        this.$router.push('/admin/beranda')
        this.showModal = true
        this.msgModal = 'Berhasil Ubah Password'
      } else {
        this.failedMsg = this.$store.state.oneChangePassword.message
        this.showModal = true
        this.msgModal = this.failedMsg === null ? 'Ubah Password Gagal' : this.failedMsg
      }
    }
  },
  methods: {
    submitForm () {
      this.$v.userData.$touch()
      if (this.$v.userData.$error) {
        this.showModal = true
        this.msgModal = 'Data Harus dilengkapi'
      } else {
        if (this.userData.newPassword !== this.userData.newPassword2) {
          this.showModal = true
          this.msgModal = 'Password Baru Tidak Sama'
        } else {
          this.$store.dispatch('changePassword', [this.objSession.email, this.userData.oldPassword, this.userData.newPassword])
        }
      }
    }
  }
}
</script>

<style>
.bg-gray-dark {
    background-color: #24292e!important;
}

.mt-7 {
  margin-top: 7rem !important
}

</style>
