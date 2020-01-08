<template>
    <div class="container mt-7 px-3 py-3 shadow rounded">
        <div class="text-center font-weight-bold mb-4" style="font-size:x-large;">Informasi Universitas</div>
        <div class="row justify-content-md-center form-group typoText">
            <label class="col-2 col-form-label" >Nama Universitas</label>
            <label class="offset-1 col-form-label" >:</label>
            <input class="col-5 form-control-plaintext" type="text" readonly v-model="academyData.akademiName">
        </div>
        <div class="row justify-content-md-center form-group typoText">
            <label class="col-2">Alamat</label>
            <label class="offset-1" >:</label>
            <label class="col-5">{{academyData.akademiAddress}}</label>
        </div>
        <div class="row justify-content-md-center form-group typoText">
            <label class="col-2">No. Telepon</label>
            <label class="offset-1">:</label>
            <label class="col-5">{{academyData.akademiPhone}}</label>
        </div>
        <div class="row justify-content-md-center form-group typoText">
            <label class="col-2">Email</label>
            <label class="offset-1">:</label>
            <label class="col-5">{{academyData.akademiEmail}}</label>
        </div>
        <div class="row justify-content-md-center form-group typoText">
            <div class="col-2">Website</div>
            <div class="offset-1">:</div>
            <div class="col-5">{{academyData.akademiWeb}}</div>
        </div>
        <div class="col-sm-4 mt-4 mx-auto">
          <button type="submit" @click="linkEdit" style="background-color:#ff5500;color:white;" class="btn btn-block py-3">Edit Informasi Universitas</button>
        </div>
    </div>
</template>

<script>
import { objSession } from '../../variable'
export default {
  name: 'AcademyPage',
  data () {
    return {
      academyData: {}
    }
  },
  computed: {
    indexAkademiData () {
      return this.$store.state.indexAkademiData
    }
  },
  watch: {
    'indexAkademiData' () {
      this.academyData = this.$store.state.oneAkademiData.data
    }
  },
  methods: {
    init () {
      this.$store.dispatch('getAkademiOne', objSession.idAkademi)
    },
    linkEdit () {
      this.$router.push('/admin/akademi/editAkademi')
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style >
.typoText {
    font-size: 18px;
    font-weight: 400;
}

.mt-7 {
  margin-top: 10rem !important
}
</style>
