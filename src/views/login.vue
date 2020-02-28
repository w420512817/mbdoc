<template>
  <div class="login">
    <van-field v-model="phone" required placeholder="手机号" class="input">
      <div class="icon" slot="label">
        <img src="../assets/img/icon4.png" />
      </div>
    </van-field>
    <van-field v-model="yzm" placeholder="验证码" required class="input">
      <div class="icon" slot="label">
        <img src="../assets/img/icon5.png" />
      </div>
    </van-field>
      <van-button type="info" class="loginIn" to="disease">登录</van-button>
    <!-- <van-row class="login-btn" type="flex" justify="center">
    </van-row> -->
  </div>
</template>

<script>
import { Login } from "@/axios/request/request"; //调用接口方法
import { Field, Button } from "vant";
export default {
  name: "Login",
  components: {
    [Button.name]: Button,
    [Field.name]: Field
  },
  data() {
    return {
      phone: "",
      yzm: ""
    };
  },
  mounted() {},
  methods: {
    // 使用接口方法
    login() {
      let param = {};
      param.username = this.username;
      param.password = this.password;
      param.tenantId = "383156";
      param.grant_type = "password";
      param.scope = "all";
      param.type = "account";
      Login(param)
        .then(res => {
          console.log(res);
          this.$store.commit("SET_TOKEN", res.response.access_token);
          this.$store.commit("SET_USER_INFO", res.response);
          this.$router.push({ name: "elderlyManagement" });
        })
        .catch(error => {
          console.log(error);
        });
    },
    login1(){

    }
  }
};
</script>

<style scoped>
.login-btn {
  margin-top: 40px;
}
.input {
  padding: 30px;
}
.icon {
  width: 14px;
  height: 20px;
  margin-right: 12.5px;
}
.icon img {
  width: 100%;
}
.loginIn{
  width: calc(100% - 50px);
  margin: 25px;
  border-radius: 3px;
  background-color: #4A8EF4;
}
/deep/.van-field__label {
  width: auto;
}
</style>