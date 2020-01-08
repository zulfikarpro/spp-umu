<template>
<div class="container-fluid">
    <div class="row">
      <div class="col-sm-8 mx-auto shadow rounded mt-5 mb-5" v-if="$route.params.id == undefined">
        <div class="row mt-4">
          <div class="col-sm-2 col-1"><img src="../../assets/abyaasia.png" width="300" height="80" alt="abyaasia"></div>
          <div class="offset-sm-8 offset-8"></div>
          <div class="col-sm-2 col-1"><img src="../../assets/logo_umu_orange.png" width="90" height="100" alt="logoumu"></div>
        </div>
        <div class="col-sm-10 offset-sm-1 mt-7 " style="font-size:large;"><b>Selamat Datang</b><br>Nikmati kemudahan pembayaran SPP di Aplikasi UMU<br>Kemudahan tak hanya dirasakan oleh Sekolah/Universitas, tetapi juga oleh pelajar/mahasiswa<br>Masih belum yakin?? Yuk buktikan dengan daftar Sekolah/Universitas Anda sekarang! :)</div>
      <div class="col-sm-8 mx-auto mt-7">
      <div class="row">
        <div class="col-sm-3 col-1 text-center"><router-link to="register/1"><img src="../../assets/univreg.jpg" width="200" height="200" alt="UnivRegis"></router-link><br>Daftar</div>
        <div class="offset-sm-6 offset-6"></div>
        <div class="col-sm-3 col-1 text-center"><router-link to="register/4"><img src="../../assets/uploadform.jpg" width="200" height="200" alt="UploadForm"></router-link><br>Upload Formulir</div>
      </div>
      <div class="mt-7 mb-5" style="font-size:large;">Tata cara registrasi : <br>1. Isi Formulir Pendaftaran SPP UMU<br>2. Print out dokumen Formulir Pendaftaran SPP UMU <br>3. Lengkapi dokumen Formulir Pendaftaran SPP UMU dengan tandatangan pejabat terkait <br>& cap sekolah/universitas<br>4. Scan dokumen & upload dokumen dengan klik button Upload Formulir<br>5. Kode Aktivasi akun sekolah/univeristas akan dikirimkan ke email yang didaftarkan<br>6. Untuk pertanyaan & bantuan, silahkan menghubungi care@umu.co.id</div>
      </div>
      </div>

      <div class="col-sm-8 mx-auto shadow rounded mt-5 mb-5" v-if="$route.params.id == 1">
        <div class="row mt-4">
          <div class="col-sm-2 col-1"><img src="../../assets/abyaasia.png" width="300" height="80" alt="abyaasia"></div>
          <div class="col-sm-8 col-8"><div class="font-weight-bold text-center mt-4" style="font-size:x-large;">FORMULIR PENDAFTARAN SPP UMU</div></div>
          <div class="col-sm-2 col-1"><img src="../../assets/logo_umu_orange.png" width="90" height="100" alt="logoumu"></div>
        </div>
        <div class="col-sm-10 offset-sm-1 mt-7 " style="font-size:large;"><b>Selamat Datang</b><br><u>Isi Form Pendaftaran berikut ini untuk dapat bergabung dengan SPP UMU</u></div>
      <div class="col-sm-8 mx-auto mt-5">
      <div class="row">
        <div class="col-sm-12 col-12 text-center"><img src="../../assets/one.png" width="100" height="100" alt="One"></div>
        <div class="col-sm-12 mt-3 font-weight-bold col-12 text-center"><div style="color:#ff5500;">Isi Data Penanggung Jawab Keuangan Sekolah/Universitas</div></div>
      </div>
      </div>
      <div class="col-sm-10 offset-sm-1 ">
        <div class="col-sm-12 mt-3 col-12"><div >diisi oleh pihak sekolah/universitas*)</div></div>
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
          <input type="text" class="form-control" v-model="$v.data1.nik.$model" name="nik" v-validate="'required'">
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
          <div class="col-sm-2 col-1"><img src="../../assets/abyaasia.png" width="300" height="80" alt="abyaasia"></div>
          <div class="col-sm-8 col-8"><div class="font-weight-bold text-center mt-4" style="font-size:x-large;">FORMULIR PENDAFTARAN SPP UMU</div></div>
          <div class="col-sm-2 col-1"><img src="../../assets/logo_umu_orange.png" width="90" height="100" alt="logoumu"></div>
        </div>
      <div class="col-sm-8 mx-auto mt-5">
      <div class="row">
        <div class="col-sm-12 col-12 text-center"><img src="../../assets/two.png" width="100" height="100" alt="Two"></div>
        <div class="col-sm-12 mt-3 font-weight-bold col-12 text-center"><div style="color:#ff5500;">Isi Data Sekolah/Universitas</div></div>
      </div>
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
          <div class="col-sm-2 col-1"><img src="../../assets/abyaasia.png" width="300" height="80" alt="abyaasia"></div>
          <div class="col-sm-8 col-8"><div class="font-weight-bold text-center mt-4" style="font-size:x-large;">FORMULIR PENDAFTARAN SPP UMU</div></div>
          <div class="col-sm-2 col-1"><img src="../../assets/logo_umu_orange.png" width="90" height="100" alt="logoumu"></div>
        </div>
      <div class="col-sm-8 mx-auto mt-5">
      <div class="row">
        <div class="col-sm-12 col-12 text-center"><img src="../../assets/three.png" width="100" height="100" alt="Three"></div>
        <div class="col-sm-12 mt-3 font-weight-bold col-12 text-center"><div style="color:#ff5500;">Isi Data Wakil Rektor Bidang Keuangan</div></div>
      </div>
      </div>
      <div class="col-sm-10 offset-sm-1 ">
        <div class="mt-3 font-weight-bold">C. DATA WAKIL REKTOR BIDANG KEUANGAN SEKOLAH/UNIVERSITAS</div>
        <div class="form-group mt-3">
        <label >Nama Wakil Rektor</label>
        <input type="text" class="form-control"  v-model="$v.data3.name.$model">
        <small class="form-text text-danger error" v-if="$v.data3.name.$error">Field is required.</small>
        </div>
        <div class="form-group mt-3">
        <label >NIP/Nomor Induk Pegawai</label>
        <input type="text" class="form-control"  v-model="$v.data3.nip.$model">
        <small class="form-text text-danger error" v-if="$v.data3.nip.$error">Field is required.</small>
        </div>
        <div class="form-group mt-3">
        <label >Jabatan</label>
        <input type="text" class="form-control"  v-model="$v.data3.position.$model">
        <small class="form-text text-danger error" v-if="$v.data3.position.$error">Field is required.</small>
        </div>
        <div class="form-group mt-3">
        <label >Nomor Handphone</label>
        <input type="number" class="form-control"  v-model="$v.data3.phone.$model">
       <small class="form-text text-danger error" v-if="$v.data3.phone.$error">Field is required.</small>
        </div>
        <div class="form-group mt-3">
        <label >Email</label>
        <input type="email" class="form-control" v-model="$v.data3.email.$model">
        <small class="form-text text-danger error" v-if="$v.data3.email.$error">Field is required.</small>
        </div>
        <div class="form-group mt-3 row">
          <label class="col-12">Tempat Tanggal Lahir</label>
          <div class="col-6"><input type="text" class="form-control under-line" placeholder="Tempat" v-model="$v.data3.placeDob.$model"></div>
          <div class="col-6"><datepicker placeholder="Tanggal Lahir" :bootstrap-styling="true" v-model="$v.data3.dateOfBirth.$model"></datepicker></div>
          <small class="form-text text-danger col-6" v-if="$v.data3.placeDob.$error">Field is required.</small>
          <small class="form-text text-danger" :class="$v.data3.placeDob.$error === true ? 'col-6' : 'offset-6'" v-if="$v.data3.dateOfBirth.$error">Select is required.</small>
        </div>
        <div class="form-group mt-3">
          <label >Alamat Sesuai Identitas</label>
          <input type="text" class="form-control" v-model="$v.data3.address.$model">
          <small class="form-text text-danger error" v-if="$v.data3.address.$error">Field is required.</small>
        </div>
        <div class="form-group mt-3">
          <label >Alamat Tinggal</label>
          <input type="text" class="form-control" v-model="$v.data3.addressNow.$model">
          <small class="form-text text-danger error" v-if="$v.data3.addressNow.$error">Field is required.</small>
        </div>
        <div class="form-group mt-3 row">
          <label class="col-12">Jenis Kelamin</label>
          <div class="col-6">
          <div class="form-check">
            <input class="form-check-input" type="radio"  v-model="$v.data3.gender.$model"  v-bind:value="'laki-laki'" checked>
            <label class="form-check-label" >
              Laki-Laki
            </label>
          </div>
          </div>
          <div class="col-6">
          <div class="form-check">
            <input class="form-check-input" type="radio" v-model="$v.data3.gender.$model"  v-bind:value="'perempuan'">
            <label class="form-check-label" >
              Perempuan
            </label>
          </div>
          </div>
          <small class="form-text text-danger" v-if="$v.data3.gender.$error">Choose is required.</small>
        </div>
        <div class="form-group mt-3 row">
          <label class="col-12">Kewarganegaraan</label>
          <div class="col-6">
          <div class="form-check">
            <input class="form-check-input" type="radio"  v-model="$v.data3.citizen.$model"   v-bind:value="'WNI'" checked>
            <label class="form-check-label" >
              WNI
            </label>
          </div>
          </div>
          <div class="col-6">
          <div class="form-check">
            <input class="form-check-input" type="radio" v-model="$v.data3.citizen.$model"   v-bind:value="'WNA'" >
            <label class="form-check-label" >
              WNA
            </label>
          </div>
          </div>
          <small class="form-text text-danger" v-if="$v.data3.citizen.$error">Choose is required.</small>
        </div>
        <div class="form-group mt-3">
          <label >NIK</label>
          <input type="text" class="form-control" v-model="$v.data3.nik.$model" name="nik" v-validate="'required'">
          <small class="form-text text-danger error" v-if="$v.data3.nik.$error">Field is required.</small>
        </div>
      </div>
      <div class="col-sm-8 mx-auto mt-5 mb-5">
      <div class="row">
        <div class="col-sm-4 offset-sm-2 text-center"><button type="submit" v-on:click="backButton" style="background-color:#FBE5D7;color:black;" class="btn btn-block py-3">Kembali</button></div>
        <div class="col-sm-4 text-center"><button type="submit" v-on:click="submitButton('wakilRegis')" style="background-color:#F0B286;color:black;" class="btn btn-block py-3">Simpan</button></div>
      </div>
      </div>
      </div>

      <div class="col-sm-8 mx-auto shadow rounded mt-5 mb-5" v-if="$route.params.id == 4">
        <div class="row mt-4">
          <div class="col-sm-2 col-1"><img src="../../assets/abyaasia.png" width="300" height="80" alt="abyaasia"></div>
          <div class="col-sm-8 col-8"><div class="font-weight-bold text-center mt-4" style="font-size:x-large;">FORMULIR PENDAFTARAN SPP UMU</div></div>
          <div class="col-sm-2 col-1"><img src="../../assets/logo_umu_orange.png" width="90" height="100" alt="logoumu"></div>
        </div>
      <div class="col-sm-8 mx-auto mt-5">
      <div class="row">
        <div class="col-sm-12 col-12 text-center"><img src="../../assets/four.png" width="100" height="100" alt="Four"></div>
        <div class="col-sm-12 mt-3 font-weight-bold col-12 text-center"><div style="color:#ff5500;">Print Out lalu Upload Dokumen yang Dilengkapi TTD & Cap Sekolah/Universitas</div></div>
      </div>
      </div>
      <div class="col-sm-8 mx-auto mt-5 text-center">
        <div class="mt-3" style="cursor:pointer;" @click="pilihGambar">
          <input type="file" ref="fileGambar" class="d-none" @change="uploadGambar" accept="image/*" />
          <img src="../../assets/uploadform.jpg" alt="uploadForm" width="200" height="200">
          <div class="mb-3"> {{ imgName }}</div>
          </div>
        <div class="">Upload dokumen juga dapat dilakukan di halaman Home web ini</div>
        <div class="mb-7">dengan klik button <b>Upload Formulir</b></div>
      </div>
      </div>

      <div class="col-sm-8 mx-auto shadow rounded mt-5 mb-5" v-if="$route.params.id == 5">
        <div class="row mt-4">
          <div class="col-sm-2 col-1"><img src="../../assets/abyaasia.png" width="300" height="80" alt="abyaasia"></div>
          <div class="col-sm-8 col-8"><div class="font-weight-bold text-center mt-4" style="font-size:x-large;">FORMULIR PENDAFTARAN SPP UMU</div></div>
          <div class="col-sm-2 col-1"><img src="../../assets/logo_umu_orange.png" width="90" height="100" alt="logoumu"></div>
        </div>
      <div class="col-sm-8 mx-auto mt-5">
      <div class="row">
        <div class="col-sm-12 col-12 text-center"><img src="../../assets/five.png" width="100" height="100" alt="Five"></div>
        <div class="col-sm-12 mt-3 font-weight-bold col-12 text-center"><div style="color:#ff5500;">Upload Dokumen Berhasil</div></div>
      </div>
      </div>
      <div class="col-sm-8 mx-auto mt-7 text-center">
        <div class="mt-3"><img src="../../assets/success.png" alt="uploadForm" width="150" height="150"></div>
        <div class="mt-5">
          <div class="">Kami akan mengirimkan Kode Aktivasi ke email terdaftar dalam maksimal <b>2 hari kerja</b></div>
          <div class=" mb-7">Untuk bantuan & pertanyaan hubungi <b>care@umu.co.id </b></div>
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
  name: 'UniversityOnboardList',
  components: {
    Datepicker
  },
  data () {
    return {
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
        akademiPhone: '',
        akademiEmail: '',
        akademiBank: '',
        noRekening: '',
        nameRekening: ''
      },
      data3: {
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
      akademiPhone: {required},
      akademiEmail: {required},
      akademiBank: {required},
      noRekening: {required},
      nameRekening: {required}
    },
    data3: {
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
    }
  },
  computed: {
    indexSaveUser () {
      return this.$store.state.indexSaveUser
    },
    DateAja () {
      return new Date(this.data1.dateOfBirth)
    }
  },
  watch: {
    'indexSaveWizard' () {
      if (this.$store.state.saveWizardData.success === true) {
        this.$router.push('4')
      } else {
        alert(this.$store.state.saveUserData.message)
      }
    }
  },
  methods: {
    init () {
      if (this.$route.params.id === 1) {
        this.data1 = this.$store.state.regisUser
      }
      if (this.$route.params.id === 2) {
        this.data2 = this.$store.state.regisAkademi
      }
      if (this.$route.params.id === 3) {
        this.data3 = this.$store.state.regisWakil
      }
    },
    pilihGambar () {
      this.$refs.fileGambar.click()
    },
    uploadGambar (val) {
      let dataimage = new FormData()
      dataimage.append('file', val.target.files[0])
      let extfile = val.target.files[0].name.substring(val.target.files[0].name.lastIndexOf('.')).toLowerCase()
      console.log(extfile)
      if (val.target.files[0].size > 250000) {
        alert('Ukuran file terlalu besar')
        this.$refs.fileGambar.value = '' // Reset Input File
      }
      if (extfile === '.jpg' || extfile === '.png' || extfile === '.jpeg') {
        var reader = new FileReader()
        this.imgFile = dataimage
        this.imgName = val.target.files[0].name
        reader.readAsDataURL(val.target.files[0])
        this.imgStatus = true
      } else {
        alert('Tipe data harus gambar')
        this.$refs.fileGambar.value = '' // Reset Input File
      }
      if (this.imgStatus === true) {
        this.$router.push('/universityOnboard/register/5')
      }
    },
    backButton () {
      this.$router.go(-1)
    },
    changeDateFormat () {
      let cdf = new Date(this.data1.dateOfBirth)
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
      this.data1.dateOfBirth = resultDateFormat
    },
    submitButton (params) {
      if (params === 'userRegis') {
        // if (this.data1.name === '' || this.data1.nip === '' || this.data1.position === '' || this.data1.phone === '' || this.data1.email === '' || this.data1.placeDob === '' ||
        //   this.data1.dateOfBirth === '' || this.data1.address === '' || this.data1.addressNow === '' || this.data1.gender === '' || this.data1.citizen === '' || this.data1.nik === '') {
        //   alert('Data Harus Lengkap')
        // } else {
        //   this.$store.state.regisUser = this.data1
        //   this.$router.push('2')
        this.$v.data1.$touch()
        if (this.$v.data1.$error) {
          alert('Data Harus Lengkapi')
        } else {
          this.$store.state.regisUser = this.data1
          this.$router.push('2')
        }
      } else if (params === 'akademiRegis') {
        // if (this.data2.akademiName === '' || this.data2.akademiAddress === '' || this.data2.akademiPhone === '' || this.data2.akademiEmail === '' || this.data2.akademiBank === '' ||
        //   this.data2.noRekening === '' || this.data2.nameRekening === '') {
        //   alert('Data Harus Lengkap')
        // } else {
        //   this.$store.state.regisAkademi = this.data2
        //   this.$router.push('3')
        //
        this.$v.data2.$touch()
        if (this.$v.data2.$error) {
          alert('Data Harus Lengkapi')
        } else {
          this.$store.state.regisAkademi = this.data2
          this.$router.push('3')
        }
      } else if (params === 'wakilRegis') {
        // if (this.data3.name === '' || this.data3.nip === '' || this.data3.position === '' || this.data3.phone === '' || this.data3.email === '' || this.data3.placeDob === '' ||
        //   this.data3.dateOfBirth === '' || this.data3.address === '' || this.data3.addressNow === '' || this.data3.gender === '' || this.data3.citizen === '' || this.data3.nik === '') {
        //   alert('Data Harus Lengkap')
        // } else {
        //   this.$store.state.regisWakil = this.data3
        //   this.$router.push('4')
        // }
        this.$v.data3.$touch()
        if (this.$v.data3.$error) {
          alert('Data Harus Lengkapi')
        } else {
          this.$store.state.regisWakil = this.data3
          let firstData = Object.values(this.$store.state.regisUser)
          let secondData = Object.values(this.$store.state.regisAkademi)
          let thirdData = Object.values(this.$store.state.regisWakil)
          let allData = firstData.concat(secondData, thirdData)
          if (allData.includes(undefined) || allData.includes('')) {
            alert('Semua Form Tidak Boleh Kosong')
          } else {
            let readyData = {
              name: this.$store.state.regisUser.name,
              nip: this.$store.state.regisUser.nip,
              position: this.$store.state.regisUser.position,
              phone: this.$store.state.regisUser.phone,
              email: this.$store.state.regisUser.email,
              placeDob: this.$store.state.regisUser.placeDob,
              dateOfBirth: this.$store.state.regisUser.dateOfBirth,
              address: this.$store.state.regisUser.address,
              addressNow: this.$store.state.regisUser.addressNow,
              gender: this.$store.state.regisUser.gender,
              citizen: this.$store.state.regisUser.citizen,
              nik: this.$store.state.regisUser.nik,
              akademiName: this.$store.state.regisAkademi.akademiName,
              akademiAddress: this.$store.state.regisAkademi.akademiAddress,
              akademiPhone: this.$store.state.regisAkademi.akademiPhone,
              akademiEmail: this.$store.state.regisAkademi.akademiEmail,
              akademiBank: this.$store.state.regisAkademi.akademiBank,
              noRekening: this.$store.state.regisAkademi.noRekening,
              nameRekening: this.$store.state.regisAkademi.nameRekening,
              name2: this.$store.state.regisWakil.name,
              nip2: this.$store.state.regisWakil.nip,
              position2: this.$store.state.regisWakil.position,
              phone2: this.$store.state.regisWakil.phone,
              email2: this.$store.state.regisWakil.email,
              placeDob2: this.$store.state.regisWakil.placeDob,
              dateOfBirth2: this.$store.state.regisWakil.dateOfBirth,
              address2: this.$store.state.regisWakil.address,
              addressNow2: this.$store.state.regisWakil.addressNow,
              gender2: this.$store.state.regisWakil.gender,
              citizen2: this.$store.state.regisWakil.citizen,
              nik2: this.$store.state.regisWakil.nik
            }
            this.$store.dispatch('saveWizard', readyData)
          }
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
