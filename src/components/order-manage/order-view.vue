<template>
    <div class="container mt-3 px-3 py-3 shadow rounded">
        <div class="text-center font-weight-bold mb-4" style="font-size:x-large;">Detail Order</div>
        <div class="mt-3 font-weight-bold mb-3">Data Universitas/Sekolah</div>
        <div class="row form-group typoText">
            <label class="col-2 col-form-label" >Nama Universitas/Sekolah:</label>
            <label class="offset-1 col-form-label" >:</label>
            <label class="col-5 col-form-label">{{allData.akademiName}}</label>
        </div>
        <div class="row form-group typoText">
            <label class="col-2 col-form-label">Alamat</label>
            <label class="offset-1 col-form-label" >:</label>
            <label class="col-5 col-form-label">{{allData.akademiAddress}}</label>
        </div>
        <div class="row form-group typoText">
            <label class="col-2 col-form-label">No. Telepon</label>
            <label class="offset-1 col-form-label">:</label>
            <label class="col-5 col-form-label">{{allData.akademiPhone}}</label>
        </div>
        <div class="row  form-group typoText">
            <label class="col-2 col-form-label">Email</label>
            <label class="offset-1 col-form-label">:</label>
            <label class="col-5 col-form-label">{{allData.akademiEmail}}</label>
        </div>
        <div class="row form-group typoText">
            <div class="col-2 col-form-label">Website</div>
            <div class="offset-1 col-form-label">:</div>
            <div class="col-5 col-form-label">{{allData.akademiWeb}}</div>
        </div>
        <div class="mt-5 font-weight-bold mb-3">Data PenanggungJawab</div>
        <div class="row form-group typoText">
            <label class="col-2 col-form-label" >Nama Pegawai:</label>
            <label class="offset-1 col-form-label" >:</label>
            <label class="col-5 col-form-label">{{allData.namaPegawai}}</label>
        </div>
        <div class="row form-group typoText">
            <label class="col-2 col-form-label">Jabatan</label>
            <label class="offset-1 col-form-label" >:</label>
            <label class="col-5 col-form-label">{{allData.jabatan}}</label>
        </div>
        <div class="row form-group typoText">
            <label class="col-2 col-form-label">Nip</label>
            <label class="offset-1 col-form-label">:</label>
            <label class="col-5 col-form-label">{{allData.nip}}</label>
        </div>
        <div class="row  form-group typoText">
            <label class="col-2 col-form-label">Telpon</label>
            <label class="offset-1 col-form-label">:</label>
            <label class="col-5 col-form-label">{{allData.phone}}</label>
        </div>
        <div class="row form-group typoText">
            <div class="col-2 col-form-label">Email</div>
            <div class="offset-1 col-form-label">:</div>
            <div class="col-5 col-form-label">{{allData.email}}</div>
        </div>
        <div class="row form-group typoText">
            <div class="col-2 col-form-label">Tempat Lahir</div>
            <div class="offset-1 col-form-label">:</div>
            <div class="col-5 col-form-label">{{allData.tempatLahir}}</div>
        </div>
        <div class="row form-group typoText">
            <div class="col-2 col-form-label">Tanggal Lahir</div>
            <div class="offset-1 col-form-label">:</div>
            <div class="col-5 col-form-label">{{allData.tanggalLahir}}</div>
        </div>
        <div class="row form-group typoText">
            <div class="col-2 col-form-label">Alamat Identitas</div>
            <div class="offset-1 col-form-label">:</div>
            <div class="col-5 col-form-label">{{allData.alamatIdentitas}}</div>
        </div>
        <div class="col-sm-3 mt-4 mx-auto">
          <button type="submit" @click="() => (this.$router.push('../'))" style="background-color:#ff5500;color:white;" class="btn btn-block py-3">Menu Utama</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'OrderView',
  data () {
    return {
      objSession: JSON.parse(sessionStorage.getItem('umuSS')),
      allData: {}
    }
  },
  computed: {
    indexOneOrder () {
      return this.$store.state.indexOneOrder
    }
  },
  watch: {
    'indexOneOrder' () {
      this.allData = this.$store.state.oneOrderData.data
    }
  },
  methods: {
    init () {
      this.$store.dispatch('getOrderOne', this.$route.params.id)
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
