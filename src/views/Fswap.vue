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
        <img src="@/assets/img/promo_zh_campaign6.png" alt="">
      </div>
      <div class="info_title">Fswap</div>
      <div class="_swap_page">
        <div class="_swap_page_title">
          {{ $t('exchange') }}
        </div>
        <div>
          <div class="_swap_top_box swap_item">
            <div class="swap_input">
              <div class="swap_input_top">
                <input type="text" value="0">
                <div class="swap_input_icon">
                  <img src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png">
                  USDT
                </div>
              </div>
              <div class="swap_input_btm">
                {{ $t('balance') }}：0 <span class="max_btn">MAX</span>
              </div>
            </div>
          </div>
          <div class="iKjacu">
            <div class="hbdxeO">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E111A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
            </div>
          </div>
        </div>
        <div class="_swap_bottom_box swap_item">
          <div class="swap_input">
            <div class="swap_input_top">
              <input type="text" value="0">
              <div class="swap_input_icon">
                <img src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png">
                USDC
              </div>
            </div>
            <div class="swap_input_btm">
              {{ $t('balance') }}：0 <span class="max_btn">MAX</span>
            </div>
          </div>
        </div>
        <div class="swap_btn">{{ $t('swap') }}</div>
      </div>
    </div>

  </div>
</template>
<style scoped lang="less">
.nft_manager_warp{
  min-height: 100vh;
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
.info_title{
  margin: 10px;
  font-family: eFootball Stencil;
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
._swap_page{
  position: relative;
  background: rgb(255, 255, 255);
  border-radius: 16px;
  border: 1px solid rgba(94, 104, 135, 0.24);
  padding: 8px;
  z-index: 1;
  margin: 0 auto;
  max-width: 480px;
  ._swap_page_title{
    padding: 8px 12px;
    margin-bottom: 8px;
    width: 100%;
    font-size: 18px;
    color: rgb(14, 17, 26);
  }
  .swap_item{
    position: relative;
    background-color: rgb(245, 246, 252);
    border-radius: 12px;
    padding: 16px;
    color: rgb(94, 104, 135);
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
  }
  .swap_input{
    position: relative;
    border-radius: 20px;
    z-index: 1;
    width: initial;
    transition: height 1s ease 0s;
    will-change: height;
    min-height: 44px;
    width: initial;
    .swap_input_top{
      display: flex;
      align-items: center;
    }
    input{
      color: rgb(14, 17, 26);
      position: relative;
      font-weight: 400;
      outline: none;
      border: none;
      flex: 1 1 auto;
      background-color: transparent;
      font-size: 28px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 0px;
      appearance: textfield;
      opacity: 1;
      transition: opacity 0.2s ease-in-out 0s;
      text-align: left;
      font-size: 36px;
      line-height: 44px;
      font-variant: small-caps;
    }
    .swap_input_icon{
      background-color: rgb(232, 236, 251);
      color: rgb(14, 17, 26);
      padding: 4px 8px 4px 8px;
      font-size: 20px;
      border-radius: 16px;
      margin-left: 8px;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: start;
      justify-content: flex-start;
      img{
        width: 24px;
        height: 24px;
        margin-right: 4px;
        background: radial-gradient(white 50%, rgba(255, 255, 255, 0) calc(75% + 1px), rgba(255, 255, 255, 0) 100%);
        border-radius: 50%;
        box-shadow: white 0px 0px 1px;
        border: 0px solid rgba(255, 255, 255, 0);
      }
    }
    .swap_input_btm{
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: end;
      font-weight: 400;
      font-size: 14px;
      color: rgb(94, 104, 135);
      .max_btn{
        cursor: pointer;
        padding: 2px 6px;
        border-radius: 8px;
        color: #000;
        margin-left: 6px;
        background-color: rgb(187, 201, 251);
      }
    }
  }
  .iKjacu{
    cursor: pointer;
    border-radius: 12px;
    height: 40px;
    width: 40px;
    position: relative;
    margin: -18px auto;
    background-color: rgb(232, 236, 251);
    border: 4px solid rgb(255, 255, 255);
    z-index: 2;
  }
  .hbdxeO {
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  ._swap_top_box{

  }
  ._swap_bottom_box{
    
  }
}
.swap_btn{
  margin-top: 20px;
  width: 100%;
  border-radius: 20px;
  border: 1px solid transparent;
  color: #fff;
  text-decoration: none;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  flex-wrap: nowrap;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 1;
  will-change: transform;
  transition: transform 450ms ease 0s;
  transform: perspective(1px) translateZ(0px);
  font-size: 20px;
  font-weight: 600;
  padding: 16px;
  background: linear-gradient(270deg,#5028f3,#7756ff,#43a9ff);
  box-shadow: none;
  border: 1px solid transparent;
  outline: none;
  border: 1px solid #FFFFFF;
  box-shadow: 0px 0px 0px 1px #3D55CC;
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
  ._swap_page{
    width: 94%;
  }
}
</style>
