<template>
<div class="container-fluid">
    <div class="row">
        <div class="col-sm-6 mx-auto shadow rounded mt-5 mb-5" >
        <div class="row mt-4">
            <div class="col-sm-2 col-1"><img src="../../assets/abyaasia.png" width="300" height="80" alt="abyaasia"></div>
            <div class="offset-sm-8 offset-8"></div>
            <div class="col-sm-2 col-1"><img src="../../assets/logo_umu_orange.png" width="90" height="100" alt="logoumu"></div>
        </div>
        <div class="col-sm-10 offset-sm-1 mt-7 " style="font-size:large;"><b>Selamat Datang</b><br>Nikmati kemudahan pembayaran SPP di Aplikasi UMU<br>Kemudahan tak hanya dirasakan oleh Sekolah/Universitas, tetapi juga oleh pelajar/mahasiswa<br>Masih belum yakin?? Yuk buktikan dengan daftar Sekolah/Universitas Anda sekarang! :)<br>Caranya GAMPANG, cukup unduh dan isi dokumen dibawah ini, kemudian kirim ke </div>
        <div class="col-sm-3 mx-auto col-1 text-center"><div class="mt-3" style="font-size:x-large;font-weight:bold;">hello@umu.co.id</div></div>
        <div class="col-sm-10 mx-auto mt-7">
        <div class="row">
        <div class="col-sm-4 mx-auto col-1 text-center"><a href="#" @click="pdfTemp"><img src="../../assets/downloadform.png" width="150" height="150" alt="DownloadForm"></a><br><div class="mt-3 font-weight-bold">Download Formulir</div></div>
        </div>
        <div class="mt-7 mb-7" style="font-size:large;"><p style="margin-left: 20px;">Tata cara registrasi :</p>
    <ol>
      <li>Unduh dan isi Formulir Pendaftaran SPP UMU</li>
      <li>Lengkapi dokumen Formulir Pendaftaran SPP UMU dengan tandatangan pejabat terkait &amp; cap sekolah/universitas</li>
      <li>Scan dokumen &amp; kirim ke hello@umu.co.id</li>
      <li>Kode Aktivasi akun sekolah/universitas akan dikirimkan ke email yang didaftarkan</li>
      <li>Untuk pertanyaan &amp; bantuan, silahkan menghubungi hello@umu.co.id</li>
    </ol></div>
        </div>
        </div>
    </div>
</div>
</template>

<script>
import NProgress from 'nprogress'
export default {
  name: 'UniversityDownload',
  data () {
    return {
    }
  },
  computed: {
    indexTemplateUser () {
      return this.$store.state.indexTemplateUser
    }
  },
  watch: {
    'indexTemplateUser' () {
      NProgress.done()
    }
  },
  methods: {
    pdfTemp (e) {
      this.$store.dispatch('pdfTemplateUser')
      e.preventDefault()
      NProgress.configure({ showSpinner: false })
      NProgress.start()
    }
  }
}
</script>

<style>
.mt-7 {
  margin-top: 7rem !important
}
.mb-7 {
  margin-bottom: 7rem !important
}
</style>
