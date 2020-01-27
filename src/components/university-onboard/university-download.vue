<template>
<div class="container-fluid styling">
    <div class="row">
        <div class="col-sm-12 mx-auto" :style="{backgroundImage: 'url(' + require('@/assets/people-children.png') + ')', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }" >
        <div class="col-sm-12 row mt-4 mx-auto ">
            <div class="col-md-2 col-5"><img src="../../assets/abyaasia.png" class="img-fluid rounded-pill" width="300" height="80" alt="abyaasia"></div>
            <div class="offset-md-9 offset-4"></div>
            <div class="col-md-1 col-3"><img src="../../assets/logo_umu_orange.png" class="img-fluid" width="90" height="100" alt="logoumu"></div>
        </div>
        <div class="col-sm-8 mx-auto text-center mt-7 titletext" style="text-shadow: -1px 0 black;">Selamat Datang di <span style="color:#FF3D12;">UMU</span></div>
        <div class="col-sm-2 mx-auto text-center mb-5"><div class="mt-3 mx-5 lineText"></div></div>
        <div class="col-sm-12 mx-auto text-center mb-5 subtext"> Nikmati kemudahan pembayaran SPP di Aplikasi UMU.<br/> Kemudahan tak hanya dirasakan oleh Sekolah/Universitas, tetapi juga oleh pelajar/mahasiswa.<br/> Masih belum yakin?? Yuk buktikan dengan daftar Sekolah/Universitas Anda sekarang! </div>
        <div class="col-md-4 col-sm-6 mx-auto text-center mb-7"><a href="#daftarLink" class="btn btn-lg rounded-pill shadow-lg px-5 py-2 subtext" style="background-color:#FF3D12;color:white;" v-smooth-scroll>Daftar Sekarang</a></div>
        <div class="mt-7">&nbsp;</div>
        </div>
        <div class="col-sm-12 mx-auto rounded mb-5 " style="color:black;background-color:#E5E5E5;">
            <div class="mt-7 col-md-4 col-sm-6 mx-auto text-center font-weight-bold titletext2" id="daftarLink" >Cara Daftar</div>
            <div class="col-sm-2 mx-auto text-center mb-7"><div class="mt-3 mx-5 lineText"></div></div>
            <div class="col-sm-12 mx-auto row">
                <div class="col-md-6 col-sm-12 minortext border roundedcust mb-5 py-5 px-4" style="background-color:white;border-color:#d1d1d1!important">
                <div class="mb-5 font-weight-bold">Caranya GAMPANG, cukup unduh dan isi dokumen dibawah ini, kemudian kirim ke : <span style="color:#FF3D12;"><u>hello@umu.co.id</u></span></div>
                <div class="col-sm-6 mx-auto text-center">
                    <div class="btn-group buttonGroup buttonDefault" role="group" aria-label="Basic example">
                        <button type="button" @click="pdfTemp" class="btn " style="background-color:#FF451D;" ><img src="../../assets/downloadformwhite.png" class="img-fluid" alt="dunlud"></button>
                        <button type="button" @click="pdfTemp" class="btn py-2 px-4 minortext" style="background-color:#FF3509;color:white;">Unduh Dokumen</button>
                    </div>
                </div>
                <div class="mt-5 mb-5"><p class="font-weight-bold" style="margin-left: 20px;">Tata cara registrasi :</p>
                    <ol class="boldNumber">
                    <li>Unduh dan isi Formulir Pendaftaran SPP UMU</li>
                    <li>Lengkapi dokumen Formulir Pendaftaran SPP UMU dengan tandatangan pejabat terkait &amp; cap sekolah/universitas</li>
                    <li>Scan dokumen &amp; kirim ke <span class="font-weight-bold" style="color:#FF3D12;"><u>hello@umu.co.id</u></span></li>
                    <li>Kode Aktivasi akun sekolah/universitas akan dikirimkan ke email yang didaftarkan</li>
                    </ol>
                </div>
                <div class="col-sm-11 mx-auto text-center" style="height:150px;" :style="{backgroundImage: 'url(' + require('@/assets/support-background.png') + ')', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }">
                    &nbsp;
                    <!-- <div class="btn-group buttonGroup" role="group" aria-label="Basic example">
                        <button type="button" class="btn px-5" style="background-color:#FF451D;z-index:1;" ><img src="../../assets/onlinesupport.png" class="img-fluid" alt="support"></button>
                        <button type="button" class="btn minortext " style="background-color:#FF3509;color:white;">Untuk pertanyaan &amp; bantuan, silahkan menghubungi <b>hello@umu.co.id</b></button>
                    </div> -->
                    <!-- <div class="d-flex py-3" :style="{backgroundImage: 'url(' + require('@/assets/support-background.png') + ')', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }">
                      <div class="px-7 py-5" href="mail:hello@umu.co.id">&nbsp;</div>
                    </div> -->
                </div>
                </div>
                <div class="col-md-6 col-sm-12 mt-7 mb-7 text-center"><img src="../../assets/ilustrasi.png" alt="ilustrasi" class="img-fluid"></div>
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
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab');

.mt-7 {
  margin-top: 7rem !important
}
.mb-7 {
  margin-bottom: 7rem !important
}
.px-7 {
  padding-left: 7rem !important;
  padding-right: 7rem !important;
}
.styling {
    color:white;
    font-family: "Roboto Slab";
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
      .titletext{font-size: 40px;}
      .titletext2{font-size:39px;}
      .subtext{font-size:15px !important; }
      .minortext {font-size:16px !important;}
 }

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
      .titletext{font-size: 45px;}
      .titletext2{font-size:44px;}
      .subtext{font-size:20px !important; }
      .minortext {font-size:19px !important;}
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
    .titletext{font-size: 50px;}
    .titletext2{font-size:49px;}
    .subtext{font-size:26px !important;}
    .minortext {font-size:24px !important;}
 }

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
    .titletext{font-size: 55px;}
    .titletext2{font-size:54px;}
    .subtext{font-size:33px !important;}
    .minortext {font-size:26px !important;}
 }

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
.titletext{font-size:96px;}
.titletext2{font-size:64px;}
.subtext{font-size:36px !important;}
.minortext {font-size:28px !important;}
}

.lineText {
    border-bottom: 6px solid #FF3D12;
}
.buttonGroup > button {
    border-radius: .75rem;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.09);
}
.boldNumber {
    counter-reset: item;
    padding-left:-30px;
    display: table;
}
.boldNumber li {
    counter-increment: foo;
    display: table-row;
}

.boldNumber > li::before {
    content: counter(item) ". ";
    display: table-cell; /* aha! */
    padding-right:10px;
}

.boldNumber li:before {
    content: counter(item) ". ";
    counter-increment: item;
    font-weight: bold;
}

.roundedcust {
    border-radius:4rem!important;
}
.buttonGroup:not(.buttonDefault) > button {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

</style>
