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
        <small class="form-text text-danger error" v-if="$v.data1.name.$dirty && !$v.data1.name.required">Field is required.</small>
        </div>
        <div class="form-group mt-3">
        <label >NIP/Nomor Induk Pegawai</label>
        <input type="text" class="form-control"  v-model="$v.data1.nip.$model">
        <small class="form-text text-danger error" v-if="$v.data1.nip.$dirty && !$v.data1.nip.required">Field is required.</small>
        </div>
        <div class="form-group mt-3">
        <label >Jabatan</label>
        <input type="text" class="form-control" v-model="$v.data1.position.$model">
        <small class="form-text text-danger error" v-if="$v.data1.position.$dirty && !$v.data1.position.required">Field is required.</small>
        </div>
        <div class="form-group mt-3">
        <label >Nomor Handphone</label>
        <input type="number" class="form-control"  v-model="$v.data1.phone.$model">
        <small class="form-text text-danger error" v-if="$v.data1.phone.$dirty && !$v.data1.phone.required">Field is required.</small>
        <small class="form-text text-danger error" v-if="$v.data1.phone.$dirty && !$v.data1.phone.numeric">Field must be a number.</small>
        <small class="form-text text-danger error" v-if="!$v.data1.phone.minLength">Field must have at least 10 letters.</small>
        <small class="form-text text-danger error" v-if="!$v.data1.phone.maxLength">Field Maximum 13 letters.</small>
        </div>
        <div class="form-group mt-3">
        <label >Email</label>
        <input type="email" class="form-control"  v-model="$v.data1.email.$model">
        <small class="form-text text-danger error" v-if="$v.data1.email.$dirty && !$v.data1.email.required">Field is required.</small>
        <small class="form-text text-danger error" v-if="$v.data1.email.$dirty && !$v.data1.email.email">Email not valid.</small>
        </div>
        <div class="form-group mt-3 row">
          <label class="col-12">Tempat Tanggal Lahir</label>
          <div class="col-6"><input type="text" class="form-control under-line"  placeholder="Tempat" v-model="$v.data1.placeDob.$model"></div>
          <div class="col-6"><datepicker placeholder="Tanggal Lahir" :format="'dd-MM-yyyy'" :bootstrap-styling="true" v-model="$v.data1.dateOfBirth.$model"></datepicker></div>
          <small class="form-text text-danger col-6" v-if="$v.data1.placeDob.$dirty && !$v.data1.placeDob.required">Field is required.</small>
          <small class="form-text text-danger" :class="(!$v.data1.placeDob.required && $v.data1.placeDob.$dirty)  === true ? 'col-6' : 'offset-6'" v-if="$v.data1.dateOfBirth.$dirty && !$v.data1.dateOfBirth.required">Select is required.</small>
        </div>
        <div class="form-group mt-3">
          <label >Alamat Sesuai Identitas</label>
          <input type="text" class="form-control"  v-model="$v.data1.address.$model">
          <small class="form-text text-danger" v-if="$v.data1.address.$dirty && !$v.data1.address.required">Field is required.</small>
        </div>
        <div class="form-group mt-3">
          <label >Alamat Tinggal</label>
          <input type="text" class="form-control"  v-model="$v.data1.addressNow.$model">
          <small class="form-text text-danger" v-if="$v.data1.addressNow.$dirty && !$v.data1.addressNow.required">Field is required.</small>
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
          <small class="form-text text-danger" v-if="$v.data1.gender.$dirty && !$v.data1.gender.required">Choose is required.</small>
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
          <small class="form-text text-danger" v-if="$v.data1.citizen.$dirty && !$v.data1.citizen.required">Choose is required.</small>
        </div>
        <div class="form-group mt-3">
          <label >NIK</label>
          <input type="text" class="form-control" v-model="$v.data1.nik.$model" name="nik">
          <small class="form-text text-danger" v-if="$v.data1.nik.$dirty && !$v.data1.nik.required">Field is required.</small>
          <small class="form-text text-danger" v-if="$v.data1.nik.$dirty && !$v.data1.nik.numeric">Field must be a number.</small>
          <small class="form-text text-danger" v-if="!$v.data1.nik.minLength">Field must have at least 16 letters.</small>
          <small class="form-text text-danger" v-if="!$v.data1.nik.maxLength">Field Maximum 16 letters.</small>
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
        <small class="form-text text-danger error" v-if="$v.data2.akademiName.$dirty && !$v.data2.akademiName.required">Field is required.</small>
        </div>
        <div class="form-group mt-3">
        <label >Alamat Sekolah/Universitas</label>
        <input type="text" class="form-control" v-model="$v.data2.akademiAddress.$model">
        <small class="form-text text-danger error" v-if="$v.data2.akademiAddress.$dirty && !$v.data2.akademiAddress.required">Field is required.</small>
        </div>
        <div class="form-group mt-3">
          <label >Logo Universitas</label>
          <div class="custom-file">
            <input type="file" class="custom-file-input" id="inputGroupFile04" @change="uploadLogo">
            <label class="custom-file-label" for="inputGroupFile04">{{ data2.akademiLogo.name }}</label>
            <small class="form-text text-danger error" v-if="$v.data2.akademiLogo.$dirty && !$v.data2.akademiLogo.required">Choose is required.</small>
          </div>
        </div>
        <div class="form-group mt-3">
        <label >Nomor Telepon</label>
        <input type="number" class="form-control" v-model="$v.data2.akademiPhone.$model">
        <small class="form-text text-danger error" v-if="$v.data2.akademiPhone.$dirty && !$v.data2.akademiPhone.required">Field is required.</small>
        <small class="form-text text-danger error" v-if="$v.data2.akademiPhone.$dirty && !$v.data2.akademiPhone.numeric">Field must be a number.</small>
        <small class="form-text text-danger error" v-if="!$v.data2.akademiPhone.minLength">Field must have at least 10 letters.</small>
        <small class="form-text text-danger error" v-if="!$v.data2.akademiPhone.maxLength">Field Maximum 13 letters.</small>
        </div>
        <div class="form-group mt-3">
        <label >Email yang Didaftarkan</label>
        <input type="email" class="form-control" v-model="$v.data2.akademiEmail.$model">
        <small class="form-text text-danger error" v-if="$v.data2.akademiEmail.$dirty && !$v.data2.akademiEmail.required">Field is required.</small>
        <small class="form-text text-danger error" v-if="$v.data2.akademiEmail.$dirty && !$v.data2.akademiEmail.email">Email not valid.</small>
        </div>
        <div class="form-group mt-3">
        <label >Bank</label>
        <select id="inputBank" class="form-control" v-model="$v.data2.akademiBank.$model">
        <option value="" selected>Pilih Bank</option>
        <option value="BNI">BNI</option>
        <option value="MANDIRI">MANDIRI</option>
        <option value="BRI">BRI</option>
        <option value="BCA">BCA</option>
        </select>
        <small class="form-text text-danger error" v-if="$v.data2.akademiBank.$dirty && !$v.data2.akademiBank.required">Choose is required.</small>
        </div>
        <div class="form-group mt-3">
          <label >Nomor Rekening Bank</label>
          <input type="text" class="form-control" v-model="$v.data2.noRekening.$model">
          <small class="form-text text-danger error" v-if="$v.data2.noRekening.$dirty && !$v.data2.noRekening.required">Field is required.</small>
          <small class="form-text text-danger error" v-if="$v.data2.noRekening.$dirty && !$v.data2.noRekening.numeric">Field must be a number.</small>
        </div>
        <div class="form-group mt-3">
          <label >Nama Pemilik Rekening Bank</label>
          <input type="text" class="form-control" v-model="$v.data2.nameRekening.$model">
          <small class="form-text text-danger error" v-if="$v.data2.noRekening.$dirty && !$v.data2.noRekening.required">Field is required.</small>
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
          <img src="../../assets/uploadform.png" alt="uploadForm" width="200" height="200">
          <div class="mb-3"> {{ imgName }}</div>
          </div>
        <div class="">Upload dokumen pendaftaran untuk membuat order</div>
        <div class="mb-7">dengan klik button <b>Upload Dokumen</b></div>
      <div class="col-sm-8 mx-auto mt-5 mb-5">
      <div class="row">
        <div class="col-sm-8 mx-auto text-center"><button type="submit" v-on:click="backButton" style="background-color:#FBE5D7;color:black;" class="btn btn-block py-3">Kembali</button></div>
      </div>
      </div>
      </div>
      </div>

    </div>

</div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import { required, minLength, email, numeric, maxLength } from 'vuelidate/lib/validators'
import NProgress from 'nprogress'

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
      phone: {required, numeric, minLength: minLength(10), maxLength: maxLength(13)},
      email: {required, email},
      placeDob: {required},
      dateOfBirth: {required},
      address: {required},
      addressNow: {required},
      gender: {required},
      citizen: {required},
      nik: {required, numeric, minLength: minLength(16), maxLength: maxLength(16)}
    },
    data2: {
      akademiName: {required},
      akademiAddress: {required},
      akademiLogo: {required},
      akademiPhone: {required, numeric, minLength: minLength(10), maxLength: maxLength(13)},
      akademiEmail: {required, email},
      akademiBank: {required},
      noRekening: {required, numeric},
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
      NProgress.done()
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
          NProgress.configure({ showSpinner: false })
          NProgress.start()
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
