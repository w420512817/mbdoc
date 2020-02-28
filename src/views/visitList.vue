<template>
  <div>
    <!-- 随访嘱托 -->
   <van-cell center :title="item.name" v-for="(item,index) in userlist" :key="index" >
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
      <van-button class="zt-btn" type="info" slot="right-icon" size="small" to="">编辑嘱托</van-button>
    </van-cell>
  </div>
</template>

<script>
import { Cell, Image,Button  } from "vant";
export default {
  components: {
    [Cell.name]: Cell,
    [Image.name]: Image,
    [Button.name]: Button
  },
  data() {
    return {
      userlist:[
        {
          name:'张三',
          src:'',
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
.zt-btn{
  background-color:#4A8EF4;
  border-radius:5px;
}
</style>