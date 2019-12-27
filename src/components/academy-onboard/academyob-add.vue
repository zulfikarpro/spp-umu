<template>
<div class="container mt-5">
<div class="row">
  <div class="col-sm-12 font-weight-bold mb-5" style="font-size:x-large;">Buat Order</div>
  <div class="col-sm-6">
    <div class="mb-3" style="font-size:x-large;">Data Penanggung Jawab</div>
    <div class="form-group">
      <label for="inputEmail4">Nama Penanggung Jawab</label>
      <input type="text" class="form-control" placeholder="">
    </div>
    <div class="form-group">
      <label for="inputEmail4">Jabatan</label>
      <input type="text" class="form-control" placeholder="">
    </div>
    <div class="form-group">
      <label for="inputEmail4">No Telpon</label>
      <input type="text" class="form-control" placeholder="">
    </div>
    <div class="form-group">
      <label for="inputEmail4">Email</label>
      <input type="text" class="form-control" placeholder="">
    </div>
    <div class="form-group">
      <label for="inputEmail4">Tanggal Lahir</label>
      <input type="text" class="form-control" placeholder="">
    </div>
    <div class="form-group">
      <label for="inputEmail4">Alamat Sesuai Identitas</label>
      <input type="text" class="form-control" placeholder="">
    </div>
    <div class="form-group">
      <label for="inputEmail4">Jenis Kelamin</label>
      <input type="text" class="form-control" placeholder="">
    </div>
    <div class="form-group">
      <label for="inputEmail4">NIK</label>
      <input type="text" class="form-control" placeholder="">
    </div>
  </div>
  <div class="col-sm-6">
    <div class="mb-3" style="font-size:x-large;">Data Instansi</div>
    <div class="form-group">
      <label for="inputEmail4">Nama Instansi</label>
      <input type="text" class="form-control" placeholder="">
    </div>
    <div class="form-group">
      <label for="inputEmail4">Alamat Instansi</label>
      <input type="text" class="form-control" placeholder="">
    </div>
    <div class="form-group">
      <label for="inputEmail4">Nomor Telpon</label>
      <input type="text" class="form-control" placeholder="">
    </div>
    <div class="form-group">
      <label for="inputEmail4">Email Yang Didaftarkan</label>
      <input type="text" class="form-control" placeholder="">
    </div>
    <div class="form-group">
      <label for="inputEmail4">Inforrmasi Rekening Instansi</label>
      <input type="text" class="form-control" placeholder="">
    </div>
  </div>
    <div class="mt-4 mx-auto mb-5 d-flex">
    <div class="d-inline mr-3"><button type="submit" class="btn btn-outline-custom btn-block px-5 py-3">Batal</button></div>
    <div class="d-inline "><button type="submit" style="background-color:#ff5500;color:white;font-weight: bold;" class="btn btn-block px-5 py-3">Simpan</button></div>
  </div>

</div>
</div>
</template>

<script>
export default {
  name: 'AcademyOnboardAdd',
  data () {
    return {
      academyData: {},
      failedMsg: '',
      imgSize: false,
      imgFile: ''
    }
  },
  computed: {
    indexAkademiData () {
      return this.$store.state.indexAkademiData
    },
    indexUpdateAkademi () {
      return this.$store.state.indexUpdateAkademi
    }
  },
  watch: {
    'indexAkademiData' () {
      this.academyData = this.$store.state.oneAkademiData.data
    },
    'indexUpdateAkademi' () {
      console.log(this.$store.state.updateAkademiData)
      if (this.$store.state.updateAkademiData.success === true) {
        alert('Data Berhasil di ubah')
        this.$router.push('/admin/akademi/')
      } else {
        this.failedMsg = this.$store.state.updateAkademiData.message
        alert(this.failedMsg == null ? 'Input Data gagal' : this.failedMsg)
      }
    }
  },
  methods: {
    init () {
      this.$store.dispatch('getAkademiOne', 1)
    },
    submitForm () {
      if (this.imgSize === true) {
        alert('Ukuran Gambar terlalu besar')
        this.$refs.fileGambar.value = '' // Reset Input File
      } else {
        this.academyData.idAkademi = 1
        this.$store.dispatch('updateAkademi', [this.academyData, this.imgFile])
        this.$refs.fileGambar.value = '' // Reset Input File
      }
    }
  },
  mounted () {
    this.init()
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

.btn-outline-custom {
  color: #ff5500;
  background-color: #ffffff;
  border-color: #ff5500;
  font-weight: bold;
  letter-spacing: 0.05em;
}

.btn-outline-custom {
  color: #ff5500;
  background-color: #ffffff;
  border-color: #ff5500;
  font-weight: bold;
}

.btn-outline-custom:hover,
.btn-outline-custom:active,
.btn-outline-custom:focus,
.btn-outline-custom.active {
  background: #ff5500;
  color: #ffffff;
  border-color: #ff5500;
}

</style>
