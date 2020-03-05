<template>
<div class="login">
<div class="login-form mx-auto mt-5 shadow p-5 mb-5 bg-white rounded" @keyup.enter="postlogin">
        <p class="text-center h4 pb-3">UMU Login</p>
        <div class="form-group">
        <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text " id="inputGroupPrepend1"><i class="fa fa-user"></i></span>
        </div>
            <input type="text" class="form-control" v-model="email" placeholder="Email" required="required">
        </div>
        </div>
        <div class="form-group">
            <div class="input-group">
            <div class="input-group-prepend">
            <span class="input-group-text " id="inputGroupPrepend2"><i class="fa fa-lock"></i></span>
            </div>
            <input type="password" class="form-control" v-model="password" placeholder="Password" required="required">
            </div>
        </div>
        <!-- <div class="clearfix">
            <label class="float-left checkbox-inline"><input type="checkbox"> Ingat Saya</label>
        </div> -->
        <div class="form-group">
            <button type="submit" @click="postlogin" style="background-color:#ff5500;color:white;" class="btn btn-block mx-auto w-25">Login</button>
        </div>
    <!-- <p class="text-center"><a href="#">Lupa Password</a></p> -->
</div>
<modal v-if="showModal" @close="showModal = false">
<div slot="body">{{ msgModal }}</div>
</modal>
</div>
</template>

<script>
import CryptoJS from 'crypto-js'
import NProgress from 'nprogress'
import modal from '../../Modal.vue'

export default {
  name: 'login',
  components: {
    modal
  },
  data () {
    return {
      email: '',
      password: '',
      secretKey: 'YWJjZGVmZ2hpamtsbW5vcA==',
      showModal: false,
      msgModal: ''
    }
  },
  computed: {
    indexLoginUser () {
      return this.$store.state.indexLoginUser
    },
    indexGetPermission () {
      return this.$store.state.indexGetPermission
    }
  },
  watch: {
    'indexLoginUser' () {
      if (this.$store.state.oneLoginUser.success === true) {
        if (this.$store.state.oneLoginUser.data.status !== 'active') {
          this.showModal = true
          this.msgModal = 'Akun Tidak Aktif'
        }
        sessionStorage.setItem('umuSS', JSON.stringify(this.$store.state.oneLoginUser.data))
        this.$store.dispatch('getPermission', this.$store.state.oneLoginUser.data.role)
      } else {
        this.showModal = true
        this.msgModal = this.$store.state.oneLoginUser.message
      }
      NProgress.done()
    },
    'indexGetPermission' () {
      if (this.$store.state.listPermissionData.success === true) {
        sessionStorage.setItem('umuRole', JSON.stringify(this.$store.state.listPermissionData.data))
      } else {
        this.showModal = true
        this.msgModal = this.$store.state.listPermissionData.message
      }
      this.$router.push('admin/beranda')
    }
  },
  methods: {
    postlogin () {
      if (this.email === '' || this.email === undefined || this.password === '' || this.password === undefined) {
        this.showModal = true
        this.msgModal = 'Failed Login'
      } else if (this.password.length < 5) {
        this.showModal = true
        this.msgModal = 'Password Terlalu Pendek'
      } else {
        let key = CryptoJS.enc.Base64.parse(this.secretKey)
        let cfg = {
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7
        }
        let encryptedData = CryptoJS.AES.encrypt(this.password, key, cfg).toString()
        sessionStorage.clear()
        // console.log(encryptedData)
        this.$store.dispatch('loginUser', [this.email, encryptedData])
        // this.$router.push('admin/beranda')
        NProgress.configure({ showSpinner: false })
        NProgress.start()
      }
    }
  }
}
</script>

<style>
.login-form {
    width:500px;
}
.login-form .input-group-text {
    background-color: #ffffff;
}
.form-control {
    border-right:1px solid #ced4da;
    border-top:1px solid #ced4da;
    border-bottom:1px solid #ced4da;
    border-left:none;
}
</style>
