<template>
<div class="container-fluid">
    <div class="row">

      <div class="col-sm-8 mx-auto shadow rounded mt-5 mb-5" v-if="$route.params.id == 1">
        <div class="row mt-4">
          <div class="col-sm-8 col-8 mx-auto"><div class="font-weight-bold text-center mt-4" style="font-size:x-large;">Data Penanggung Jawab</div></div>
        </div>
      <div class="col-sm-10 offset-sm-1 ">
        <div class="mt-3 font-weight-bold">A. DATA PENANGGUNG JAWAB KEUANGAN SEKOLAH/UNIVERSITAS</div>
        <div class="form-group mt-3">
        <label >Nama Penanggung Jawab</label>
        <input type="text" class="form-control"   v-model="$v.data1.name.$model" >
        <small class="form-text text-danger error" v-if="$v.data1.name.$error">Field is required.</small>
        </div>
        <div class="form-group mt-3">
        <label >NIP/Nomor Induk Pegawai</label>
        <input type="text" class="form-control"  v-model="$v.data1.nip.$model">
        <small class="form-text text-danger error" v-if="$v.data1.nip.$error">Field is required.</small>
        </div>
        <div class="form-group mt-3">
        <label >Jabatan</label>
        <input type="text" class="form-control" v-model="$v.data1.position.$model">
        <small class="form-text text-danger error" v-if="$v.data1.position.$error">Field is required.</small>
        </div>
        <div class="form-group mt-3">
        <label >Nomor Handphone</label>
        <input type="number" class="form-control"  v-model="$v.data1.phone.$model">
        <small class="form-text text-danger error" v-if="$v.data1.phone.$error">Field is required.</small>
        </div>
        <div class="form-group mt-3">
        <label >Email</label>
        <input type="email" class="form-control"  v-model="$v.data1.email.$model">
        <small class="form-text text-danger error" v-if="$v.data1.email.$error">Field is required.</small>
        </div>
        <div class="form-group mt-3 row">
          <label class="col-12">Tempat Tanggal Lahir</label>
          <div class="col-6"><input type="text" class="form-control under-line"  placeholder="Tempat" v-model="$v.data1.placeDob.$model"></div>
          <div class="col-6"><datepicker placeholder="Tanggal Lahir" :format="'dd-MM-yyyy'" :bootstrap-styling="true" v-model="$v.data1.dateOfBirth.$model"></datepicker></div>
          <small class="form-text text-danger col-6" v-if="$v.data1.placeDob.$error">Field is required.</small>
          <small class="form-text text-danger" :class="$v.data1.placeDob.$error === true ? 'col-6' : 'offset-6'" v-if="$v.data1.dateOfBirth.$error">Select is required.</small>
        </div>
        <div class="form-group mt-3">
          <label >Alamat Sesuai Identitas</label>
          <input type="text" class="form-control"  v-model="$v.data1.address.$model">
          <small class="form-text text-danger" v-if="$v.data1.address.$error">Field is required.</small>
        </div>
        <div class="form-group mt-3">
          <label >Alamat Tinggal</label>
          <input type="text" class="form-control"  v-model="$v.data1.addressNow.$model">
          <small class="form-text text-danger" v-if="$v.data1.addressNow.$error">Field is required.</small>
        </div>
        <div class="form-group mt-3 row">
          <label class="col-12">Jenis Kelamin</label>
          <div class="col-6">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="gender"  v-model="$v.data1.gender.$model"  v-bind:value="'laki-laki'" checked>
            <label class="form-check-label" >
              Laki-Laki
            </label>
          </div>
          </div>
          <div class="col-6">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="gender" v-model="$v.data1.gender.$model"  v-bind:value="'perempuan'">
            <label class="form-check-label" >
              Perempuan
            </label>
          </div>
          </div>
          <small class="form-text text-danger" v-if="$v.data1.gender.$error">Choose is required.</small>
        </div>
        <div class="form-group mt-3 row">
          <label class="col-12">Kewarganegaraan</label>
          <div class="col-6">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="citizen"  v-model="$v.data1.citizen.$model"   v-bind:value="'WNI'" checked>
            <label class="form-check-label" >
              WNI
            </label>
          </div>
          </div>
          <div class="col-6">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="citizen" v-model="$v.data1.citizen.$model"   v-bind:value="'WNA'" >
            <label class="form-check-label" >
              WNA
            </label>
          </div>
          </div>
          <small class="form-text text-danger" v-if="$v.data1.citizen.$error">Choose is required.</small>
        </div>
        <div class="form-group mt-3">
          <label >NIK</label>
          <input type="text" class="form-control" v-model="$v.data1.nik.$model" name="nik">
          <small class="form-text text-danger" v-if="$v.data1.nik.$error">Field is required.</small>
        </div>
      </div>
      <div class="col-sm-8 mx-auto mt-5 mb-5">
      <div class="row">
        <div class="col-sm-4 offset-sm-2 text-center"><button type="submit" v-on:click="backButton" style="background-color:#FBE5D7;color:black;" class="btn btn-block py-3">Batal</button></div>
        <div class="col-sm-4 text-center"><button type="submit" v-on:click="submitButton('userRegis')"  style="background-color:#F0B286;color:black;" class="btn btn-block py-3">Selanjutnya</button></div>
      </div>
      </div>
      </div>

      <div class="col-sm-8 mx-auto shadow rounded mt-5 mb-5" v-if="$route.params.id == 2">
        <div class="row mt-4">
          <div class="col-sm-8 col-8 mx-auto"><div class="font-weight-bold text-center mt-4" style="font-size:x-large;">Data Universitas/Sekolah</div></div>
        </div>
      <div class="col-sm-10 offset-sm-1 ">
        <div class="mt-3 font-weight-bold">B. DATA SEKOLAH/UNIVERSITAS</div>
        <div class="form-group mt-3">
        <label >Nama Sekolah/Universitas</label>
        <input type="text" class="form-control" v-model="$v.data2.akademiName.$model">
        <small class="form-text text-danger error" v-if="$v.data2.akademiName.$error">Field is required.</small>
        </div>
        <div class="form-group mt-3">
        <label >Alamat Sekolah/Universitas</label>
        <input type="text" class="form-control" v-model="$v.data2.akademiAddress.$model">
        <small class="form-text text-danger error" v-if="$v.data2.akademiAddress.$error">Field is required.</small>
        </div>
        <div class="form-group mt-3">
          <label >Logo Universitas</label>
          <div class="custom-file">
            <input type="file" class="custom-file-input" id="inputGroupFile04" @change="uploadLogo">
            <label class="custom-file-label" for="inputGroupFile04">{{ data2.akademiLogo.name }}</label>
            <small class="form-text text-danger error" v-if="$v.data2.akademiLogo.$error">Choose is required.</small>
          </div>
        </div>
        <div class="form-group mt-3">
        <label >Nomor Telepon</label>
        <input type="number" class="form-control" v-model="$v.data2.akademiPhone.$model">
        <small class="form-text text-danger error" v-if="$v.data2.akademiPhone.$error">Field is required.</small>
        </div>
        <div class="form-group mt-3">
        <label >Email yang Didaftarkan</label>
        <input type="email" class="form-control" v-model="$v.data2.akademiEmail.$model">
        <small class="form-text text-danger error" v-if="$v.data2.akademiEmail.$error">Field is required.</small>
        </div>
        <div class="form-group mt-3">
        <label >Bank</label>
        <select id="inputBank" class="form-control" v-model="$v.data2.akademiBank.$model">
        <option value="" selected>Pilih Bank</option>
        <option value="BNI">BNI</option>
        <option value="MANDIRI">MANDIRI</option>
        <option value="BRI">BRI</option>
        </select>
        <small class="form-text text-danger error" v-if="$v.data2.akademiBank.$error">Choose is required.</small>
        </div>
        <div class="form-group mt-3">
          <label >Nomor Rekening Bank</label>
          <input type="text" class="form-control" v-model="$v.data2.noRekening.$model">
          <small class="form-text text-danger error" v-if="$v.data2.noRekening.$error">Field is required.</small>
        </div>
        <div class="form-group mt-3">
          <label >Nama Pemilik Rekening Bank</label>
          <input type="text" class="form-control" v-model="$v.data2.nameRekening.$model">
          <small class="form-text text-danger error" v-if="$v.data2.noRekening.$error">Field is required.</small>
        </div>
      </div>
      <div class="col-sm-8 mx-auto mt-5 mb-5">
      <div class="row">
        <div class="col-sm-4 offset-sm-2 text-center"><button type="submit" v-on:click="backButton" style="background-color:#FBE5D7;color:black;" class="btn btn-block py-3">Kembali</button></div>
        <div class="col-sm-4 text-center"><button type="submit" v-on:click="submitButton('akademiRegis')" style="background-color:#F0B286;color:black;" class="btn btn-block py-3">Selanjutnya</button></div>
      </div>
      </div>
      </div>

      <div class="col-sm-8 mx-auto shadow rounded mt-5 mb-5" v-if="$route.params.id == 3">
        <div class="row mt-4">
          <div class="col-sm-8 col-8 mx-auto"><div class="font-weight-bold text-center mt-4" style="font-size:x-large;">UPLOAD FORMULIR PENDAFTARAN</div></div>
        </div>
      <div class="col-sm-8 mx-auto mt-5 text-center">
        <div class="mt-3" style="cursor:pointer;" @click="pilihGambar">
          <input type="file" ref="fileGambar" class="d-none" @change="uploadGambar" accept="image/*" />
          <img src="../../assets/uploadform.jpg" alt="uploadForm" width="200" height="200">
          <div class="mb-3"> {{ imgName }}</div>
          </div>
        <div class="">Upload dokumen pendaftaran untuk membuat order</div>
        <div class="mb-7">dengan klik button <b>Upload Formulir</b></div>
      <div class="col-sm-8 mx-auto mt-5 mb-5">
      <div class="row">
        <div class="col-sm-4 offset-sm-2 text-center"><button type="submit" v-on:click="backButton" style="background-color:#FBE5D7;color:black;" class="btn btn-block py-3">Kembali</button></div>
        <div class="col-sm-4 text-center"><button type="submit" v-on:click="() => this.$router.push('../')" style="background-color:#F0B286;color:black;" class="btn btn-block py-3">Menu Utama</button></div>
      </div>
      </div>
      </div>
      </div>

    </div>

