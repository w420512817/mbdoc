<template>
  <div>
    <!-- 消息 -->
   <van-cell center :title="item.name" v-for="(item,index) in userlist" :key="index" to="messageContent" :label="item.content" :value="item.time" >
      <div class="van-info img-info" slot="icon">{{item.num}}</div>
      <van-image
        slot="icon"
        class="cell-img"
        round
        width="50px"
        height="50px"
        :src="item.src"
      >
        <template v-slot:error>
          <img src="../assets/img/user.png" style="width:100%" >
        </template>
      </van-image>
    </van-cell>
  </div>
</template>

<script>
import { Cell, Image } from "vant";
export default {
  components: {
    [Cell.name]: Cell,
    [Image.name]: Image
  },
  data() {
    return {
      userlist:[
        {
          name:'张三',
          src:'',
          content:'医生您好，我有点头痛',
          time:'17:05',
          num:'2',
        },
        {
          name:'李四',
          src:'',
        },
      ]
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init(){
      console.log('获取列表')
    }
  }
};
</script>

<style scoped>
.cell-img {
  margin-right: 15px;
}
.img-info{
  right:auto;
  left:50px;
  top:15px;
}
</style>