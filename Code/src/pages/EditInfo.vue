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
      <div class="info-header">
        <span class="platform">纺织平台</span>
        <i class="rightArrow"></i>
        <span class="info-name">编辑商家信息</span>
      </div>
      <div class="edit-info">
        <span>基本信息</span>
        <i class="line"></i>
        <div class="edit-detail">
          <div class="edit-item">
            <label>公司名称</label>
            <input type="text" />
          </div>
          <div class="edit-item">
            <label>地址</label>
            <input type="text" />
          </div>
          <div class="edit-item">
            <label>电话</label>
            <input type="text" />
          </div>
          <div class="edit-item">
            <label>传真</label>
            <input type="text" />
          </div>
          <div class="star-item">
            <label class="star-word">主打产品</label>
            <div class="star-right">
              <label v-for="item in products" class="star-label">
                <input name="textile" type="radio" value=""/>
                {{item.name}}
              </label>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import global_ from '../Global'
  export default {
    name: 'EditInfo',
    data () {
      return {
        username: global_.username,
        products: [
          {
            name: "长纤人造毛",
            id: "1"
          },
          {
            name: '抗起球羊毛包芯纱',
            id: "2"
          },
          {
            name: '羊毛马海毛',
            id: '3'
          },
          {
            name: '抗起球冰爽丝',
            id: "4"
          },
          {
            name: '有色丝光棉',
            id: "5"
          },
          {
            name: "有色棉纱",
            id: "6"
          },
          {
            name: "仿亚麻",
            id: "7"
          },
          {
            name: "有色双曲",
            id: "8"
          },
          {
            name: "有色晴棉",
            id: '9'
          },
          {
            name: "拉架",
            id: '10'
          }
        ]
      }
    },

    methods: {

    }
  }
</script>

<style scoped>
  #index {
    font-family: Microsoft YaHei, 'Avenir', Helvetica, Arial, sans-serif;
    width: 1280px;
    margin: 0 auto;
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
  .info-header {
    height: 34px;
    margin-top: 22px;
    margin-bottom: 22px;
    text-align: left;
    position: relative;
  }
  .platform {
    font-weight: bold;
    font-size: 16px;
  }
  .rightArrow {
    display:inline-block;
    background: url("../assets/info/rarrow.png") no-repeat;
    background-size: 26px 26px;
    width: 26px;
    height: 26px;
    position: absolute;
    left: 72px;
    top: -2px;
  }
  .info-name {
    font-weight: bold;
    font-size: 16px;
    color: #F57905;
    position: absolute;
    left: 110px;
    top: 1px;
  }
  .edit-info {
    position: relative;
    height: 500px;
  }
  .edit-info span {
    font-size: 18px;
    font-weight: bold;
    color: #333333;
    position: absolute;
    left: 0px;
  }
  .line {
    position: absolute;
    left: 0px;
    top: 40px;
    display: inline-block;
    width: 1280px;
    height: 1px;
    background-color: #999999;
  }
  .edit-detail {
    width: 1280px;
    position: absolute;
    left: 0px;
    top: 70px;
    text-align: left;
  }
  .edit-item {
    height: 41px;
    margin-bottom: 25px;
  }
  .star-item {
    height: 82px;
    margin-bottom: 25px;
    margin-top: 30px;
    position: relative;
  }
  .edit-item label {
    width: 70px;
    display: inline-block;
    text-align: right;
    font-size: 16px;
    color: #333333;
    margin-right: 20px;
  }
  .star-label {
    display: inline-block;
    width: 130px;
    font-size: 13px;
    color: #333333;
    margin-right: 10px;
    margin-bottom: 20px;
  }
  .star-word {
    width: 70px;
    display: inline-block;
    text-align: right;
    font-size: 16px;
    color: #333333;
    margin-right: 20px;
  }
  .star-right {
    width: 700px;
    position: absolute;
    left: 90px;
    top: 0px;
  }
  .edit-item input {
    width: 458px;
    height: 41px;
    border-radius: 5px;
    border: 1px solid #979797;
    font-size: 16px;
  }
</style>
