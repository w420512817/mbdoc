<template>
  <div class="message-content">
    <!-- 消息详情 -->
    <van-notice-bar
      class="notice-box"
      text="下次随访时间为2020-08-08，提醒ta"
      left-icon="volume-o"
      color="#4A8EF4"
      background="#CEE0FA"
      mode="link"
      @click="notice"
    />
    <div class="dialog-box">
      <div v-for="(item,index) in msgList" :key="index">
      <div class="you-box" v-if="item.role==1">
        <div class="time-tip">{{item.time}}</div>
        <div class="you-msg">
          <van-image slot="icon" class="you-img" round width="50px" height="50px" :src="item.img_src">
            <template v-slot:error>
              <img src="../assets/img/user.png" style="width:100%" />
            </template>
          </van-image>
          <div class="you-content">
            <div class="you-text">{{item.text}}</div>
          </div>
        </div>
      </div>
      <div class="my-box" v-else-if="item.role==2">
        <div class="time-tip">{{item.time}}</div>
        <div class="my-msg">
          <div class="my-content">
            <div class="my-text">{{item.text}}</div>
          </div>
          <van-image slot="icon" class="my-img" round width="50px" height="50px" :src="item.img_src">
            <template v-slot:error>
              <img src="../assets/img/doc.png" style="width:100%" />
            </template>
          </van-image>
        </div>
      </div>
      </div>
    </div>
    <div class="bottom-box">
      <van-field
        class="text-box"
        v-model="message"
        rows="1"
        autosize
        label
        type="textarea"
        placeholder="请输入"
      >
        <div slot="left-icon" class="icon-text">
          <img src="../assets/img/icon3.png" />
        </div>
      </van-field>
    </div>
  </div>
</template>

<script>
import { NoticeBar, Field, Image } from "vant";
export default {
  components: {
    [NoticeBar.name]: NoticeBar,
    [Field.name]: Field,
    [Image.name]: Image
  },
  data() {
    return {
      msgList: [
        {
          role: 1,
          img_src: "",
          time:'17:05',
          text:'医生，我头有点痛，请问是怎么回事？'
        },
        {
          role: 2,
          img_src: "",
          time:'17:18',
          text:'什么时候开始痛的呢？'
        },
        {
          role: 1,
          img_src: "",
          time:'17:30',
          text:'总是打瞌睡，精神不太好，失眠，焦虑，心慌'
        },
        {
          role: 2,
          img_src: "",
          time:'17:20',
          text:'多喝热水'
        },
      ],
      message:''
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    // 提醒
    notice() {
      console.log("提醒ta");
    },
    init() {
      console.log("获取列表");
    }
  }
};
</script>

<style scoped>
.message-content {
  height: 100%;
  background-color: #f0f0f0;
}

.notice-box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  font-size: 11px;
}
.dialog-box {
  height: 100%;
  padding: 40px 0 61px;
  overflow-y: auto;
  overflow-x: hidden;
}

.time-tip {
  color: #999999;
  font-size: 12px;
  text-align: center;
  padding: 20px 0;
}
.you-msg,.my-msg {
  display: flex;
  padding: 0 15px;
}
.my-msg{
  justify-content:flex-end;
}
.you-img,.my-img {
  flex: none;
}
.you-content,.my-content {
  position: relative;
  margin-left: 15px;
  background-color: #fff;
  border-radius: 5px;
  padding: 15px;
  font-size: 14px;
}
.my-content{
  margin :0 15px 0 0;
  background-color: #8CD84A;
}
.you-content::before{
  position: absolute;
  top :15px;
  left:-20px;
  width: 0;
  height: 0;
  content:'';
  border:10px solid transparent;
  border-right-color: #fff;
}
.my-content::before{
  position: absolute;
  top :15px;
  right:-20px;
  width: 0;
  height: 0;
  content:'';
  border:10px solid transparent;
  border-left-color: #8CD84A;
}

.bottom-box {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 8px 15px;
  border-top: 1px solid #dcdcdc;
  background-color: #f4f4f4;
}
.icon-text {
  width: 10px;
  height: 13px;
}
.icon-text img {
  width: 100%;
}
</style>