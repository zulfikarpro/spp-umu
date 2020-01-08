<template>
<div class="container mt-7 shadow rounded">
<div class=" row px-3 py-3">
  <div class="col-sm-12 text-center font-weight-bold mb-4" style="font-size:x-large;">Ubah Informasi Universitas</div>
  <div class="col-sm-9">
    <div class="form-group row">
    <label  class="col-sm-3 col-form-label">Nama Universitas</label>
    <div class="col-sm-9">
      <input type="text" class="form-control" placeholder="" v-model="academyData.akademiName">
    </div>
    </div>
    <div class="form-group row">
    <label  class="col-sm-3 col-form-label">Alamat</label>
    <div class="col-sm-9">
      <input type="text" class="form-control" placeholder="" v-model="academyData.akademiAddress">
    </div>
    </div>
    <div class="form-group row">
    <label  class="col-sm-3 col-form-label">No Telpon</label>
    <div class="col-sm-9">
      <input type="text" class="form-control" placeholder="" v-model="academyData.akademiPhone">
    </div>
    </div>
    <div class="form-group row">
    <label  class="col-sm-3 col-form-label">Email</label>
    <div class="col-sm-9">
      <input type="text" class="form-control" placeholder="" v-model="academyData.akademiEmail">
    </div>
    </div>
    <div class="form-group row">
    <label  class="col-sm-3 col-form-label">Website</label>
    <div class="col-sm-9">
      <input type="text" class="form-control" placeholder="" v-model="academyData.akademiWeb">
    </div>
    </div>
   </div>
  <div class="col-sm-3 justify-content-md-center">
      <div class="" style="cursor:pointer;" @click="pilihGambar">
        <input type="file" ref="fileGambar" class="d-none" @change="uploadGambar" accept="image/*" />
        <img class="rounded-sm" :src="'data:image/jpeg;base64,' + academyData.akademiLogo" width="200" height="200" />
        <div class="label_upload rounded px-2 py-1">
        <img src="../../assets/pencil-white.png" height="20" width="20" />
        <div class="teks">Upload</div>
        </div>
      </div>
  </div>
  <div class="col-sm-4 mt-4 mx-auto">
    <button type="submit" @click="submitForm" style="background-color:#ff5500;color:white;" class="btn btn-block py-3">Submit</button>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: 'AcademyEdit',
  data () {
    return {
      objSession: JSON.parse(sessionStorage.getItem('umuSS')),
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
      this.$store.dispatch('getAkademiOne', this.objSession.idAkademi)
    },
    pilihGambar () {
      this.$refs.fileGambar.click()
    },
    submitForm () {
      if (this.imgSize === true) {
        alert('Ukuran Gambar terlalu besar')
        this.$refs.fileGambar.value = '' // Reset Input File
      } else {
        this.academyData.idAkademi = this.objSession.idAkademi
        this.$store.dispatch('updateAkademi', [this.academyData, this.imgFile])
        this.$refs.fileGambar.value = '' // Reset Input File
      }
    },
    uploadGambar (val) {
      let dataimage = new FormData()
      dataimage.append('file', val.target.files[0])
      let extfile = val.target.files[0].name.substring(val.target.files[0].name.lastIndexOf('.')).toLowerCase()
      console.log(extfile)
      if (extfile === '.jpg' || extfile === '.png' || extfile === '.jpeg') {
        var reader = new FileReader()
        this.imgFile = dataimage
        // this.imgFile = val.target.files[0]
        reader.onload = (val) => {
          let base64 = val.target.result.substring(val.target.result.indexOf(',', 0) + 1)
          this.academyData.akademiLogo = base64
        }
        reader.readAsDataURL(val.target.files[0])
        if (val.target.files[0].size < 250000) {
          this.imgSize = false
        } else {
          this.imgSize = true
        }
        // Convert Image to Base64
        // let file = val.target.files[0]
        // var reader = new FileReader()
        // reader.onload = (fileLoadedEvent) => {
        //   let base64 = fileLoadedEvent.target.result.substring(fileLoadedEvent.target.result.indexOf(',', 0) + 1)
        //   this.academyData.akademiLogo = base64
        // }
        // reader.readAsDataURL(file)
      } else {
        this.failedMsg = 'Tipe data harus gambar'
        alert(this.failedMsg)
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

.label_upload {
  color: #fff;
  position: absolute;
  margin-top: -32px;
  z-index: 1;
  background-color: black;
}
.label_upload .teks {
  background: rgba(0,0,0,.7);
  display: inline;
  width: 100%;
  text-align: center;
}

.mt-7 {
  margin-top: 7rem !important
}

</style>
