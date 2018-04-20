<!--author:winkzhang-->
<template>
  <div id="index">
    <div class="product-header">
      <span class="platform">纺织平台</span>
      <i class="rightArrow"></i>
      <span class="product-name">{{productName}}</span>
    </div>
    <div class="order-detail">
      <span>我的全部订单</span>
      <table>
        <thead>
        <tr>
          <th>商品名称</th>
          <th>商品规格</th>
          <th>数量（kg）</th>
          <th>总价</th>
          <th>订单状态</th>
          <th>买家信息</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in orders">
          <td>{{item.productName}}</td>
          <td>{{item.spec}} | {{item.color}}</td>
          <td>{{item.amount}}</td>
          <td>{{item.total_price}}</td>
          <td>{{item.status}}</td>
          <td><a class="buyer" @click="showDetail">{{item.customer}}</a></td>
          <td style="position:relative;width:10%"><a class="go-pay" v-if="item.status === '待支付'" @click="goToPay">去支付</a><a class="go-pay" v-if="item.status === '待发货'" >确认发货</a><a class="cancel">取消</a></td>
        </tr>
        </tbody>
      </table>
      <i class="line"></i>
    </div>
    <el-dialog :visible.sync="showReciever">
      <!--在el-dialog加类会导致点击其他地方不能关掉-->
      <div class="reciever-box">
        <div class="box-header">
          <i class="logo logo-login"></i>
        </div>
        <div class="reciever-content">
          <div class="line-one">
            <label class="line-left">收货人姓名：</label>
            <span class="line-right">{{recieverName}}</span>
          </div>
          <div class="line-one">
            <label class="line-left">收货人电话：</label>
            <span class="line-right">{{recieverPhone}}</span>
          </div>
          <div class="line-two">
            <label class="line-left">收货人地址：</label>
            <span class="line-right">{{recieverAddress}}</span>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>

  export default {
    name: 'MyOrder',
    data () {
      return {
        productName: '我的订单',
        orders: [],
        username: "",
        showReciever: false,
        recieverName: '张祺',
        recieverPhone: "18819253694",
        recieverAddress: "广东省东莞市大朗镇敏捷春天花园三栋1401"
      }
    },
    methods: {
      getOrder: function() {
        this.$http.get(this.$api.api.getorder+this.username).then(
          (response) => {
            if (JSON.parse(response.bodyText).isSuccess === true) {
              this.orders = JSON.parse(response.bodyText).data.order;
            } else {
              this.$message(JSON.parse(response.bodyText).msg);
            }
          })
      },
      goToPay: function() {
        this.$router.push('/pay');
      },
      showDetail: function() {
        this.showReciever = true;
      }
    },
    mounted () {
      this.username = this.$route.params.name;
      this.getOrder();
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #index {
    width: 1280px;
    margin: 0 auto;
    font-family: Microsoft YaHei;
  }
  .product-header {
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
    background: url("../assets/vendor/rarrow.png") no-repeat;
    background-size: 26px 26px;
    width: 26px;
    height: 26px;
    position: absolute;
    left: 72px;
    top: -2px;
  }
  .product-name {
    font-weight: bold;
    font-size: 16px;
    color: #F57905;
    position: absolute;
    left: 110px;
    top: 1px;
  }
  .order-detail {
    margin-top: 30px;
    text-align: left;
    margin-bottom: 50px;
  }
  .order-detail span {
    color: #333333;
    font-weight: bold;
    font-size: 22px;
  }
  .order-detail table {
    margin-top: 30px;
    width: 1280px;
    text-align: left;
    border-collapse: collapse;
  }
  .order-detail thead tr {
    background-color: #EFEFEF;
    height: 60px;
  }
  .order-detail tbody tr {
    height: 70px;
  }
  .order-detail th {
    font-weight: normal;
    font-size: 18px;
    color: #000;
    padding-left: 15px;
  }
  .order-detail td {
    padding-left: 15px;
    font-weight: normal;
    font-size: 16px;
    color: #000000;
  }
  .go-pay {
    text-decoration: underline;
    color: #F57905;
    position: absolute;
    left: 0px;
    cursor: pointer;
    top: 25px;
  }
  .cancel {
    text-decoration: underline;
    color: #999999;
    position: absolute;
    left: 70px;
    top: 25px;
    cursor: pointer;
  }
  .line {
    display: inline-block;
    height: 2px;
    width: 1280px;
    background-color: #CFCFCF;
    margin-bottom: 50px;
  }
  .buyer {
    text-decoration: underline;
    color: #F57905;
    cursor: pointer;
  }
  .reciever-box {
    height: 389px;
    width: 483px;
    background-color: #fff;
    position: fixed;
    top: 20%;
    left: 30%;
  }
  .box-header {
    height: 65px;
    width: 483px;
    background-color: #333;
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
  .logo-login {
    top: 5px;
    left: 171.5px;
  }
  .reciever-content {
    height: 324px;
    width: 483px;
    text-align: left;
    position: relative;
  }
  .line-one {
    height: 40px;
    margin-top: 30px;
    padding-left: 32px;
    position: relative;
  }
  .line-two {
    margin-top: 30px;
    padding-left: 32px;
    position: relative;
  }
  .line-left {
    font-size: 18px;
    width: 200px;
  }
  .line-right {
    font-size: 18px;
    width: 300px;
    position: absolute;
    left: 150px;

  }
</style>
