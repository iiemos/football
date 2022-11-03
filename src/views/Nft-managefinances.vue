<script setup>
import {ref, onMounted} from 'vue'
import { ElMessage } from 'element-plus'
import Nav from '../components/Nav.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
onMounted(()=>{
})
const centerDialogVisible = ref(false)
const getRews = ()=>{
  ElMessage(t('noOpen'))
}
const joinFunc = ()=>{
  centerDialogVisible.value = true
}
</script>

<template>
  <div class="nft_manager_warp">
    <Nav />
    <div class="nft_manager_tlt">
      INFO DETAIL
    </div>
    <div class="nft_manager_ctx">
      <div class="nft_mg_banner">
        <img src="@/assets/img/promo_zh_campaign.png" alt="">
      </div>
      <div class="info_title">{{ $t('NFTinvestment') }}</div>
      <div class="_rews_warp">
        <div class="_my_rews_txt">
          {{ $t('available') }}(USDX)
          <span>0.00000000</span>
        </div>
        <div class="_my_rews_btn_warp">
          <div class="_my_rews_btn" @click="getRews">{{ $t('receiveAward') }}</div>
          <div class="_my_rews_btn" @click="joinFunc">{{ $t('pledge') }}</div>
        </div>
      </div>
      <div class="_my_nft_box">
        <div class="nft_box_item">
          <img src="@/assets/img/box.png" alt="">
          <div class="nft_box_item_txt">
            <div>{{ $t('myNFTsNumber') }}</div>
            <span>0</span>
          </div>

        </div>
        <div class="nft_box_item">
          <img src="@/assets/img/clock.png" alt="">
          <div class="nft_box_item_txt">
            <div>{{ $t('pledged') }}</div>
            <span>0</span>
          </div>
        </div>
      </div>
      <div class="info_text">
      </div>
    </div>
    <el-dialog
      v-model="centerDialogVisible"
      title="NFT"
      width="30%"
      class="nft_dialog"
      align-center
      :close-on-click-modal="false"
    >
      <div class="nft_number">{{ $t('Number') }}：0</div>
      <div class="nft_select">{{ $t('PleaeSelectNFT') }}</div>
      <div class="nft_approve">{{ $t('ApproveNFT') }}</div>
    </el-dialog>
  </div>
</template>
<style scoped lang="less">
.nft_manager_warp{
  color: #fff;
  background: url('@/assets/img/efootball_bg_cl2.jpeg') repeat-y 0 0/100% auto, #000096;
}
.info_title{
  font-family: eFootball Stencil;
}
.nft_manager_tlt{
  width: 100%;
  text-align: center;
  font-family: eFootball Stencil;
  font-style: normal;
  font-weight: 300;
  color: #000096;
  background: #ffff00;
  line-height: 1.5;
  text-shadow: none;
  font-size: 2.2857142857rem;
  margin-top: 20px;
}
.nft_manager_ctx{
  max-width: 980px;
  margin: 0 auto 2%;
}
.nft_mg_banner{
  padding: 4% 2%;
  margin: 0 auto;
  img{
    width: 100%;
  }
}
.info_title{
  font-size: 2.2857142857rem;
  font-style: normal;
  font-weight: 300;
  color: #ffff00;
  padding: 2%;
  box-sizing: border-box;
  line-height: 1;
}
._rews_warp{
  margin: 0 auto;
  width: 94%;
  padding: 20px;
  border: 1px solid #ffff00;
  border-radius: 20px;
}
._my_rews_txt{
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  span{
    display: block;
    font-weight: 700;
    font-size: 38px;
    text-align: left;
    color: #ffff00;
    line-height: 45px;
  }
}
._my_rews_btn_warp{
  display: flex;
  justify-content:space-between;
}
._my_rews_btn{
  flex-basis: 48%;
  margin: 10px 0;
  padding: 8px 20px;
  border-radius: 8px;
  background: #ffff00;
  color: #000096;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  &:hover{
    transform: translateY(-2px);
  }
}
._my_nft_box{
  padding-top: 20px;
  width: 94%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nft_box_item{
  display: flex;
  align-items:center;
  color: #ffff04;
  flex-basis: 48%;
  margin: 10px 0;
  padding: 8px 20px;
  border-radius: 8px;
  background: #3d3eb3;
  img{
    width: 100px;
  }
}
.nft_box_item_txt{
  margin-left: 20px;
  span{
    font-size: 30px;
  }
}
/deep/.nft_dialog{
  border-radius: 10px;
  background: linear-gradient(0deg,#5028f3,#7756ff,#43a9ff);
  .el-dialog__title{
    font-size: 35px;
    color: #fff;
    font-family: eFootball Stencil;
  }
}
/deep/.el-dialog__body{
  color: #fff;
}
/deep/.el-icon.el-dialog__close{
  color: #fff;
}
.nft_number{
  font-size: 16px;
}
.nft_select{
  margin-top: 20px;
  height: 100px;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 0;
  border-radius: 4px;
  border: 1px solid #FFFFFF;
  box-shadow: 0px 0px 0px 1px #fff;
}
.nft_approve{
  margin-top: 20px;
  cursor: pointer;
  color: #fff;
  text-align: center;
  padding: 4px 0;
  border-radius: 4px;
  background: linear-gradient(270deg,#5028f3,#7756ff,#43a9ff);
  border: 1px solid #FFFFFF;
  box-shadow: 0px 0px 0px 1px #3D55CC;
}
@media (max-width: 868px) {
  /deep/.nft_dialog{
    width: 94%;
  }
  ._my_nft_box{
    flex-direction: column;
    .nft_box_item{
      width: 100%;
    }
  }
}
</style>
