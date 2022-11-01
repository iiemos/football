<script setup>
import {ref, onMounted} from 'vue'
import { ElMessage } from 'element-plus'
import Nav from '../components/Nav.vue'
onMounted(()=>{
})
const centerDialogVisible = ref(false)
const getRews = ()=>{
  ElMessage('暂未开放.')
}
const joinFunc = ()=>{
  centerDialogVisible.value = true
}
const imglist = [
  'https://assets.sorare.com/cache/cardsamplepicture/picture/eb67824e4554a7aa83f25e613772e06d.png',
  'https://assets.sorare.com/cardsamplepicture/28b0e594-915e-493f-9d6f-e8199e579de9/picture/tinified-852a30b1ef544afd081d81766e611091.png',
  'https://assets.sorare.com/cardsamplepicture/318b039e-fdb4-4a65-9f44-d82e22fca5d6/picture/tinified-1ec4c7acff2e144f560a851d83b82453.png',
  'https://assets.sorare.com/cardsamplepicture/599f4a1b-d451-4317-ac6e-4ae2c5c753d0/picture/tinified-e07201722c9752ad8d8511d722976cdf.png',
  'https://assets.sorare.com/card/c33830b2-7ad2-41cf-8126-0257eded0359/picture/6073b70f919c2892d94818d62b77be69.png',
  'https://assets.sorare.com/card/17282925-551e-4c59-ad2e-7f8c0f995e47/picture/2b7ce4fd18695dc3ffedc0884126e16b.png',
  'https://assets.sorare.com/card/9bb018bb-572f-447d-88b2-c53663500c2b/picture/02f14c09eb1490f7743e8282a598c28f.png',
  'https://assets.sorare.com/card/c92ebcf9-5397-4d2c-9689-b44f10d4fdf0/picture/82e2fd0943aa56708d56c07349817c84.png',
  'https://assets.sorare.com/card/815dd2cc-6787-4c5c-a3cf-e1d54da85414/picture/tinified-fce7983c8efc8ca5d3d3e0eb5f383b2e.png',
]
</script>

<template>
  <div class="nft_manager_warp">
    <Nav />
    <div class="nft_manager_tlt">
      MY NFTS
    </div>
    <div class="nft_manager_ctx">
      <div class="nft_mg_banner">
        <img src="@/assets/img/promo_zh_campaign6.png" alt="">
      </div>
      <div class="info_title">NFTS LIST</div>
      <div class="nfts_warp">
        <div class="nfts_item" v-for="(item,index) in imglist" :key="index">
          <img class="nft_img" :src="item" alt="">
        </div>
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

.nfts_warp{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
}
.nfts_item{
  width: 240px;
  height:388px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  position: relative;
  z-index: 2;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 8%) 0px 4px 15px;
  transition: box-shadow 0.25s ease-in-out 0s;
  cursor: pointer;
  &:hover{
    box-shadow: rgb(0 0 0 / 15%) 0px 6px 25px;
    transition: all 0.1s ease 0s;
    .nft_img{
      transform: scale(1.12);
      transition-duration: 0.4s;
    }
  }
}


@media (max-width: 868px) {
  ._swap_page{
    width: 94%;
  }
}
</style>
