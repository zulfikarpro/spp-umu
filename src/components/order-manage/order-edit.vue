<template>
<div class="container-fluid">
    <div class="row">

      <div class="col-sm-8 mx-auto shadow rounded mt-5 mb-5" >
        <div class="row mt-4">
          <div class="col-sm-8 col-8 mx-auto"><div class="font-weight-bold text-center mt-4" style="font-size:x-large;">Edit Order</div></div>
        </div>
      <div class="col-sm-10 offset-sm-1 ">
        <div class="mt-5 font-weight-bold">A. DATA PENANGGUNG JAWAB KEUANGAN SEKOLAH/UNIVERSITAS</div>
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

      <div class="col-sm-10 offset-sm-1 ">
        <div class="mt-5 font-weight-bold">B. DATA SEKOLAH/UNIVERSITAS</div>
        <div class="form-group mt-3">
        <label >Nama Sekolah/Universitas</label>
        <input type="text" class="form-control" v-model="$v.data1.akademiName.$model">
        <small class="form-text text-danger error" v-if="$v.data1.akademiName.$dirty && !$v.data1.akademiName.required">Field is required.</small>
        </div>
        <div class="form-group mt-3">
        <label >Alamat Sekolah/Universitas</label>
        <input type="text" class="form-control" v-model="$v.data1.akademiAddress.$model">
        <small class="form-text text-danger error" v-if="$v.data1.akademiAddress.$dirty && !$v.data1.akademiAddress.required">Field is required.</small>
        </div>
        <div class="form-group mt-3">
          <label >Logo Universitas</label>
          <div class="custom-file">
            <input type="file" class="custom-file-input" id="inputGroupFile04" @change="uploadLogo">
            <label class="custom-file-label" for="inputGroupFile04">{{ data1.akademiLogo.name }}</label>
          </div>
        </div>
        <div class="form-group mt-3">
        <label >Nomor Telepon</label>
        <input type="number" class="form-control" v-model="$v.data1.akademiPhone.$model">
        <small class="form-text text-danger error" v-if="$v.data1.akademiPhone.$dirty && !$v.data1.akademiPhone.required">Field is required.</small>
        <small class="form-text text-danger error" v-if="$v.data1.akademiPhone.$dirty && !$v.data1.akademiPhone.numeric">Field must be a number.</small>
        <small class="form-text text-danger error" v-if="!$v.data1.akademiPhone.minLength">Field must have at least 10 letters.</small>
        <small class="form-text text-danger error" v-if="!$v.data1.akademiPhone.maxLength">Field Maximum 13 letters.</small>
        </div>
        <div class="form-group mt-3">
        <label >Website</label>
        <input type="text" class="form-control" v-model="$v.data1.akademiWeb.$model">
        <small class="form-text text-danger error" v-if="$v.data1.akademiWeb.$dirty && !$v.data1.akademiWeb.required">Field is required.</small>
        </div>
        <div class="form-group mt-3">
        <label >Jenjang</label>
        <select id="inputBank" class="form-control" v-model="$v.data1.jenjang.$model" disabled>
        <option value="SD">SD/MI</option>
        <option value="SMP">SMP/MTS</option>
        <option value="SMA">SMA/MA/SMK</option>
        <option value="UNIV">Universitas</option>
        </select>
        </div>
        <div class="form-group mt-3">
        <label >Email yang Didaftarkan</label>
        <input type="email" class="form-control" v-model="$v.data1.akademiEmail.$model">
        <small class="form-text text-danger error" v-if="$v.data1.akademiEmail.$dirty && !$v.data1.akademiEmail.required">Field is required.</small>
        <small class="form-text text-danger error" v-if="$v.data1.akademiEmail.$dirty && !$v.data1.akademiEmail.email">Email not valid.</small>
        </div>
        <div class="form-group mt-3">
        <label >Bank</label>
        <select id="inputBank" class="form-control" v-model="$v.data1.akademiBank.$model">
        <option value="" selected>Pilih Bank</option>
        <option value="BNI">BNI</option>
        <option value="MANDIRI">MANDIRI</option>
        <option value="BRI">BRI</option>
        <option value="BCA">BCA</option>
        </select>
        <small class="form-text text-danger error" v-if="$v.data1.akademiBank.$dirty && !$v.data1.akademiBank.required">Choose is required.</small>
        </div>
        <div class="form-group mt-3">
          <label >Nomor Rekening Bank</label>
          <input type="text" class="form-control" v-model="$v.data1.noRekening.$model">
          <small class="form-text text-danger error" v-if="$v.data1.noRekening.$dirty && !$v.data1.noRekening.required">Field is required.</small>
          <small class="form-text text-danger error" v-if="$v.data1.noRekening.$dirty && !$v.data1.noRekening.numeric">Field must be a number.</small>
        </div>
        <div class="form-group mt-3">
          <label >Nama Pemilik Rekening Bank</label>
          <input type="text" class="form-control" v-model="$v.data1.nameRekening.$model">
          <small class="form-text text-danger error" v-if="$v.data1.nameRekening.$dirty && !$v.data1.nameRekening.required">Field is required.</small>
        </div>
      </div>

      <div class="col-sm-10 offset-sm-1 ">
        <div class="mt-5 font-weight-bold">C. DATA FORMULIR PENDAFTARAN</div>
        <div class="form-group mt-3">
          <label >Upload Formulir</label>
          <div class="custom-file">
            <input type="file" class="custom-file-input" id="inputGroupFile04" @change="uploadGambar">
            <label class="custom-file-label" for="inputGroupFile04">{{ data1.dokumen.name }}</label>
          </div>
        </div>
      </div>

      <div class="col-sm-8 mx-auto mt-5 mb-5">
      <div class="row">
        <div class="col-sm-4 offset-sm-2 text-center"><button type="submit" v-on:click="backButton" style="background-color:#FBE5D7;color:black;" class="btn btn-block py-3">Batal</button></div>
        <div class="col-sm-4 text-center"><button type="submit" v-on:click="submitButton()"  style="background-color:#F0B286;color:black;" class="btn btn-block py-3">Simpan</button></div>
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
  name: 'OrderEdit',
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
        nik: '',
        akademiName: '',
        akademiAddress: '',
        akademiLogo: '',
        akademiPhone: '',
        akademiWeb: '',
        jenjang: '',
        akademiEmail: '',
        akademiBank: '',
        noRekening: '',
        nameRekening: '',
        dokumen: ''
      }
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
      nik: {required, numeric, minLength: minLength(16), maxLength: maxLength(16)},
      akademiName: {required},
      akademiAddress: {required},
      akademiPhone: {required, numeric, minLength: minLength(10), maxLength: maxLength(13)},
      akademiWeb: {required},
      jenjang: {required},
      akademiEmail: {required, email},
      akademiBank: {required},
      noRekening: {required, numeric},
      nameRekening: {required}
    }
  },
  computed: {
    indexUpdateOrder () {
      return this.$store.state.indexUpdateOrder
    },
    DateAja () {
      return new Date(this.data1.dateOfBirth)
    },
    indexGetUpdateOrder () {
      return this.$store.state.indexGetUpdateOrder
    }
  },
  watch: {
    'indexUpdateOrder' () {
      if (this.$store.state.updateOrderData.success === true) {
        alert('Ubah Data Order Berhasil')
        this.$router.push('../')
      } else {
        alert(this.$store.state.updateOrderData.message)
      }
      NProgress.done()
    },
    'indexGetUpdateOrder' () {
      this.data1.name = this.$store.state.getUpdateOrderData.data.namaPegawai
      this.data1.nip = this.$store.state.getUpdateOrderData.data.nip
      this.data1.position = this.$store.state.getUpdateOrderData.data.jabatan
      this.data1.phone = this.$store.state.getUpdateOrderData.data.phone
      this.data1.email = this.$store.state.getUpdateOrderData.data.email
      this.data1.placeDob = this.$store.state.getUpdateOrderData.data.tempatLahir
      this.data1.dateOfBirth = this.$store.state.getUpdateOrderData.data.tanggalLahir
      this.data1.address = this.$store.state.getUpdateOrderData.data.alamatIdentitas
      this.data1.addressNow = this.$store.state.getUpdateOrderData.data.alamatTinggal
      this.data1.gender = this.$store.state.getUpdateOrderData.data.jenisKelamin
      this.data1.citizen = this.$store.state.getUpdateOrderData.data.kewarganegaraan
      this.data1.nik = this.$store.state.getUpdateOrderData.data.nik
      this.data1.akademiName = this.$store.state.getUpdateOrderData.data.akademiName
      this.data1.akademiAddress = this.$store.state.getUpdateOrderData.data.akademiAddress
      this.data1.akademiPhone = this.$store.state.getUpdateOrderData.data.akademiPhone
      this.data1.akademiWeb = this.$store.state.getUpdateOrderData.data.akademiWeb
      this.data1.jenjang = this.$store.state.getUpdateOrderData.data.jenjang
      this.data1.akademiEmail = this.$store.state.getUpdateOrderData.data.akademiEmail
      this.data1.akademiBank = this.$store.state.getUpdateOrderData.data.akademiBank
      this.data1.noRekening = this.$store.state.getUpdateOrderData.data.noRekening
      this.data1.nameRekening = this.$store.state.getUpdateOrderData.data.nameRekening
    }
  },
  methods: {
    init () {
      this.$store.dispatch('getUpdateOrder', this.$route.params.id)
      if (this.$route.params.id === undefined) {
        this.$router.push('/admin')
      }
    },
    uploadGambar (val) {
      let extfile = val.target.files[0].name.substring(val.target.files[0].name.lastIndexOf('.')).toLowerCase()
      console.log(extfile)
      if (val.target.files[0].size > 5000000) {
        alert('Ukuran file terlalu besar')
        this.$refs.fileGambar.value = '' // Reset Input File
      }
      if (extfile === '.jpg' || extfile === '.png' || extfile === '.jpeg' || extfile === '.pdf') {
        var reader = new FileReader()
        this.data1.dokumen = val.target.files[0]
        reader.readAsDataURL(val.target.files[0])
        this.imgStatus = true
      } else {
        alert('Tipe data harus gambar')
        this.$refs.fileGambar.value = '' // Reset Input File
      }
    },
    uploadLogo (val) {
      let extfile = val.target.files[0].name.substring(val.target.files[0].name.lastIndexOf('.')).toLowerCase()
      console.log(extfile)
      if (val.target.files[0].size > 5000000) {
        alert('Ukuran file terlalu besar')
      }
      if (extfile === '.jpg' || extfile === '.png' || extfile === '.jpeg') {
        var reader = new FileReader()
        this.data1.akademiLogo = val.target.files[0]
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
    submitButton () {
      this.$v.data1.$touch()
      if (this.$v.data1.$error) {
        alert('Semua Data Harus Di Isi')
      } else {
        let dataimage = new FormData()
        dataimage.append('logo', this.data1.akademiLogo === undefined ? null : this.data1.akademiLogo)
        dataimage.append('dokumen', this.data1.dokumen === undefined ? null : this.data1.dokumen)
        let tglLahir = this.changeDateFormat(this.data1.dateOfBirth)
        let readyData = {
        // image: dataimage,
          updateBy: this.objSession.name,
          namaPegawai: this.data1.name,
          nip: this.data1.nip,
          jabatan: this.data1.position,
          phone: this.data1.phone,
          email: this.data1.email,
          tempatLahir: this.data1.placeDob,
          tanggalLahir: tglLahir,
          alamatIdentitas: this.data1.address,
          alamatTinggal: this.data1.addressNow,
          jenisKelamin: this.data1.gender,
          kewarganegaraan: this.data1.citizen,
          nik: this.data1.nik,
          akademiName: this.data1.akademiName,
          akademiAddress: this.data1.akademiAddress,
          akademiPhone: this.data1.akademiPhone,
          akademiWeb: this.data1.akademiWeb,
          akademiEmail: this.data1.akademiEmail,
          akademiBank: this.data1.akademiBank,
          noRekening: this.data1.noRekening,
          nameRekening: this.data1.nameRekening
        }
        dataimage.append('model', JSON.stringify(readyData))
        this.$store.dispatch('updateOrder', [this.$route.params.id, this.objSession.email, dataimage])
        NProgress.configure({ showSpinner: false })
        NProgress.start()
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
