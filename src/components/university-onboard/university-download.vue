<template>
<div class="container-fluid styling">
    <div class="row">
      <div class="w-100 h-100 mx-auto" >
        <div class="hiddenSlide fading" v-for="(item, index) in slideImage" :key="index" :class="{showSlide: item.slideActive}" :style="{backgroundImage: 'url(' + require('@/assets/' + item.bg + '.png') + ')', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }" >
          <InstroPage ></InstroPage>
        </div>
        <!-- The dots/circles -->
        <div style="text-align:center;z-index:1;right:0;left:0;margin-top:-70px;position:absolute;display:block;">
        <span v-for="(item, index) in slideImage" :key="index" class="dot" :class="{dotActive: item.dotActive}" @click="currentSlide(index)"></span>
        </div>
      </div>
        <div class="col-sm-12 mx-auto rounded mb-5 " style="color:black;background-color:#E5E5E5;">
            <div class="mt-7 col-md-4 col-sm-6 mx-auto text-center font-weight-bold titletext2" id="daftarLink" >Cara Daftar</div>
            <div class="col-sm-2 mx-auto text-center mb-7"><div class="mt-3 mx-5 lineText"></div></div>
            <div class="col-sm-12 mx-auto row">
                <div class="col-md-6 col-sm-12 minortext border roundedcust mb-5 py-5 px-4" style="background-color:white;border-color:#d1d1d1!important">
                <div class="mb-5 font-weight-bold">Caranya GAMPANG, cukup unduh dan isi dokumen dibawah ini, kemudian kirim ke : <span style="color:#FF3D12;"><u>hello@umu.co.id</u></span></div>
                <div class="col-md-6 mx-auto text-center">
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
                <div class="col-sm-11 mx-auto text-center">
                    <div class="btn-group buttonGroup" role="group" aria-label="Basic example">
                        <button type="button" class="btn px-5" style="background-color:#FF451D;z-index:1;" ><img src="../../assets/onlinesupport.png" class="img-fluid" alt="support"></button>
                        <button type="button" class="btn minortext" style="background-color:#FF3509;color:white;">Untuk pertanyaan &amp; bantuan, silahkan menghubungi <b><u>hello@umu.co.id</u></b></button>
                    </div>
                </div>
                <!-- <div class="col-sm-11 mx-auto text-center" style="height:150px;" :style="{backgroundImage: 'url(' + require('@/assets/support-background.png') + ')', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }"> -->
                    &nbsp;

                    <!-- <div class="d-flex py-3" :style="{backgroundImage: 'url(' + require('@/assets/support-background.png') + ')', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }">
                      <div class="px-7 py-5" href="mail:hello@umu.co.id">&nbsp;</div>
                    </div> -->
                <!-- </div> -->
                </div>
                <div class="col-md-6 col-sm-12 mt-7 mb-7 text-center"><img src="../../assets/ilustrasi.png" alt="ilustrasi" class="img-fluid"></div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import NProgress from 'nprogress'
import InstroPage from '../university-onboard/instro-page'
export default {
  name: 'UniversityDownload',
  components: {
    InstroPage
  },
  data () {
    return {
      slideIndex: 0,
      slideImage: [{bg: 'studentphoto', slideActive: false, dotActive: false}, {bg: 'childrenlearn', slideActive: false, dotActive: false}, {bg: 'people-children', slideActive: false, dotActive: false}, {bg: 'studentphoto2', slideActive: false, dotActive: false}]
    }
  },
  computed: {
    indexTemplateUser () {
      return this.$store.state.indexTemplateUser
    },
    indexImageSlide () {
      return this.slideIndex
    }
  },
  watch: {
    'indexTemplateUser' () {
      NProgress.done()
    },
    'indexImageSlide' () {
      setTimeout(() => this.showSlides(), 10000) // Change image every 10 seconds
    }
  },
  methods: {
    pdfTemp (e) {
      this.$store.dispatch('pdfTemplateUser')
      e.preventDefault()
      NProgress.configure({ showSpinner: false })
      NProgress.start()
    },
    showSlides (n) {
      let slides = this.slideImage
      for (let i = 0; i < slides.length; i++) {
        slides[i].slideActive = false
        slides[i].dotActive = false
      }
      if (n === undefined || n === null) {
        this.slideIndex++
        if (this.slideIndex > slides.length) {
          this.slideIndex = 1
        }
        slides[this.slideIndex - 1].slideActive = true
        slides[this.slideIndex - 1].dotActive = true
      } else {
        slides[n].slideActive = true
        slides[n].dotActive = true
      }
    },
    currentSlide (param) {
      this.showSlides(param)
    },
    init () {
      this.showSlides()
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab');

.mt-7 {
  margin-top: 7rem !important
}
.mt-5 {
  margin-top: 5rem !important
}
.mt-4 {
  margin-top: 4rem !important
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
      .titletext{font-size: 2.5rem;}
      .titletext2{font-size:2.438rem;}
      .subtext{font-size:1rem !important; }
      .minortext {font-size:1rem !important;}
 }

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
      .titletext{font-size: 2.813rem;}
      .titletext2{font-size:2.75rem;}
      .subtext{font-size:1.25rem !important; }
      .minortext {font-size:1.063rem !important;}
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
    .titletext{font-size: 3.125rem;}
    .titletext2{font-size:3.063rem;}
    .subtext{font-size:1.188rem !important;}
    .minortext {font-size:1.188rem !important;}
 }

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1599.98px) {
    .titletext{font-size: 4.5rem;}
    .titletext2{font-size:3.375rem;}
    .subtext{font-size:1.25rem !important;}
    .minortext {font-size:1.313rem !important;}
 }

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1600px) {
.titletext{font-size:6rem;}
.titletext2{font-size:4rem;}
.subtext{font-size:2.25rem !important;}
.minortext {font-size:1.75rem !important;}
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
/* Fading animation */
.hiddenSlide {
  display: none;
}
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #ffff;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}
.dot:hover, .dotActive {
  background-color: #FF3D12;
}
.showSlide {
  display: block !important;
}
/* Fading animation */
.fading {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

</style>
