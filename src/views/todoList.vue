<template>
  <div class="todoList">
    <!-- 待办事项 -->
      <van-cell title="咨询消息" is-link to="messageList"/>
      <van-cell title="随访嘱托" is-link to="visitList"/>
      <van-cell title="随访提醒" is-link to="visitRemind"/>
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

.van-cell{
  padding: 20px;
}
</style>