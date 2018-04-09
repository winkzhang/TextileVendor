<template>
  <div>
    <!--<div class="header">
      <div class="header-wrapper">
        <i class="logo logo-header"></i>
        <span class="store-version">商家中心</span>
        <span class="my-name">{{this.username}}</span>
      </div>
    </div>-->
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
        signUpPassword: '',
        username: ''
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
        var login = {
          "number": this.loginPhone,
          "password": this.loginPassword,
          "identity": "vendor"
        }
        this.$http.post(this.$api.api.login, login).then(
          (response) => {
            if (JSON.parse(response.bodyText).isSuccess === true) {
              this.$message(JSON.parse(response.bodyText).msg);
              this.username = JSON.parse(response.bodyText).data;
              // 触发userSignIn,向父组件App.vue传值，将用户名传过去
              this.$emit('userSignIn', this.username);
              var that = this;
              this.$http.get(this.$api.api.ifnew+this.username).then(
                (resp) => {
                  if (JSON.parse(resp.bodyText).isSuccess === true) {
                    if (JSON.parse(resp.bodyText).data.new === false) {
                      this.$router.push('/detail/'+that.username);
                    } else {
                      this.$router.push('/edit/'+that.username);
                    }
                  } else {
                    this.$message(JSON.parse(resp.bodyText).msg);
                  }
                })
            } else {
              this.$message(JSON.parse(response.bodyText).msg);
            }
          })
      },
      signup: function() {
        var register = {
          "number": this.signUpPhone,
          "username": this.signUpName,
          "password": this.signUpPassword,
          "identity": "vendor"
        }
        this.$http.post(this.$api.api.signup, register).then(
          (response) => {
            if (JSON.parse(response.bodyText).isSuccess === true) {
              this.$message(JSON.parse(response.bodyText).msg);
            } else {
              this.$message(JSON.parse(response.bodyText).msg);
            }
          })
      }
    }
  }
</script>

<style scoped>

  #index {
    font-family: Microsoft YaHei, 'Avenir', Helvetica, Arial, sans-serif;
    /*height: 1117px;*/
    background-color: #333333;
    border-top: 2px solid #797979;
    border-bottom: 2px solid #797979;
  }

  .header {
    height: 50px;
    background-color: #333333;
    /*position: relative;*/
  }
  .header-wrapper {
    width: 1280px;
    height: 50px;
    margin: 0 auto;
    position: relative;
  }
  .logo {
    display:inline-block;
    background: url("../assets/header/logo.png") no-repeat;
    background-size: 140px 50px;
    width: 140px;
    height: 50px;
    position: absolute;
  }
  .logo-header {
    left: 0px;
  }

  .store-version {
    font-size: 24px;
    color: #ffffff;
    position: absolute;
    top: 10px;
    left: 200px;
  }
  .my-name {
    font-size: 16px;
    color: #ffffff;
    position: absolute;
    top: 15px;
    right: 0px;
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
