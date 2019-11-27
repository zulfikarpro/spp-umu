<template>
    <div class="mx-auto container mt-4">
        <div class="text-center mb-2 font-weight-bold" style="font-size:x-large;">Mengisi Informasi Universitas</div>
        <div class="row justify-content-md-center form-group typoText">
            <label class="col-sm-2 col-form-label" >Nama Universitas</label>
            <label class="offset-sm-1 col-form-label" >:</label>
            <input class="col-sm-5 form-control-plaintext" type="text" readonly v-model="academyData.akademiName">
        </div>
        <div class="row justify-content-md-center form-group typoText">
            <label class="col-sm-2">Alamat</label>
            <label class="offset-sm-1" >:</label>
            <label class="col-sm-5">{{academyData.akademiAddress}}</label>
        </div>
        <div class="row justify-content-md-center form-group typoText">
            <label class="col-sm-2">No. Telepon</label>
            <label class="offset-sm-1">:</label>
            <label class="col-sm-5">{{academyData.akademiPhone}}</label>
        </div>
        <div class="row justify-content-md-center form-group typoText">
            <label class="col-sm-2">Email</label>
            <label class="offset-sm-1">:</label>
            <label class="col-sm-5">{{academyData.akademiEmail}}</label>
        </div>
        <div class="row justify-content-md-center form-group typoText">
            <label class="col-sm-2">Website</label>
            <label class="offset-sm-1">:</label>
            <label class="col-sm-5">{{academyData.akademiWeb}}</label>
        </div>
    </div>
</template>

<script>
export default {
  name: 'academyPage',
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
      this.$store.dispatch('getAkademiOne', 1)
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
</style>
