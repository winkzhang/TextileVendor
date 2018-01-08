<template>
  <div id="index">
    <div class="box-wrapper">
      <div class="box-header">
        <div class="login-word" @click="pressLogin" :class="{active:ifLog}"><span>登录</span></div>
        <div class="regist-word" @click="pressRegister" :class="{active:ifReg}"><span>注册</span></div>
      </div>
      <div class="box-login" v-show="ifLog === true">
        <div class="login-item"><label>手机号</label><input class="login-input" type="text" v-model="loginPhone" /></div>
        <div class="login-item"><label>密码</label><input class="login-input" type="password" v-model="loginPassword" /></div>
        <a class="login-button" @click="login"><span>登录</span></a>
      </div>
      <div class="box-reg" v-show="ifReg === true">
        <div class="sign-item"><label>手机号</label><input class="login-input" type="text" v-model="signUpPhone" /></div>
        <div class="sign-item"><label>用户名</label><input class="login-input" type="text" v-model="signUpName" /></div>
        <div class="sign-item"><label>密码</label><input class="login-input" type="password" v-model="signUpPassword" /></div>
        <div class="sign-item"><label>确认密码</label><input class="login-input" type="password" /></div>
        <a class="sign-button" @click="signup"><span>注册</span></a>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'IndexView',
    data () {
      return {
        ifLog: true,
        ifReg: false,
        loginPhone: '',
        loginPassword: '',
        signUpPhone: '',
        signUpName: '',
        signUpPassword: ''
      }
    },

    methods: {
      pressLogin: function() {
        this.ifLog = true;
        this.ifReg = false;
      },
      pressRegister: function() {
        this.ifLog = false;
        this.ifReg = true;
      },
      login: function() {

      },
      signup: function() {
        
      }
    }
  }
</script>

<style>
  #index {
    font-family: Microsoft YaHei, 'Avenir', Helvetica, Arial, sans-serif;
    /*height: 1117px;*/
    background-color: #333333;
    border-top: 2px solid #797979;
    border-bottom: 2px solid #797979;
  }
  .box-wrapper {
    background-color: #fff;
    width: 483px;
    margin: 60px auto 80px auto;
    height: 474px;
  }
  .box-header {
    width: 483px;
    height: 70px;
    position: relative;
    font-size: 20px;
    color: #000000;
  }
  .login-word {
    position: absolute;
    width: 160px;
    height: 70px;
    top: 0px;
    left: 70px;
    cursor: pointer;
  }
  .login-word span, .regist-word span {
    display: inline-block;
    margin-top: 20px;
  }
  .regist-word {
    position: absolute;
    width: 160px;
    height: 70px;
    top: 0px;
    right: 70px;
    cursor: pointer;
  }
  .active {
    color: #F57905;
    border-bottom: 2px solid #F57905;
  }
  .box-login, .box-reg {
    height: 404px;
    width: 483px;
  }
  .login-item {
    height: 41px;
    width: 423px;
    margin: 70px auto 0px auto;
    position: relative;
  }
  .sign-item {
    height: 41px;
    width: 423px;
    margin: 35px auto 0px auto;
    position: relative;
  }
  .login-input {
    width: 300px;
    height: 41px;
    position: absolute;
    left: 110px;
    border: 1px solid #979797;
    border-radius: 5px;
  }
  .login-button {
    display: inline-block;
    width: 398px;
    height: 48px;
    background-color: #F57905;
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 70px;
  }
  .sign-button {
    display: inline-block;
    width: 412px;
    height: 48px;
    background-color: #F57905;
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 30px;
  }
  .login-item label, .sign-item label {
    display: inline-block;
    width: 74px;
    position: absolute;
    left: 0px;
    top: 10px;
    text-align: right;
    font-size: 18px;
    color: #333333;
  }
  .login-button span, .sign-button span {
    display: inline-block;
    margin-top: 10px;
  }
</style>
