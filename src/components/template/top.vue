<template>
    <div>
    <nav class="navbar navbar-expand-lg sticky-top navbar-dark" style="background-image: linear-gradient(180deg, #ff5500, #fc7735); ">
  <a class="navbar-brand" href="#">
     <img :src="'data:image/jpeg;base64,' + logoAkademi" width="50" height="50" alt="Logo" />
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item">
        <router-link active-class="active" to="/admin/beranda" class="nav-link mx-1 navText">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link active-class="active" to="/admin/akademi" class="nav-link mx-1 navText">Informasi Universitas</router-link>
      </li>
      <li class="nav-item">
        <router-link active-class="active" to="/admin/siswa" class="nav-link mx-1 navText">Kemahasiswaan</router-link>
      </li>
      <li class="nav-item">
        <router-link active-class="active" to="/admin/tagihan" class="nav-link mx-1 navText">Pembayaran</router-link>
      </li>
      <li class="nav-item">
        <router-link active-class="active" to="/admin/feeManage" class="nav-link mx-1 navText">Fee Management</router-link>
      </li>
    </ul>
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
      logoAkademi: ''
    }
  },
  computed: {
    indexAkademiData () {
      return this.$store.state.indexAkademiData
    }
  },
  watch: {
    'indexAkademiData' () {
      this.logoAkademi = this.$store.state.oneAkademiData.data.akademiLogo
    }
  },
  methods: {
    init () {
      this.$store.dispatch('getAkademiOne', this.objSession.idAkademi)
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
