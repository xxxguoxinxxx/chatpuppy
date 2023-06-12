<template>

  <div>
    <van-sticky>
      <Uheader/>
    </van-sticky>
    <div style="width:95%; margin: auto;"> 在 https://www.chatpuppy.com/donate 中如果有未领取的CPT，可点击下面领取按钮，领取未领取的CPT。只需要点一次。多次点击只会付gas，无其他意义。 </div>
    <div><br><br></div>
    <van-button type="primary" @click="claimToken" v-if="show">领取</van-button>
  </div>    
    

</template>
<script>
import {Toast,Dialog, Notify,ImagePreview,Button,Popup} from 'vant';

import Uheader from '@/components/Uheader'

// import Card from './component/card.vue'
import {claimToken11,connectToWallet} from '@/utils/contract'
// import {setWallet , getWallet} from '@/utils/auth'
import {Slide} from 'vue-burger-menu'

// import '~antd/dist/antd.css';


export default {
  components:{Uheader,Slide,Toast,Dialog, Notify,ImagePreview,[Button.name]: Button,Popup},
  data() {
    return {
      show:true,
    };
  }, async mounted() {
    const res = await connectToWallet()
    if(res == 1 ) {
      Toast('请链接BSC网络');
      this.show = false
    }
  },
  computed:{
  },
  methods:{
    async claimToken(){
      const res = await claimToken11()
    }
  },
};
</script>

<style lang="scss" scoped>
.test{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.title{
    width: 100%;
    min-height: 24px;
    font-size: 24px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: #000000; 
    line-height: 26px;
    // margin-left: 0.9rem;
}
.wen{
    width: 90%;
    min-height: 27px;
    font-size: 10px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #000000;
    line-height: 1.6;
    margin-top: 0.9rem;
    margin-left: 1.2rem;
    text-align: left;
}
.btn_partner{
    height: 32px;
    border-radius: 10px;
    min-width: 106px;
    line-height: 32px;
    margin-top: 0.9rem;
    font-size: 13px;
    border:0px;
    background-color: green;
    color: #FFFFFF;
    font-weight: bold;
    font-family: 'Microsoft YaHei';
}
.ban{
    margin: auto;
    margin-top: 2rem;
    height:4rem;
    line-height:  4rem;
    width: 90%;
    border-radius: 0.5rem;
    // background-image: linear-gradient(#2EB6BE, #285BA9);
    background-image: linear-gradient(to right,#1989fa , rgb(4, 99, 172)); 
}
.bankuai{
    font-size: 1.3rem;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: #FFFFFF;
}
.outer_box{
    margin-top: 1rem;
    width:100%;
}
.box{
    margin:auto;
    display: flex;
    width:90%;
    min-height:8.5rem;
    background-color: #ecf9ff;
    border-radius: 1.15rem;
}
.left_box{
    display: flex;
    flex:5;
    min-height:8.5rem;
    align-items: center;
    justify-content: center;
}
.left_img{
    /* align-items: center; */
    // width:4.5rem;
    width: 55px;
    /* height: 4.5rem; */
}
.right_box{
    display:flex;
    flex:15;
    flex-direction:column;
    min-height:9.0rem;
    padding-bottom: 1rem;
    padding-right: 1rem;
    /* background-color: red; */
    text-align: left;
   
}
.right_box .right_top{
    flex:1;
    margin-left: 0.9rem;
    margin-top: 0.9rem;
    font-size: 13px;
    font-family: 'Microsoft YaHei';
    font-weight: bold;
   
    /* height:1rem; */
    /* background-color: yellow; */
}
.right_bottom{
    font-size: 10.5px;
    font-family: 'Microsoft YaHei';
    margin-top: 0.1rem;
    margin-left: 0.9rem;
    /* height:1rem; */
    flex:5;
}
.box_100{
    margin-top: 1rem;
    width:100%;
    min-height:3rem;
}
.box_90{
    margin: auto;
    width:90%;
    min-height:3rem;
    background-color: #ecf9ff;
    border-radius: 32px;
    display: flex;
    align-items: center;
    padding-right: 1rem;
}
.num{
 flex:4;
 font-size: 18px;
 font-family: Microsoft YaHei;
 font-weight: bold;
 text-align: left;
//  background-image: linear-gradient(to right,#285AA9 , #2FBFBF);
 
}
.num span{
    // background-image: linear-gradient(to right,#285AA9 , #2FBFBF);
  background-image: linear-gradient(to right,#1989fa , green); 
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  margin-left: 1rem; 
}
.num_rule{
    text-align: left;
    flex:10;
    margin-left: 2rem; 
}
</style>