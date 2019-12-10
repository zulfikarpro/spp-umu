<template>
<div class="login">
<div class="login-form mx-auto mt-5 shadow p-5 mb-5 bg-white rounded">
        <p class="text-center h4 pb-3">UMU Login</p>
        <div class="form-group">
        <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text " id="inputGroupPrepend1"><i class="fa fa-user"></i></span>
        </div>
            <input type="text" class="form-control" v-model="email" placeholder="Email" required="required">
        </div>
        </div>
        <div class="form-group">
            <div class="input-group">
            <div class="input-group-prepend">
            <span class="input-group-text " id="inputGroupPrepend2"><i class="fa fa-lock"></i></span>
            </div>
            <input type="password" class="form-control" v-model="password" placeholder="Password" required="required">
            </div>
        </div>
        <div class="clearfix">
            <label class="float-left checkbox-inline"><input type="checkbox"> Ingat Saya</label>
        </div>
        <div class="form-group">
            <button type="submit" v-on:click="postlogin" style="background-color:#ff5500;color:white;" class="btn btn-block mx-auto w-25">Login</button>
        </div>
    <p class="text-center"><a href="#">Lupa Password</a></p>
</div>
</div>
</template>

<script>

export default {
  name: 'login',
  data () {
    return {
      email: 'test',
      password: '123'
    }
  },
  methods: {
    postlogin () {
      if (this.email === 'test' && this.password === '123') {
        this.$router.push('admin/beranda')
      } else {
        alert('email dan password salah')
      }
    }
  }
}
</script>

<style>
.login-form {
    width:500px;
}
.login-form .input-group-text {
    background-color: #ffffff;
}
.form-control {
    border-right:1px solid #ced4da;
    border-top:1px solid #ced4da;
    border-bottom:1px solid #ced4da;
    border-left:none;
}
</style>
