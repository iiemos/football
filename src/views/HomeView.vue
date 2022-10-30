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
        <span class="invitation_txt">邀请链接：</span>
        <div class="invitation_warp">
          <span class="invitation_input">{{ refLinks }}</span>
          <el-button color="#626aef" :icon="CopyDocument" plain size="large" type="primary" @click="copyLink">Copy</el-button>
        </div>

      </div>

      <div class="information_item">
        <el-row :gutter="12">
          <el-col :span="12">
            <el-card class="box-card">
              直推人数：<span>10</span>
            </el-card>
          </el-col>
          <el-col :span="12 ">
            <el-card class="box-card">
              直推数量：<span>100</span>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="home_introduction">
      <h3>新赛季eFootball™</h3>
      <p>
      “我们希望为全球球迷带来新的足球游戏体验，展现前所未有的真实性。”<br><br>
      这一直是我们的宗旨，因此我们继续致力收集真实玩家反馈，并基于反馈继续改善和推出新特色，让更多球迷能够在游戏中找到乐趣。<br>
      随着现实世界迈入新赛季，eFootball™也将从2022迈入2023。<br>
      无论是开幕战表现杰出的球员，还是各大俱乐部的新面貌，我们将继续为你带来更多丰富的内容，让你在新赛季依旧能够享受足球带来的激情和快乐！<br>
      快来eFootball™ 2023体验酣畅淋漓的“真实足球”！            </p>
    </div>
    <div class="home_bottom_warp">
      <div class="home_trailer">
        <h2>TRAILER</h2>
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
        <h2>如何充分享受eFootball™ World</h2>
        <p>
          eFootball™ World是eFootball™体验的核心。在这里，你可以使用球坛最顶尖的球队进行比赛，并通过签下和培养自己喜欢的球员来打造属于你的梦之队。当你准备好后，到最大的舞台和最激动人心的赛事中，与来自世界各地的对手一较高下吧。
        </p>
      </div>
      <div class="btn_area">
        <div class="move_btn">Move</div>
      </div>
      <div class="banner_area">
        <h2>eFootball™ International Cup</h2>
        <p>
          “eFootball™ International Cup”是一项以国家/地区为单位的竞赛，所有玩家为追求国家荣耀而战。<br>
          在游戏内报名可获奖励！<br>
          此外，所有玩家将可瓜分总共10亿枚eFootball™金币，玩家可获得的金币数量将由其国家/地区在每个类别中的排名决定。<br>
          代表你自己的国家/地区参赛，并打入进球或夺取胜利，从而做出自己的贡献！<br>
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