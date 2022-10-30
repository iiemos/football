<script setup>
import {ref, onMounted} from 'vue'
import Nav from '../components/Nav.vue'
onMounted(()=>{
})
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
      <div class="info_title">NFT 理财</div>
      <div class="_rews_warp">
        <div class="_my_rews_txt">
          可领取(USDX)
          <span>0.00000000</span>
        </div>
        <div class="_my_rews_btn_warp">
          <div class="_my_rews_btn">领取奖励</div>
          <div class="_my_rews_btn">质押</div>
        </div>
      </div>
      <div class="_my_nft_box">
        <div class="nft_box_item">
          <img src="@/assets/img/box.png" alt="">
          <div class="nft_box_item_txt">
            <div>我的NFT数量</div>
            <span>0</span>
          </div>

        </div>
        <div class="nft_box_item">
          <img src="@/assets/img/clock.png" alt="">
          <div class="nft_box_item_txt">
            <div>已质押</div>
            <span>0</span>
          </div>
        </div>
      </div>
      <div class="info_text">
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.nft_manager_warp{
  color: #fff;
  background: url('@/assets/img/efootball_bg_cl2.jpeg') repeat-y 0 0/100% auto, #000096;
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
  background: #41b83d;
  border-radius: 20px;
}
._my_rews_txt{
  font-weight: 400;
  font-size: 20px;
  color: #000;
  line-height: 25px;
  span{
    display: block;
    font-weight: 700;
    font-size: 38px;
    text-align: left;
    color: #fff;
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
  background: #fff;
  color: #41b83d;
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
  color: #000;
  flex-basis: 48%;
  margin: 10px 0;
  padding: 8px 20px;
  border-radius: 8px;
  background: #fff;
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
</style>
