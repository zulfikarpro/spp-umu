<template>
    <div>
    <nav class="navbar fixed-top navbar-expand-md navbar-light bg-light shadow" style="background-color: #ffff" >
  <router-link class="navbar-brand ml-2" to="/admin/beranda">
     <img :src="logoAkademi === '' ? require('@/assets/logo_umu_orange.png') : ('data:image/jpeg;base64,' + logoAkademi) "  width="50" height="50" alt="Logo" />
  </router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item">
        <router-link active-class="active" v-if="this.$store.state.permissionData.academy_r" to="/admin/akademi" class="nav-link mx-3 px-2 navText text-black">Informasi Universitas</router-link>
      </li>
      <li class="nav-item">
        <router-link active-class="active" v-if="this.$store.state.permissionData.student_r" to="/admin/siswa" class="nav-link mx-3 px-2 navText text-black">Kemahasiswaan</router-link>
      </li>
      <li class="nav-item">
        <router-link active-class="active" v-if="this.$store.state.permissionData.billing_r" to="/admin/tagihan" class="nav-link mx-3 px-2 navText text-black">Pembayaran</router-link>
      </li>
      <li class="nav-item">
        <router-link active-class="active" v-if="this.$store.state.permissionData.order_r"  to="/admin/order" class="nav-link px-2 mx-3 navText text-black">Order</router-link>
      </li>
    </ul>
    <div class="dropdown mr-5">
      <button class="btn btn-lg navText dropdown-toggle text-black" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      {{ objSession.name }}
      </button>
     <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <router-link class="dropdown-item" to="/admin/user/changePassword">Ganti Password</router-link>
      <button class="dropdown-item"
      @click="logOut">Keluar</button>
      </div>
    </div>
  </div>
  </nav>
    </div>
</template>

<script>
export default {
  name: 'top',
  data () {
    return {
      objSession: JSON.parse(sessionStorage.getItem('umuSS')),
      objRole: JSON.parse(sessionStorage.getItem('umuRole')),
      logoAkademi: '',
      indexLogOut: 0
    }
  },
  computed: {
    indexAkademiData () {
      return this.$store.state.indexAkademiData
    },
    logOutDirect () {
      return this.indexLogOut
    }
  },
  watch: {
    'indexAkademiData' () {
      this.logoAkademi = this.$store.state.oneAkademiData.data.akademiLogo
    },
    'logOutDirect' () {
      this.$router.push('/login')
    }
  },
  methods: {
    init () {
      if (this.objSession.idAkademi !== null) {
        this.$store.dispatch('getAkademiOne', this.objSession.idAkademi)
      }

      let permis = {}
      let permisArray = this.objRole
      let item = ''
      for (item of permisArray) {
        permis[item] = 1
      }
      Object.assign(this.$store.state.permissionData, permis)
    },
    logOut () {
      sessionStorage.clear()
      let permis = {}
      let permisObject = this.$store.state.permissionData
      let permisKey = Object.keys(permisObject)
      for (let idx of permisKey) {
        permis[idx] = 0
      }
      Object.assign(this.$store.state.permissionData, permis)
      this.indexLogOut++
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style >
.navText {
  font-size: large;
}
</style>
