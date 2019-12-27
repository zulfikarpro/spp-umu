<template>
<div class="container mt-5 ">
    <div class="row ">
    <div class="col-sm-5 mx-auto shadow rounded px-5 py-5">
    <div class="mb-2 img-fluid"  align="center" ><img src="../../assets/success.png" width="100" height="100" alt="logo umu"/></div>
    <div class="mb-2" style="font-size:large;" align="center">Aktivasi Akun Berhasil</div>
    <div class="mb-5" style="font-size:large;" align="center">Buat Password Web Sekolah/Univesitas Anda</div>
    <div class="form-group">
      <input type="password" class="form-control" placeholder="Input Password">
    </div>
    <div class="form-group">
      <input type="password" class="form-control" placeholder="Input Ulang Password">
    </div>
    <div class="row">
    <div class="col-sm-5 mx-auto"><button type="submit" style="background-color:#ff5500;color:white;" class="btn btn-block py-2">Buat Password</button></div>
    </div>
    </div>
    </div>
</div>
</template>

<script>

export default {
  name: 'register',
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>
