<template>
  <div class="login">
    <van-field v-model="username" required label="用户名" placeholder="请输入用户名" />
    <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
    <van-row class="login-btn" type="flex" justify="center">
      <van-button type="primary" @click="login">登录</van-button>
    </van-row>
  </div>
</template>

<script>
import { Login } from '@/axios/request/request' //调用接口方法
import { Field, Button } from 'vant'
export default {
  name: 'Login',
  components: {
    [Button.name]: Button,
    [Field.name]: Field
  },
  data() {
    return {
      username: 'nj.pskj',
      password: '123456'
    }
  },
  mounted() {},
  methods: {
    // 使用接口方法
    login() {
      let param = {}
      param.username = this.username
      param.password = this.password
      param.tenantId = '383156'
      param.grant_type = 'password'
      param.scope = 'all'
      param.type = 'account'
      Login(param)
        .then(res => {
          console.log(res)
          this.$store.commit('SET_TOKEN', res.response.access_token)
          this.$store.commit('SET_USER_INFO', res.response)
          this.$router.push({ name: 'elderlyManagement' })
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
.login-btn {
  margin-top: 40px;
}
</style>