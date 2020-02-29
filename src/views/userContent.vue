<template>
  <!-- 个人资料 -->
  <div class="people-info">
    <div class="info">
      <div class="info-box">
        <van-image slot="icon" class="cell-img" round width="60px" height="60px" src="#">
          <template v-slot:error>
            <img src="../assets/img/user.png" style="width:100%" />
          </template>
        </van-image>
        <div class="info-text">
          <div class="info-name">
            姓名：
            <strong>{{user.name}}</strong>
          </div>
          <div class="info-other">
            身份证号：
            <span>{{user.cardId}}</span>
          </div>
          <div class="info-other">
            电话号码：
            <span>{{user.phone}}</span>
          </div>
          <div class="info-other">
            家庭住址：
            <span>{{user.address}}</span>
          </div>
        </div>
      </div>
    </div>
    <van-tabs v-model="active" class="info-tab">
      <van-tab title="慢病档案">
        <div class="info-panel">
          <div class="panel-title">体征</div>
          <van-cell title="身高（cm）" :value="mbda.tz.height" />
          <van-cell title="体重（kg）" :value="mbda.tz.weight" />
          <van-cell title="体质指数（等级）" :value="mbda.tz.tzNum" />
          <van-cell title="腰围（cm）" :value="mbda.tz.yw" />
        </div>
        <div class="info-panel">
          <div class="panel-title">生活方式</div>
          <van-cell title="运动" :value="mbda.shfs.sport" />
          <van-cell title="吸烟" :value="mbda.shfs.smoke" />
          <van-cell title="饮酒" :value="mbda.shfs.drink" />
          <van-cell title="摄盐情况" :value="mbda.shfs.salt" />
          <van-cell title="主食" :value="mbda.shfs.food" />
          <van-cell title="心里调整" :value="mbda.shfs.heart" />
        </div>
        <div class="info-panel">
          <div class="panel-title">高血压专项</div>
          <van-cell title="病史（年）" :value="mbda.hypertension.text1" />
          <van-cell title="心血管危险分层" :value="mbda.hypertension.text2" />
          <van-cell title="治疗方式" :value="mbda.hypertension.text3" />
          <van-cell title="服药连续性" :value="mbda.hypertension.text4" />
          <van-cell title="药物名称" :value="mbda.hypertension.text5" />
          <van-cell title="用法用量" :value="mbda.hypertension.text6" />
          <van-cell title="不良反应" :value="mbda.hypertension.text7" />
        </div>
        <div class="info-panel">
          <div class="panel-title">糖尿病专项</div>
          <van-cell title="病史（年）" :value="mbda.diabetes.text1t" />
          <van-cell title="足背动脉搏动" :value="mbda.diabetes.text2" />
          <van-cell title="治疗方式" :value="mbda.diabetes.text3" />
          <van-cell title="服药连续性" :value="mbda.diabetes.text4" />
          <van-cell title="药物名称" :value="mbda.diabetes.text5" />
          <van-cell title="用法用量" :value="mbda.diabetes.text6" />
          <van-cell title="不良反应" :value="mbda.diabetes.text7" />
        </div>
        <div class="info-panel">
          <div class="panel-title">医生嘱托</div>
          <div class="panel-yszt">
            以下问嘱托内容
          </div>
        </div>
        <div style="height:1px"></div>
      </van-tab>
      <van-tab title="随访记录">
        <van-collapse v-model="activeNames" class="info-collapse">
          <van-collapse-item :name="String(index)" v-for="(item,index) in sfList" :key="index">
            <div slot="title">随访时间  {{item.date}}</div>
            <div>
              {{item.content}}
            </div>
          </van-collapse-item>
        </van-collapse>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Image,Tab, Tabs,Cell, Collapse, CollapseItem } from "vant";
export default {
  components: {
    [Image.name]: Image,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Cell.name]: Cell,
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem,
  },
  data() {
    return {
      user:{
        name:'张三',
        cardId:'330421********3211',
        phone:'12011002222',
        address:'杭州市滨江区越达巷92号'
      },
      active: 0,
      mbda:{
        tz:{
          height:168,
          weight:68,
          tzNum:'xxx',
          yw:'xxx',
        },
        shfs:{
          sport:'xxx',
          smoke:'xxx',
          drink:'xxx',
          salt:'xxx',
          food:'xxx',
          heart:'xxx',
        },
        hypertension:{
          text1:'xxx',
          text2:'xxx',
          text3:'xxx',
          text4:'xxx',
          text5:'xxx',
          text6:'xxx',
          text7:'xxx',
        },
        diabetes:{
          text1:'xxx',
          text2:'xxx',
          text3:'xxx',
          text4:'xxx',
          text5:'xxx',
          text6:'xxx',
          text7:'xxx',
        },
      },
      activeNames: ['0'],
      sfList:[
        {
          date:'2020-02-03',
          content:'这里显示随访的内容（问题+答案）',
        },
        {
          date:'2020-02-05',
          content:'这里显示随访的内容（问题+答案）',
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
.people-info {
  min-height: 100%;
  background-color: #f0f0f0;
}
.info {
  padding: 10px 15px;
}
.info-box {
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  padding: 22px;
}
.cell-img {
  margin-right: 22px;
  flex:none;
}
.info-name{
  font-size:15px;
  color:#A5AFB7;
  padding-bottom:13px;
}
.info-name strong{
  color:#050505;
}
.info-other{
  font-size:12px;
  color:#A5AFB7;
  padding-bottom:8.5px;
}
.info-panel{
  margin:15px;
  border-radius:5px;
  background-color:#fff;
}
.panel-title{
  padding:18px 15px;
  color:#333333;
  font-size:15px;
  font-weight:bold;
}
.van-cell{
  background-color:transparent;
  color:#999999;
  font-size:13px;
}
.van-cell__value{
  color:#333333;
}
.panel-yszt{
  font-size:13px;
  color:#999;
  padding:0 15px 20px;
}
.info-collapse{
   margin:15px;
  border-radius:5px;
  background-color:#fff;
}

/deep/.van-tab--active{color:#4A8EF4;}
/deep/.van-tabs__line{background-color:#4A8EF4}
/deep/.van-tabs__nav{
  background-color:transparent;
}
/deep/.van-collapse-item__title--expanded{background-color:#4A8EF4;color:#fff}
/deep/.van-collapse-item__title--expanded .van-cell__right-icon{color:#fff}
</style>