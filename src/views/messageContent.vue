<template>
  <div>
    <!-- 消息详情 -->
    <van-notice-bar text="下次随访时间为2020-08-08，提醒ta" left-icon="volume-o"  color="#4A8EF4" background="#CEE0FA" mode="link" @click="notice"/>
    <!-- <van-cell
      center
      :title="item.name"
      v-for="(item,index) in userlist"
      :key="index"
      to
      :label="item.content"
      :value="item.time"
    >
      <div class="van-info img-info" slot="icon">{{item.num}}</div>
      <van-image slot="icon" class="cell-img" round width="50px" height="50px" :src="item.src">
        <template v-slot:error>
          <img src="../assets/img/user.png" style="width:100%" />
        </template>
      </van-image>
    </van-cell> -->
    <div class="bottom-box">
      <van-field
        class="text-box"
        v-model="message"
        rows="1"
        autosize
        label=""
        type="textarea"
        placeholder="请输入"
      >
        <div slot="left-icon" class="icon-text">
          <img src="../assets/img/icon3.png"/>
        </div>
      </van-field>
    </div>
  </div>
</template>

<script>
import { NoticeBar, Field,Cell, Image } from "vant";
export default {
  components: {
    [NoticeBar.name]: NoticeBar,
    [Field.name]: Field,
    [Cell.name]: Cell,
    [Image.name]: Image
  },
  data() {
    return {
      userlist: [
        {
          name: "张三",
          src: "",
          content: "医生您好，我有点头痛",
          time: "17:05",
          num: "2"
        },
        {
          name: "李四",
          src: ""
        }
      ]
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    // 提醒
    notice(){
      console.log('提醒ta')
    },
    init() {
      console.log("获取列表");
    }
  }
};
</script>

<style scoped>
.cell-img {
  margin-right: 15px;
}
.img-info {
  right: auto;
  left: 50px;
  top: 15px;
}
.bottom-box{
  position:fixed;
  bottom:0;
  left:0;
  width:100%;
  padding:8px 15px;
  border-top:1px solid #DCDCDC;
}
.text-box{
}
.icon-text{
  width:10px;
  height:13px;
}
.icon-text img{width:100%;}
</style>