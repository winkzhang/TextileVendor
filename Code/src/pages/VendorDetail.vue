<template>
  <div class="vendor-detail-wrapper">
    <div id="index">
      <div class="vendor-header">
        <span class="platform">纺织平台</span>
        <i class="rightArrow"></i>
        <span class="vendor-name">{{vendorName}}</span>
        <span class="cursor-pointer" @click="editInfo">
          <i class="editicon"></i>
          <span class="edit-info">修改商家信息</span>
        </span>
      </div>
      <div class="vendor-detail">
        <div class="vendor-img"><img :src="uploadPic" /></div>
        <div class="detail-right">
          <div class="detail-name">{{vendorName}}</div>
          <div class="detail-wrapper">
            <div class="detail-item-per">
              <i class="item-address-icon"></i>
              <label class="detail-title">地址</label>
              <span class="detail-value">{{address}}</span>
            </div>
            <div class="detail-item-per">
              <i class="item-phone-icon"></i>
              <label class="detail-title">电话</label>
              <span class="detail-value">{{phone}}</span>
            </div>
            <div class="detail-item-per">
              <i class="item-tax-icon"></i>
              <label class="detail-title">传真</label>
              <span class="detail-value">{{fax}}</span>
            </div>
            <div class="detail-item-per">
              <i class="item-product-icon"></i>
              <label class="detail-title">产品</label>
              <span class="product-type">{{product}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="input-header">
        <span class="cursor-pointer">
          <i class="addInfo"></i>
          <span class="edit-info" @click="addProduct">添加商品信息</span>
        </span>
      </div>
      <div class="input-detail">
        <div v-for="item in products" class="input-item">
          <div class="order-header">
            <span>{{item.productName}}</span>
            <i class="delete" @click="deleteProduct(item.productId)"></i>
          </div>
          <div v-for="detail in item.detail" class="line-item">
            <span class="spec-wrapper">
              <i class="spec-icon"></i>
              <span class="line-word">{{detail.spec}}</span>
            </span>
            <span class="price-wrapper">
              <i class="price-icon"></i>
              <span class="line-word">{{detail.price}}元/kg</span>
            </span>
          </div>
          <div class="input-bottom">
            <span @click="checkColor(item.pdf)">查看色卡</span>
            <a @click="editSpec(item.productId)">编辑</a>
          </div>
        </div>
      </div>
    </div>
    <el-dialog :visible.sync="showAdd">
      <!--在el-dialog加类会导致点击其他地方不能关掉-->
      <div class="add-box">
        <div class="box-header">
          <i class="logo logo-login"></i>
        </div>
        <div class="add-content">
          <div class="productname">
            <label>商品名称</label>
            <el-select v-model="productType" class="productselect">
              <el-option v-for="item in productTypes" :key="item.id" :label="item.name" :value="item.id">
              </el-option>
            </el-select>
          </div>
          <div class="add-item">
            <label>支数</label>
            <el-input type="text" class="add-input" v-model="newSpec" />
            <label>单价</label>
            <el-input type="text" class="add-input" v-model="newPrice" />
            <a class="addition control" @click="addItem">增加</a>
          </div>
          <el-table
            ref="multipleTable"
            :data="specData"
            tooltip-effect="dark"
            style="width: 100%;padding-left:32px;margin-top:20px;"
            @selection-change="handleSelectionChange">
            <el-table-column
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column
              prop="spec"
              label="支数"
              width="120">
              <input type="text" />
            </el-table-column>
            <el-table-column
              prop="price"
              label="单价/kg"
              width="120">
              <input type="text" />
            </el-table-column>
            <el-table-column
              label="操作"
              width="100">
              <template slot-scope="scope">
                <el-button
                  @click.native.prevent="deleteRow(scope.$index, specData)"
                  type="text"
                  size="small">
                  删除
                </el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="select-file">
            <label>上传色卡</label>
            <input type="file" @change="getFile($event)" class="productselect" />
          </div>
          <a class="cancel" @click="showAdd=false">取消</a>
          <a class="save" @click="saveItem($event)">保存</a>
        </div>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="showExisted">
      <!--在el-dialog加类会导致点击其他地方不能关掉-->
      <div class="add-box">
        <div class="box-header">
          <i class="logo logo-login"></i>
        </div>
        <div class="add-content">
          <div class="productname">
            <label>商品名称</label>
            <el-select v-model="prevType" class="productselect">
              <el-option v-for="item in productTypes" :key="item.id" :label="item.name" :value="item.id">
              </el-option>
            </el-select>
          </div>
          <div class="add-item">
            <label>支数</label>
            <el-input type="text" class="add-input" v-model="newSpec" />
            <label>单价</label>
            <el-input type="text" class="add-input" v-model="newPrice" />
            <a class="addition control" @click="addItem">增加</a>
          </div>
          <el-table
            ref="multipleTable"
            :data="specData"
            tooltip-effect="dark"
            style="width: 100%;padding-left:32px;margin-top:20px;"
            @selection-change="handleSelectionChange">
            <el-table-column
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column
              prop="spec"
              label="支数"
              width="120">
              <input type="text" />
            </el-table-column>
            <el-table-column
              prop="price"
              label="单价/kg"
              width="120">
              <input type="text" />
            </el-table-column>
            <el-table-column
              label="操作"
              width="100">
              <template slot-scope="scope">
                <el-button
                  @click.native.prevent="deleteRow(scope.$index, specData)"
                  type="text"
                  size="small">
                  删除
                </el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="select-file">
            <label>上传色卡</label>
            <input type="file" @change="getFile($event)" class="productselect" />
            <a class="lookColor" @click="checkColor(url)">查看色卡</a>
          </div>
          <a class="cancel" @click="showAdd=false">取消</a>
          <a class="save" @click="updateItem($event)">保存</a>
        </div>
      </div>
    </el-dialog>
  </div>
</template>


<script>
  export default {
    name: 'VendorDetail',
    data () {
      return {
        username: '',
        vendorName: '',
        address: '',
        phone: '',
        fax: '',
        product: '',
        showAdd: false,
        newSpec: '',
        newPrice: '',
        products: [],
        productType: '',
        productTypes: [],
        specData: [],
        file: '',
        multipleSelection: [],
        showExisted: false,
        prevType: '',
        uploadPic: '',
        url: ''
      }
    },
    methods: {
      addProduct: function() {
        this.showAdd = true;
      },
      editSpec: function(id) {
        this.prevType = id;
        this.showExisted = true;
        this.$http.get('http://wink.net.cn:5000/store/showproduct/detail?name='+this.username+'&&productId='+id).then(
          (response) => {
            if (JSON.parse(response.bodyText).isSuccess === true) {
              this.specData = JSON.parse(response.bodyText).data.detail;
              this.url = JSON.parse(response.bodyText).data.pdf;
            } else {
              this.$message(JSON.parse(response.bodyText).msg);
            }
          })
      },
      addItem: function() {
        var newItem = {};
        newItem.spec = this.newSpec;
        newItem.price = this.newPrice;
        newItem.order = this.specData.length+1;
        this.specData.push(newItem);
      },
      deleteRow: function(index, rows) {
        rows.splice(index, 1);
      },
      getFile: function(event) {
        this.file = event.target.files[0];
        console.log(this.file);
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      saveItem: function(event) {
        if (this.multipleSelection.length === 0) {
          this.$message('至少要录入一个支数');
          return;
        }
        if (this.file === '') {
          this.$message('至少要上传一个文件');
          return;
        }
        var enterproduct = {};
        var arr = [];
        for (var i = 0; i < this.multipleSelection.length; i++) {
          var obj = {};
          obj.spec = this.multipleSelection[i].spec;
          obj.price = this.multipleSelection[i].price;
          arr.push(obj);
        }
        enterproduct.name = this.username;
        enterproduct.productId = this.productType;
        enterproduct.detail = arr;
        enterproduct.url = "";
        var that = this;
        this.$http.post('http://wink.net.cn:5000/store/enterproduct/spec', enterproduct).then(
          (response) => {
            if (JSON.parse(response.bodyText).isSuccess === true) {
              that.postFile();
            } else {
              this.$message(JSON.parse(response.bodyText).msg);
              that.postFile();
            }
          })

      },
      updateItem: function(event) {
        if (this.multipleSelection.length === 0) {
          this.$message('至少要录入一个支数');
          return;
        }
        var enterproduct = {};
        var arr = [];
        for (var i = 0; i < this.multipleSelection.length; i++) {
          var obj = {};
          obj.spec = this.multipleSelection[i].spec;
          obj.price = this.multipleSelection[i].price;
          arr.push(obj);
        }
        enterproduct.name = this.username;
        enterproduct.productId = this.productType;
        enterproduct.detail = arr;
        // 此时是编辑，已经上传过pdf，有url
        enterproduct.url = this.url;
        var that = this;
        this.$http.post('http://wink.net.cn:5000/store/enterproduct/spec', enterproduct).then(
          (response) => {
            if (JSON.parse(response.bodyText).isSuccess === true) {
              // 如果有上传新的pdf，调用上传文件的接口，否则不调用
              if (that.file !== '') {
                that.postFile();
                return;
              }
              this.showAdd = false;
            } else {
              this.$message(JSON.parse(response.bodyText).msg);
              if (that.file !== '') {
                that.postFile();
                return;
              }
              this.showAdd = false;
            }
          })
      },
      postFile: function() {
        this.showAdd = false;
        event.preventDefault();
        var formData = new FormData();
        formData.append('productId', this.productType);
        formData.append('name', this.username);
        formData.append('file', this.file);
        this.$http.post('http://wink.net.cn:5000/store/enterproduct/pdf', formData).then(
          (response) => {
            if (JSON.parse(response.bodyText).isSuccess === true) {
              this.products = JSON.parse(response.bodyText).data;
              this.file = '';
            } else {
              this.$message(JSON.parse(response.bodyText).msg);
              this.file = '';
            }
          })
      },
      editInfo: function() {
        this.$router.push('/edit/'+ this.username);
      },
      checkColor: function(pdf) {
        window.open("http://"+pdf);
      },
      getCommodity: function() {
        this.$http.get('http://wink.net.cn:5000/home/commodity').then(
          (response) => {
            if (JSON.parse(response.bodyText).isSuccess === true) {
              this.productTypes = JSON.parse(response.bodyText).data;
              this.productType = this.productTypes[0].id;
            } else {
              this.$message(JSON.parse(response.bodyText).msg);
            }
          })
      },
      getTotalInfo: function() {
        this.$http.get('http://wink.net.cn:5000/store/totalinfo?name='+this.username).then(
          (response) => {
            if (JSON.parse(response.bodyText).isSuccess === true) {
              this.uploadPic = JSON.parse(response.bodyText).data.pic;
              this.vendorName = JSON.parse(response.bodyText).data.company;
              this.address = JSON.parse(response.bodyText).data.address;
              this.phone = JSON.parse(response.bodyText).data.phone;
              this.fax = JSON.parse(response.bodyText).data.fax;
              this.products = JSON.parse(response.bodyText).data.products;
            } else {
              this.$message(JSON.parse(response.bodyText).msg);
            }
          })
      },
      deleteProduct: function(id) {
        this.$confirm('此操作将删除该产品信息, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var deleteproduct = {};
          deleteproduct.name = this.username;
          deleteproduct.productId = id;
          this.$http.post('http://wink.net.cn:5000/store/deleteproduct', deleteproduct).then(
            (response) => {
              if (JSON.parse(response.bodyText).isSuccess === true) {
                this.getTotalInfo();
                this.$message({
                  type: 'success',
                  message: '删除成功!'
                });
              } else {
                this.$message(JSON.parse(response.bodyText).msg);
              }
            })
        }).catch(() => {
          /*this.$message({
            type: 'info',
            message: '已取消删除'
          });*/
        });
      }
    },
    mounted () {
      this.username = this.$route.params.name;
      this.getCommodity();
      this.getTotalInfo();
    }
  }
</script>

<style scoped>
  .vendor-detail-wrapper {
    font-family: Microsoft YaHei;
  }
  #index {
    width: 1280px;
    margin: 0 auto;
  }
  .vendor-header {
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
  .vendor-name {
    font-weight: bold;
    font-size: 16px;
    color: #F57905;
    position: absolute;
    left: 110px;
    top: 1px;
  }
  .editicon {
    display:inline-block;
    background: url("../assets/vendor/pencil.png") no-repeat;
    background-size: 26px 26px;
    width: 26px;
    height: 26px;
    position: absolute;
    right: 110px;
    top: -2px;
  }
  .edit-info {
    font-weight: bold;
    font-size: 16px;
    color: #F57905;
    position: absolute;
    right: 0px;
    top: 2px;
    text-decoration: underline;
  }
  .vendor-detail {
    width: 1280px;
    height: 450px;
    position: relative;
    margin-bottom: 40px;
  }
  .vendor-img {
    height: 450px;
    position: absolute;
    left: 0px;
  }
  .vendor-img img {
    height: 450px;
  }
  .detail-right {
    height: 450px;
    width: 850px;
    position: absolute;
    left: 420px;
  }
  .detail-name {
    position: absolute;
    top: 0px;
    font-weight: bold;
    font-size: 36px;
    color: #333333;
  }
  .detail-wrapper {
    width: 850px;
    position: absolute;
    top: 140px;
    left: 0px;
    font-size: 20px;
    color: #333333;
  }
  .detail-item-per {
    height: 45px;
    margin-bottom: 30px;
    position: relative;
  }
  .item-address-icon {
    display:inline-block;
    background: url("../assets/vendor/location-1.png") no-repeat;
    background-size: 45px 45px;
    width: 45px;
    height: 45px;
    position: absolute;
    left: 0px;
  }
  .item-phone-icon {
    display:inline-block;
    background: url("../assets/vendor/tel.png") no-repeat;
    background-size: 45px 45px;
    width: 45px;
    height: 45px;
    position: absolute;
    left: 0px;
  }
  .item-tax-icon {
    display:inline-block;
    background: url("../assets/vendor/fax.png") no-repeat;
    background-size: 45px 45px;
    width: 45px;
    height: 45px;
    position: absolute;
    left: 0px;
  }
  .item-product-icon {
    display:inline-block;
    background: url("../assets/vendor/product.png") no-repeat;
    background-size: 45px 45px;
    width: 45px;
    height: 45px;
    position: absolute;
    left: 0px;
  }
  .detail-title {
    font-size: 22px;
    color: #333333;
    width: 80px;
    position: absolute;
    left: 80px;
    top: 10px;
    text-align: left;
  }
  .detail-value {
    font-size: 22px;
    color: #999999;
    position: absolute;
    left: 180px;
    top: 10px;
  }
  .product-type {
    color: #F57905;
    font-size: 22px;
    position: absolute;
    left: 180px;
    top: 10px;
  }
  .input-header {
    height: 40px;
    position: relative;
  }
  .addInfo {
    display:inline-block;
    background: url("../assets/vendor/addProduct.png") no-repeat;
    background-size: 26px 26px;
    width: 26px;
    height: 26px;
    position: absolute;
    right: 110px;
    top: -2px;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .input-detail {
    text-align: left;
    /*解决子元素浮动父元素不能被撑开问题*/
    overflow: hidden;
    zoom: 1;
    margin-left: -26px;
  }
  .input-item {
    position: relative;
    height: 326px;
    width: 300px;
    float: left;
    margin-left: 24px;
    margin-top: 30px;
    background-color: #fff;
    border-radius: 8px;
    border: 1px solid #F57905;
    box-shadow: 2px 2px 3px #999999;
    margin-bottom: 30px;
  }
  .order-header {
    width: 300px;
    height: 84px;
    background-color: #F57905;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    position: relative;
    text-align: center;
  }
  .order-header span {
    font-weight: bold;
    font-size: 24px;
    color: #fff;
    position: relative;
    top: 25px;
  }
  .order-header i {
    display: inline-block;
    background: url("../assets/vendor/delete.png") no-repeat;
    background-size: 28px 28px;
    width: 28px;
    height: 28px;
    position: absolute;
    top: 28px;
    right: 25px;
    cursor: pointer;
  }
  .line-item {
    height: 40px;
    margin-top: 20px;
    position: relative;
  }
  .spec-wrapper {
    width: 120px;
    position: absolute;
    left: 20px;
  }
  .spec-icon {
    display: inline-block;
    background: url("../assets/vendor/size.png") no-repeat;
    background-size: 32px 32px;
    width: 32px;
    height: 32px;
    margin-right: 5px;
  }

  .price-wrapper {
    width: 120px;
    position: absolute;
    right: 20px;
  }
  .price-icon {
    display: inline-block;
    background: url("../assets/vendor/money.png") no-repeat;
    background-size: 36px 36px;
    width: 36px;
    height: 36px;
    margin-right: 5px;
  }
  .line-word {
    position: absolute;
    margin-top: 8px;
    font-weight: normal;
    font-size: 18px;
  }
  .input-bottom {
    height: 40px;
    width: 300px;
    position: absolute;
    bottom: 10px;
  }
  .input-bottom span {
    font-size: 16px;
    color: #F57905;
    position: absolute;
    left: 20px;
    top: 6px;
    text-decoration: underline;
    cursor: pointer;
  }
  .input-bottom a {
    display: inline-block;
    cursor: pointer;
    width: 70px;
    height: 32px;
    text-align: center;
    background-color: #F57905;
    color: #fff;
    border-radius: 5px;
    position: absolute;
    right: 20px;
    padding-top: 6px;
    font-weight: bold;
    font-size: 18px;
  }
  .add-box {
    width: 483px;
    background-color: #fff;
    position: fixed;
    top: 10%;
    left: 35%;
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
  .add-content {
    width: 483px;
    text-align: left;
  }
  .productname {
    margin-top: 20px;
    margin-left: 32px;
    font-size: 16px;
    color: #333333;
  }
  .productselect {
    width: 200px;
    margin-left: 41px;
    margin-bottom: 20px;
  }
  .add-item {
    margin-top: 20px;
    margin-left: 32px;
  }
  .add-item label {
    font-size: 16px;
    margin-right: 10px;
    color: #333333;
  }
  .add-input {
    width: 100px;
    margin-right: 20px;
  }
  .control {
    display: inline-block;
    cursor: pointer;
    width: 60px;
    height: 30px;
    text-align: center;
    background-color: #F57905;
    color: #fff;
    border-radius: 5px;
    padding-top: 6px;
    font-weight: bold;
    font-size: 16px;
    margin-left: 15px;
  }
  .select-file {
    margin-left: 32px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .select-file label {
    font-size: 16px;
    margin-right: 10px;
    color: #333333;
  }
  .cancel {
    display: inline-block;
    cursor: pointer;
    width: 100px;
    height: 35px;
    text-align: center;
    background-color: #F57905;
    color: #fff;
    border-radius: 5px;
    padding-top: 11px;
    font-weight: bold;
    font-size: 18px;
    margin-left: 130px;
    cursor: pointer;
    margin-bottom: 20px;
  }
  .save {
    display: inline-block;
    cursor: pointer;
    width: 100px;
    height: 35px;
    text-align: center;
    background-color: #F57905;
    color: #fff;
    border-radius: 5px;
    padding-top: 11px;
    font-weight: bold;
    font-size: 18px;
    margin-left: 30px;
    cursor: pointer;
    margin-bottom: 20px;
  }
  .lookColor {
    font-size: 16px;
    color: #F57905;
    text-decoration: underline;
    cursor: pointer;
  }

</style>
