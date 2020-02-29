<template>
  <div>
    <!-- 编辑嘱托 -->
    <div class="tip-box">
      <div class="tip-text">这里显示随访记录里的问题，以及用户填写的答案 医生可对病人的回答进行修改，以及填写嘱托</div>
    </div>
    <van-cell title="下次随访时间" :value="date" @click="show = true" is-link/>
    <van-calendar v-model="show" :show-confirm="false" @confirm="onConfirm"/>
    <van-button class="submit-btn" type="info" @click="submit">确认签名</van-button>
  </div>
</template>

<script>
import { Calendar ,Cell,Button  } from "vant";
export default {
  components: {
    [Calendar.name]: Calendar,
    [Cell.name]: Cell,
    [Button.name]: Button,
  },
  data() {
    return {
      date: '',
      show: false
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    // 确认签名
    submit(){
      console.log('提交')
    },
     formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    },
    init(){
      console.log('获取列表')
    }
  }
};
</script>

<style scoped>
.tip-box{
  padding:70px 30px;
}
.tip-text{
  color:#B1B1B1;
  font-size:14px;
  text-align:center;
}
.submit-btn{
  background-color:#4A8EF4;
  border-radius:3px;
  width:calc(100% - 50px);
  margin:30px 25px 0;
}
/deep/.van-calendar__selected-day{background-color:#4A8EF4;}
</style>