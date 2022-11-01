<script setup>
import { computed, ref } from 'vue'
import Nav from '../components/Nav.vue'
import { ElMessage } from 'element-plus'
import { CopyDocument } from '@element-plus/icons-vue'

const myAddress = ref(0)
const copyLink = () =>{
  var _input = document.createElement('input')
  _input.value = refLinks.value
  document.body.appendChild(_input)
  _input.select()
  document.execCommand('Copy')
  ElMessage({
    message: 'Copied to clipboard',
    type: 'success',
  })
  _input.remove()
}

const refLinks = computed(() => {
  if(myAddress.value){
    return window.location.origin + `/?ref=${myAddress.value}`
  }
  return 'Connect Wallet'
})
</script>

<template>
  <main>
    <Nav />
    <div class="header_banner">
      <a class="banner_top_ber">
        <span></span>
      </a>
      <div class="main_area_slider">
        <a href="#">
          <!-- <img src="https://img.konami.com/efootball/s/img/main_page_1_sp.png?v=237" alt=""> -->
          <img src="https://img.konami.com/efootball/s/img/main_page_1.png?v=237" alt="">
          <span>Mint</span>
        </a>
      </div>
    </div>
    <div class="home_contents">
      <div class="latest_title">
        LATEST EVENT
      </div>
      <div class="home_swiper">
        <el-carousel :interval="4000" :autoplay="false" type="card" height="300px">
          <el-carousel-item>
            <img src="@/assets/img/promo_zh_campaign.png" alt="">
          </el-carousel-item>
          <el-carousel-item>
            <img src="@/assets/img/promo_zh_campaign1.png" alt="">
          </el-carousel-item>
          <el-carousel-item>
            <img src="@/assets/img/promo_zh_campaign2.png" alt="">
          </el-carousel-item>
          <el-carousel-item>
            <img src="@/assets/img/promo_zh_campaign3.png" alt="">
          </el-carousel-item>
          <el-carousel-item>
            <img src="@/assets/img/promo_zh_campaign4.png" alt="">
          </el-carousel-item>
          <el-carousel-item>
            <img src="@/assets/img/promo_zh_campaign5.png" alt="">
          </el-carousel-item>
          <el-carousel-item>
            <img src="@/assets/img/promo_zh_campaign6.png" alt="">
          </el-carousel-item>
          <el-carousel-item>
            <img src="@/assets/img/promo_zh_campaign7.png" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="home_information">
      <h2>INFO</h2>
      <div class="Invitation_link">
        <span class="invitation_txt">{{ $t('invitation') }}：</span>
        <div class="invitation_warp">
          <span class="invitation_input">{{ refLinks }}</span>
          <el-button color="#626aef" :icon="CopyDocument" plain size="large" type="primary" @click="copyLink">{{ $t('copy') }}</el-button>
        </div>

      </div>

      <div class="information_item">
        <el-row :gutter="12">
          <el-col :span="12">
            <el-card class="box-card">
              {{ $t('invitPeople') }}：<span>10</span>
            </el-card>
          </el-col>
          <el-col :span="12 ">
            <el-card class="box-card">
              {{ $t('invitNumber') }}：<span>100</span>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="home_introduction">
      <h3>{{ $t('newSeason') }}</h3>
      <p>
        {{ $t('homeP1') }}
        <br><br>
        {{ $t('homeP2') }}
        <br>
        {{ $t('homeP3') }}
        <br>
        {{ $t('homeP4') }}
        <br>
        {{ $t('homeP5') }}
      </p>
    </div>
    <div class="home_bottom_warp">
      <div class="home_trailer">
        <h2>{{ $t('trailer') }}</h2>
        <el-carousel :interval="5000" arrow="always">
          <el-carousel-item>
            <img src="@/assets/img/maxresdefault.jpeg" alt="">
          </el-carousel-item>
          <el-carousel-item>
            <img src="@/assets/img/maxresdefault1.jpeg" alt="">
          </el-carousel-item>
          <el-carousel-item>
            <img src="@/assets/img/maxresdefault2.jpeg" alt="">
          </el-carousel-item>
          <el-carousel-item>
            <img src="@/assets/img/maxresdefault3.jpeg" alt="">
          </el-carousel-item>
          <el-carousel-item>
            <img src="@/assets/img/maxresdefault4.jpeg" alt="">
          </el-carousel-item>
          <el-carousel-item>
            <img src="@/assets/img/maxresdefault5.jpeg" alt="">
          </el-carousel-item>
          <el-carousel-item>
            <img src="@/assets/img/maxresdefault6.jpeg" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="cotents_detail">
        <h2>{{ $t('homeTltle2') }}</h2>
        <p>
          {{ $t('homeTltle2text') }}
        </p>
      </div>
      <div class="btn_area">
        <div class="move_btn">{{ $t('move') }}</div>
      </div>
      <div class="banner_area">
        <h2>{{ $t('homeTltle3') }}</h2>
        <p>
          {{ $t('homeTltle3text1') }}
          <br>
          {{ $t('homeTltle3text2') }}
          <br>
          {{ $t('homeTltle3text3') }}
          <br>
          {{ $t('homeTltle3text4') }}
          <br>
        </p>
        <div class="campaign_link">
          <img src="@/assets/img/intl_cup_top_pc.jpeg">
        </div>
      </div>
    </div>

  </main>
