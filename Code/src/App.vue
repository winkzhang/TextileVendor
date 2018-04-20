<!--author:winkzhang-->
<template>
  <div id="app">
    <div class="header">
      <div class="header-wrapper">
        <i class="logo logo-header"></i>
        <span class="store-version">商家中心</span>
        <i v-show="ifdetail" class="order-icon" @click="jumpToOrder"></i>
        <span class="my-name">{{this.username}}</span>
      </div>
    </div>
    <!--绑定userSignIn事件-->
    <router-view @userSignIn="userSignIn" />
    <div class="footer">
      <div class="footer-wrapper">
        <i class="logo logo-footer"></i>
        <i class="logo-ch"></i>
        <span class="word-footer">网站首页</span>
        <span class="word-footer" style="right:240px;">联系我们</span>
        <span class="word-footer" style="right:360px;">版权所有</span>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'app',
    data () {
      return {
        username: sessionStorage.userName,
        ifdetail: false
      }
      },

    methods: {
      userSignIn: function(userName) {
        sessionStorage.userName = userName;
        this.username = sessionStorage.userName;
        this.ifdetail = true;
      },
      jumpToOrder: function() {
        this.$router.push('/order/'+this.username);
      }
    },
    watch: {


    }
  }
</script>

<style>
#app {
  font-family: Microsoft YaHei, 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: -7px;
  margin-left: -7px;
  margin-right: -7px;
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
.logo {
  display:inline-block;
  background: url("assets/header/logo.png") no-repeat;
  background-size: 140px 50px;
  width: 140px;
  height: 50px;
  position: absolute;
}
.logo-header {
  left: 0px;
}
.logo-footer {
  top: 20px;
  left: 0px;
}
.logo-ch {
  display:inline-block;
  background: url("assets/header/logo-ch.png") no-repeat;
  background-size: 140px 40px;
  width: 140px;
  height: 40px;
  position: absolute;
  left: 0px;
  top: 70px;
}
.footer {
  height: 160px;
  background-color: #333333;

}
.footer-wrapper {
  height: 160px;
  width: 1280px;
  margin: 0 auto;
  position: relative;

}
.word-footer {
  color: #fff;
  font-size: 13px;
  position: absolute;
  top: 80px;
  right: 120px;
}
.order-icon {
  display: inline-block;
  position: absolute;
  width: 32px;
  height: 32px;
  background: url('assets/header/order.png') no-repeat;
  background-size: 32px 32px;
  right: 60px;
  top: 10px;
  cursor: pointer;
}
.el-dialog__header {
  display: none;
}
.el-dialog__body {
  padding: 0;
}
.el-button--text {
  color: #333333;
  background: 0 0;
  padding-left: 0;
  padding-right: 0;
}
</style>
