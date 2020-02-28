<template>
  <div class="">
    <!-- 慢病管理 -->
      <van-cell class="cell-box" center title="待办事项" is-link to="todoList">
        <div class="icon-box" slot="icon">
          <img src="../assets/img/icon1.png">
        </div>
      </van-cell>
      <van-cell class="cell-box" center title="服务对象" is-link to="userList">
        <div class="icon-box" slot="icon">
          <img src="../assets/img/icon2.png">
        </div>
      </van-cell>

  </div>
</template>

<script>
import { Cell  } from "vant";
export default {
  components: {
    [Cell.name]: Cell,
  },
  data() {
    return {
    };
  },
  mounted() {},
  methods: {
    // 使用接口方法
    
  }
};
</script>

<style scoped>
.cell-box {
  margin: 15px;
  width: calc(100% - 30px);
  border-radius: 20px;
  height: 93px;
}
.icon-box{
  width:36px;
  height:36px;
  background-color:#4A8EF4;
  border-radius:50%;
  margin-right:14.5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon-box img{
  width: 19px;
  height: 19px;
}
.van-cell__right-icon{color: #4ba4df}
</style>