</template>
<style scoped lang="less">
.banner_top_ber{
  display: block;
  background-color: #9600f5;
  span{
    display: block;
    flex-shrink: 0;
    max-width: 1200px;
    height: 6.6666666667vw;
    max-height: 80px;
    margin: 0 auto;
    background: url('@/assets/img/header_banner_pc_en.jpeg') no-repeat 0 0;
    background-size: 100% auto;
  }
}
.main_area_slider{
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  -webkit-box-pack: justify;
  justify-content: space-between;
  width: 100%;
  a,img{
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  span{
    margin: auto;
    color: #ffff00;
    padding: 16px 40px;
    box-sizing: border-box;
    position: absolute;
    text-transform: uppercase;
    display: block;
    bottom: 4%;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    font-size: 2rem;
    line-height: 1;
    margin: auto;
    color: #ffff00;
    padding: 12px 50px;
    box-sizing: border-box;
    border: 1px solid #ffff00;
    border-radius: 100vh;
    font-family: eFootball Stencil;
    font-style: normal;
    font-weight: 300;
    background-color: rgba(0, 0, 0, 0.3);
  }
}
.home_contents{
  background: #ffff00;
  padding: 42px 0;
  overflow: hidden;
}
.latest_title{
  margin-bottom: 30px;
  color: #000096;
  font-size: 1.5714285714rem;
  font-family: eFootball Stencil;
  font-style: normal;
  font-weight: 400;
  text-align: center;
}

.home_swiper{
  max-width: 1200px;
  margin: 0 auto;
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}
.home_information{
  padding: 30px 0;
  background: url('@/assets/img/efootball_bg_cl2.jpeg') repeat-y 0 0/100% auto, #000096;
  h2{
    font-family: eFootball Stencil;
    font-style: normal;
    font-weight: 300;
    font-size: 2.2857142857rem;
    line-height: 1.5;
    background-size: 100% auto;
    box-sizing: border-box;
    width: 100%;
    text-align: center;
    color: #ffff00;
    margin-bottom: 30px;
  }
}
.Invitation_link{
  font-family: source-han-serif-tc;
  max-width: 980px;
  margin: 0 auto;
}
.invitation_warp{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
}

.invitation_txt{
  color: #fff;
  font-size: 20px;
  flex-basis: 14%;
}
.invitation_input{
  flex-basis: 70%;
  border: 1px solid #ffffff;
  padding: 8px 20px;
  box-shadow: rgb(0 0 0 / 5%) 0px 0px 7px 1px;
  border-radius: 4px;
  color: #3f3b3b;
  background: #fff;
  cursor: text;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.copy_btn{
  flex-basis: 20%;
  text-align: center;
  cursor: pointer;
  font-size: 1.2857142857rem;
  line-height: 1;
  color: #fff;
  padding: 14px;
  box-sizing: border-box;
  border: 1px solid #fff;
  background: #3132fe;
  border-radius: 8px;
  font-family: eFootball Stencil;
  font-style: normal;
  font-weight: 300;
  &:hover{
    color: #000;
    background: #ffff00;
    border: 1px solid #3132fe;
  }
}
.information_item{
  padding-top: 20px;
  color: #fff;
  max-width: 980px;
  margin: 0 auto;
  font-size: 20px;
  .box-card{
    /deep/.el-card__body{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span{
        font-family: eFootball Stencil;
      }
    }
  }
}
.home_introduction{
  font-size: 1.2857142857rem;
  line-height: 2;
  color: #000096;
  padding: 12px 0 2%;
  background-color: #ffff00;
  h3{
    font-size: 2.2857142857rem;
    max-width: 1200px;
    padding-left: 20px;
    padding-right: 20px;
    margin: 0 auto;
    text-align: center;
    padding: 2% 0;
    font-family: source-han-serif-tc, serif, "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "メイリオ", Meiryo, arial, sans-serif;
  }
  p{
    text-align: center;
    max-width: 1200px;
    padding-left: 20px;
    padding-right: 20px;
    margin: 0 auto;
  }
}
.home_bottom_warp{
  color: #fff;
  background: url('@/assets/img/efootball_bg_cl2.jpeg') repeat-y 0 0/100% auto, #000096;
}
.home_trailer{
  h2{
    margin-bottom: 30px;
    font-family: eFootball Stencil;
    font-style: normal;
    font-weight: 300;
    font-size: 2.2857142857rem;
    line-height: 1.5;
    background-size: 100% auto;
    box-sizing: border-box;
    width: 100%;
    text-align: center;
    color: #ffff00;
  }
}
@media screen and (min-width: 980px){
  .home_trailer {
    max-width: 980px;
    padding: 50px 0;
    margin: 0 auto;
  }
}
.btn_area{
  display: flex;
  align-items: center;
  justify-content: center;
  .move_btn{
    cursor: pointer;
    border: 1px solid #ffff00;
    background: #000096;
    color: #ffff00;
    position: relative;
    display: inline-block;
    min-height: 50px;
    font-style: normal;
    font-weight: 300;
    font-size: 1.1428571429rem;
    transition: all 0.2s;
    box-sizing: border-box;
    border-radius: 25px;
    text-indent: initial;
    padding: calc(48px / 4) 30px calc(48px / 4);
    &:hover{
      color: #3132fe;
      background: #ffff00;
    }
  }
}
.cotents_detail{
  padding-top: 80px;
  h2{
    font-family: eFootball Stencil;
    font-style: normal;
    font-weight: 300;
    font-size: 2.2857142857rem;
    line-height: 1.5;
    background-size: 100% auto;
    box-sizing: border-box;
    width: 100%;
    text-align: center;
    color: #ffff00;
  }
  p{
    text-align: center;
    padding: 0 2%;
    box-sizing: border-box;
    max-width: 880px;
    margin: 30px auto;
  }
}
.banner_area{
  padding-top: 80px;
  h2{
    font-family: eFootball Stencil;
    font-style: normal;
    font-weight: 300;
    font-size: 2.2857142857rem;
    line-height: 1.5;
    background-size: 100% auto;
    box-sizing: border-box;
    width: 100%;
    text-align: center;
    color: #ffff00;
  }
  p{
    text-align: center;
    line-height: 1.6;
    max-width: 880px;
    margin: 30px auto;
  }
  .campaign_link{
    margin: 0 auto;
    max-width: 880px;
    img{
      width: 100%;
    }
  }
}
</style>
<style>
.el-carousel__arrow{
  font-size: 30px;
  background-color: rgb(31 45 61 / 58%);
}
.el-carousel__container{
  height:600px
}
.el-carousel__item img{
  width: 100%;
}
.el-carousel__indicators--horizontal{
  /* width: 74%; */
}
.el-carousel__indicators--outside button{
  opacity: 1;
  width: 40px;
  height: 4px;
  background-color: #ccc;
}
.el-carousel__indicator.is-active button{
  background-color: #f600ff;
}

@media screen and (min-width: 980px){
  .el-carousel__item img{
    width: 100%;
  }
}

@media only screen and (min-width: 600px) and (max-width: 980px){
  .el-carousel__container{
    height:400px
  }
}
@media only screen and (min-width: 500px) and (max-width: 600px){
  .el-carousel__container{
    height:338px
  }
}

/* @media screen and (max-width: 500px){
  .el-carousel__container{
    height:300px
  }
} */

@media (max-width: 768px) {
  .el-carousel__container{
    height: 200px !important;
  }
  .home_information{
    padding: 30px 10px !important;
  }
  .home_contents .el-carousel__container{
    height:130px !important;
  }
}

</style>