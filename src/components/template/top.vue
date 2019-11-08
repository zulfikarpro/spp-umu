<template>
    <div>
    <nav class="navbar navbar-expand-lg sticky-top navbar-dark" style="background-image: linear-gradient(180deg, #fc7735, #ff5500); ">
  <a class="navbar-brand" href="#">
     <img src="../../assets/univ.png" width="35" height="35" alt="">
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link mx-1 navText" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mx-1 navText" href="#">Informasi Kampus</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mx-1 navText" href="#">Kemahasiswaan</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mx-1 navText" href="#">Pembayaran</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mx-1 navText" href="#">Fee Management</a>
      </li>
    </ul>
  </div>
  </nav>
    </div>
</template>

<script>
export default {
  name: 'top'
}
</script>

<style >
.navText {
  font-size: large;
}
</style>