</div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'OrderAdd',
  components: {
    Datepicker
  },
  data () {
    return {
      objSession: JSON.parse(sessionStorage.getItem('umuSS')),
      data1: {
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
      data2: {
        akademiName: '',
        akademiAddress: '',
        akademiLogo: '',
        akademiPhone: '',
        akademiEmail: '',
        akademiBank: '',
        noRekening: '',
        nameRekening: ''
      },
      imgName: '',
      imgFile: '',
      imgStatus: false
    }
  },
  validations: {
    data1: {
      name: {required},
      nip: {required},
      position: {required},
      phone: {required},
      email: {required},
      placeDob: {required},
      dateOfBirth: {required},
      address: {required},
      addressNow: {required},
      gender: {required},
      citizen: {required},
      nik: {required}
    },
    data2: {
      akademiName: {required},
      akademiAddress: {required},
      akademiLogo: {required},
      akademiPhone: {required},
      akademiEmail: {required},
      akademiBank: {required},
      noRekening: {required},
      nameRekening: {required}
    }
  },
  computed: {
    indexSaveOrder () {
      return this.$store.state.indexSaveOrder
    },
    DateAja () {
      return new Date(this.data1.dateOfBirth)
    }
  },
  watch: {
    'indexSaveOrder' () {
      if (this.$store.state.saveOrderData.success === true) {
        alert('Buat Order berhasil')
        this.$router.push('../')
      } else {
        alert(this.$store.state.saveOrderData.message)
      }
    }
  },
  methods: {
    init () {
      if (this.$route.params.id === 1) {
        this.data1 = this.$store.state.orderPenanggungJawab
      }
      if (this.$route.params.id === 2) {
        this.data2 = this.$store.state.orderAkademi
      }
    },
    pilihGambar () {
      this.$refs.fileGambar.click()
    },
    uploadGambar (val) {
      let extfile = val.target.files[0].name.substring(val.target.files[0].name.lastIndexOf('.')).toLowerCase()
      console.log(extfile)
      if (val.target.files[0].size > 250000) {
        alert('Ukuran file terlalu besar')
        this.$refs.fileGambar.value = '' // Reset Input File
      }
      if (extfile === '.jpg' || extfile === '.png' || extfile === '.jpeg') {
        var reader = new FileReader()
        this.imgFile = val.target.files[0]
        this.imgName = val.target.files[0].name
        reader.readAsDataURL(val.target.files[0])
        this.imgStatus = true
      } else {
        alert('Tipe data harus gambar')
        this.$refs.fileGambar.value = '' // Reset Input File
      }
      if (this.imgStatus === true) {
        let firstData = Object.values(this.$store.state.orderPenanggungJawab)
        let secondData = Object.values(this.$store.state.orderAkademi)
        let allData = firstData.concat(secondData)
        if (allData.includes(undefined) || allData.includes('')) {
          alert('Semua Form Tidak Boleh Kosong')
        } else {
          let dataimage = new FormData()
          dataimage.append('file', this.$store.state.orderAkademi.akademiLogo)
          dataimage.append('file', this.imgFile)
          let tglLahir = this.changeDateFormat(this.$store.state.orderPenanggungJawab.dateOfBirth)
          // console.log(this.$store.state.orderPenanggungJawab.dateOfBirth)
          let readyData = {
            // image: dataimage,
            status: 'pending',
            createBy: this.objSession.name,
            updateBy: this.objSession.name,
            namaPegawai: this.$store.state.orderPenanggungJawab.name,
            nip: this.$store.state.orderPenanggungJawab.nip,
            jabatan: this.$store.state.orderPenanggungJawab.position,
            phone: this.$store.state.orderPenanggungJawab.phone,
            email: this.$store.state.orderPenanggungJawab.email,
            tempatLahir: this.$store.state.orderPenanggungJawab.placeDob,
            tanggalLahir: tglLahir,
            alamatIdentitas: this.$store.state.orderPenanggungJawab.address,
            alamatTinggal: this.$store.state.orderPenanggungJawab.addressNow,
            jenisKelamin: this.$store.state.orderPenanggungJawab.gender,
            kewarganegaraan: this.$store.state.orderPenanggungJawab.citizen,
            nik: this.$store.state.orderPenanggungJawab.nik,
            akademiName: this.$store.state.orderAkademi.akademiName,
            akademiAddress: this.$store.state.orderAkademi.akademiAddress,
            akademiPhone: this.$store.state.orderAkademi.akademiPhone,
            akademiWeb: null,
            akademiEmail: this.$store.state.orderAkademi.akademiEmail,
            akademiBank: this.$store.state.orderAkademi.akademiBank,
            noRekening: this.$store.state.orderAkademi.noRekening,
            nameRekening: this.$store.state.orderAkademi.nameRekening
          }
          dataimage.append('model', JSON.stringify(readyData))
          this.$store.dispatch('saveOrder', dataimage)
        }
      }
    },
    uploadLogo (val) {
      let extfile = val.target.files[0].name.substring(val.target.files[0].name.lastIndexOf('.')).toLowerCase()
      console.log(extfile)
      if (val.target.files[0].size > 250000) {
        alert('Ukuran file terlalu besar')
      }
      if (extfile === '.jpg' || extfile === '.png' || extfile === '.jpeg') {
        var reader = new FileReader()
        this.data2.akademiLogo = val.target.files[0]
        reader.readAsDataURL(val.target.files[0])
      } else {
        alert('Tipe data harus gambar')
      }
    },
    backButton () {
      this.$router.go(-1)
    },
    changeDateFormat (param) {
      let cdf = new Date(param)
      let day = cdf.getDate()
      let month = cdf.getMonth() + 1
      let year = cdf.getFullYear()
      if (day < 10) {
        day = '0' + day
      }
      if (month < 10) {
        month = '0' + month
      }
      let resultDateFormat = day + '-' + month + '-' + year
      return resultDateFormat
    },
    submitButton (params) {
      if (params === 'userRegis') {
        this.$v.data1.$touch()
        if (this.$v.data1.$error) {
          alert('Data Harus Lengkapi')
        } else {
          this.$store.state.orderPenanggungJawab = this.data1
          this.$router.push('2')
        }
      } else if (params === 'akademiRegis') {
        this.$v.data2.$touch()
        if (this.$v.data2.$error) {
          alert('Data Harus Lengkapi')
        } else {
          this.$store.state.orderAkademi = this.data2
          this.$router.push('3')
        }
      }
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style scoped>
.mt-7 {
  margin-top: 7rem !important
}
.mb-7 {
  margin-bottom: 7rem !important
}
.under-line {
  background: transparent;
  border: none;
  border-bottom: 1px solid #000000;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-radius: 0;
}

.under-line:focus {
  -webkit-box-shadow: none;
  box-shadow: none;
}
</style>
