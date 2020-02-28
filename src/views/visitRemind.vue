<template>
  <div>
    <!-- 随访提醒 -->
    <van-tabs v-model="active">
      <van-tab :title="tab.name" v-for="(tab,i) in tabs" :key="i">
        <div slot="title" class="tab-box">
          <span>{{tab.name}}</span>
          <span>{{tab.num}}人</span>
        </div>
        <van-cell center :title="item.name" v-for="(item,index) in userlist" :key="index">
          <van-image slot="icon" class="cell-img" round width="50px" height="50px" :src="item.src">
            <template v-slot:error>
              <img src="../assets/img/user.png" style="width:100%" />
            </template>
          </van-image>
          <van-button class="zt-btn" type="info" slot="right-icon" size="small" @click="remind">提醒ta</van-button>
        </van-cell>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Tab, Tabs, Cell, Image, Button } from "vant";
export default {
  components: {
    [Cell.name]: Cell,
    [Image.name]: Image,
    [Button.name]: Button,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
  },
  data() {
    return {
      active: 0,
      tabs: [
        {
          name: "今天随访对象",
          num: "2"
        },
        {
          name: "一周内随访对象",
          num: "10"
        },
        {
          name: "一月内随访对象",
          num: "10"
        }
      ],
      userlist: [
        {
          name: "张三",
          src: ""
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
    remind() {
      console.log("提醒");
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
.zt-btn {
  background-color: #4a8ef4;
  border-radius: 5px;
}
.tabs {
  padding-top: 10px;
}
.tab-box {
  margin-top: 15px;
  height: 60px;
  border-radius: 5px;
  background-color: #e4edf9;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.tab-box span {
  color: #82aded;
}
.tab-box span:nth-child(1) {
  font-size: 11px;
  line-height: 1;
  padding-bottom: 9px;
}
.tab-box span:nth-child(2) {
  font-size: 18px;
  line-height: 1;
}
.van-tab--active .tab-box {
  background-color: #4a8ef4;
}
.van-tab--active .tab-box span {
  color: #fff;
}
/deep/.van-tabs__line {
  display: none;
}
/deep/.van-tabs--line .van-tabs__wrap {
  height: auto;
}
</style>