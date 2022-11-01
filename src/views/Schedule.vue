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
const scheduleData = [
]
</script>

<template>
  <div class="nft_manager_warp">
    <Nav />
    <div class="nft_manager_tlt">
      World Cup schedule
    </div>
    <div class="nft_manager_ctx">
      <div class="nft_mg_banner">
        <img src="@/assets/img/promo_zh_campaign6.png" alt="">
      </div>
      <div class="info_title">World Cup schedule</div>
      <div class="schedule_warp">
        <div class="schedule_item">
          No data
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

.schedule_item{
  text-align: center;
  font-size: 30px;
}

@media (max-width: 868px) {
  ._swap_page{
    width: 94%;
  }
}
</style>
