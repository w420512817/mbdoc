<template>
  <div >
    <!-- 服务对象 -->
    <van-index-bar>
      <!-- <van-index-anchor index="A" /> -->
    <van-cell center :title="item.name" v-for="(item,index) in userlist" :key="index" to="userContent">
      <van-image
        slot="icon"
        class="cell-img"
        round
        width="50px"
        height="50px"
        :src="item.src"
      >
        <template v-slot:error>
          <img src="../assets/img/user.png" style="width:100%">
        </template>
      </van-image>
    </van-cell>
      <!-- <van-index-anchor index="B" /> -->
    </van-index-bar>
  </div>
</template>

<script>
import { IndexBar,IndexAnchor ,Cell, Image } from "vant";
export default {
  components: {
    [Cell.name]: Cell,
    [Image.name]: Image,
    [IndexBar.name]: IndexBar,
    [IndexAnchor.name]: IndexAnchor,
  },
  data() {
    return {
      userlist: [
        {
          name: "张三",
          src: ""
        },
        {
          name: "李四",
          src: ""
        },
        {
          name: "王五",
          src: ""
        },
      ]
    };
  },
  mounted() {
    this.init();
  },
  methods: {
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
</style>