<template>

  <div>
      <div>
        <div style="width:100%;display:flex; justify-content:space-between;background: white;border: 1px solid rgb(235,237,240); margin: auto; ">
          <van-cell-group style="width:50%;height:60px; border: none;display:flex; justify-content:space-between; margin: auto;"   >            
            <van-cell center @click="GetWallet" value-class="test">{{walletshort || 'Connect'}}</van-cell>
          </van-cell-group>
        </div>
      </div>
  </div>
</template>
<script>
import {Toast, Notify,ImagePreview,Button,Popup,Badge} from 'vant';
import Clipboard from 'clipboard';
import {connectToWallet} from '@/utils/contract'


export default {


  components:{Toast, Notify,ImagePreview,[Button.name]: Button,Popup},
  data() {
    return {
      show:false,
      show1:false,
      show2:false,
      wallet:'',
      walletshort:'',
      showMenu:false,
      url:"#",

    };
  },
  mounted() {
    this.GetWallet()
  },
  computed:{
  },
  watch:{
    // wallet(){
    //   if(this.wallet){
    //      this.GetWallet()
    //     }
    // }

  },
  methods:{
   goPage(name){
      this.$router.push({
        name
      })
    },
    async GetWallet(){
       const wallet1 = await connectToWallet()
       this.wallet = wallet1[0]
       this.walletshort = wallet1[0].substr(0,4)+'....'+ wallet1[0].substr(-4)
      //  const res = await getInviter(this.wallet)
    },
    async goto1(){
      this.show = false
       this.$router.push({
        name:"card",
        params:{
          wallet:this.iswallet
        }
      })
    },
    async showPopup () {
      this.show = ! this.show
      this.show2 = false
      this.showMenu = false
    },

    async showPopup1 () {
      this.show1 = !this.show1
    },
    async showmenu(){
      this.show = false
      this.show1 = false
      this.show2 = false
      this.showMenu = !this.showMenu
    },


    async Home(){
      this.show = false
      this.$router.push({name:"index",})
    },

    async notify(){
      this.show = false
      Notify({background:'#D1D1D1',color:'#000', message: 'Coming Soon',duration: 1000,});
    },
    async copyUrl() {
      // let _this = this;
      let clipboard = new Clipboard(".copy-btn");
      clipboard.on("success", e => {
        // console.log(this.iswallet)
        Notify({ type: 'primary', message: 'Copied',duration: 1000});
        clipboard.destroy();
      });
      clipboard.on("error", e => {
        Notify("Can't copy");
        clipboard.destroy();
      });
    },

 
  },
};
</script>
<style lang="scss" scoped>
.test{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-radius: 5px;
  // margin: 0 5px 0 5px;
  padding: 0 8px 0 8px;
  color: rgb(255, 251, 251);
  font-size: 16px;
  // text-align: right;
  background: #0c447c;
}
.lang{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-radius: 5px;
  margin: 0 -5px 0 -15px;
  // color: rgb(255, 251, 251);
  font-size: 14px;
  // text-align: right;
  // background: #ffffff;
}
.langmeun{
  width: 100%;
  height: 190px;
  margin: 58px 0 0 0;
}
</style>
