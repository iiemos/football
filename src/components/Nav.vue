<script setup>
import {ref, onMounted} from 'vue'
import { ElMessage } from 'element-plus'
import { Menu, ArrowDown } from '@element-plus/icons-vue'
import 'element-plus/theme-chalk/display.css'
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
let cSelectShow = ref(false)
const drawer = ref(false)
onMounted(()=>{
})
const shows = ()=>{
}
const noOpen = ()=>{
  ElMessage(t('noOpen'))
}
const currentLang = ref('en')
const currentLangText = ref('简体中文')

const changeLang = ()=>{
  currentLang.value = currentLang.value == 'en' ? 'cn' : 'en'
  currentLangText.value = currentLang.value == 'en' ? '简体中文' : 'English'
  locale.value = currentLang.value
}
</script>

<template>
  <section class="nav_warp">
    <div class="logo_efootball" >
      <img src="@/assets/ball_logo.svg" alt="">
    </div>
    <div class="global_nav">
      <router-link class="nav_item" to="/">
        {{ $t('home') }}
      </router-link>
      <a class="nav_item _children" href="javascript:;">
        <el-dropdown>
          <span class="el-dropdown-link">
            NFT
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <router-link to="/nft-managefinances">{{ $t('NFTinvestment') }}</router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <a href="javascript:;" @click="noOpen()">{{ $t('NFTmining') }}</a>
              </el-dropdown-item>
              <el-dropdown-item>
                <a href="javascript:;" @click="noOpen()">{{ $t('NFTmarket') }}</a>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </a>
      <router-link class="nav_item" to="/fswap">
        FSWAP
      </router-link>
      <router-link class="nav_item" to="/my-nfts">
        {{ $t('myCollection') }}
      </router-link>
      <router-link class="nav_item" to="/Schedule">
        {{ $t('contest') }}
      </router-link>
      <a class="nav_item" href="javascript:;">
        {{ $t('noOpen') }}
      </a>
      <div class="nav_item" @click="changeLang()">
        {{ currentLangText }}
      </div>
    </div>
    <div class="m_global_nav">
      <el-button circle :icon="Menu" @click="drawer = true">
      </el-button>
      <el-drawer v-model="drawer" :with-header="false" custom-class="m_nav_drawer" size="50%">
        <div class="m_nav_warp">
          <router-link class="m_nav_item" to="/">
            {{ $t('home') }}
          </router-link>
          <a class="m_nav_item" href="javascript:;">
            <el-collapse>
              <el-collapse-item title="NFT" name="1">
                <router-link to="/nft-managefinances"> {{ $t('NFTinvestment') }}</router-link>
                <div @click="noOpen()"> {{ $t('NFTmining') }}</div>
                <div @click="noOpen()"> {{ $t('NFTmarket') }}</div>
              </el-collapse-item>
            </el-collapse>
          </a>
          <router-link class="m_nav_item" to="/fswap">
            FSWAP
          </router-link>
          <router-link class="m_nav_item" to="/my-nfts">
            {{ $t('myCollection') }}
          </router-link>
          <router-link class="m_nav_item" to="/Schedule">
            {{ $t('contest') }}
          </router-link>
          <div class="m_nav_item" @click="changeLang()">
            {{ currentLangText }}
          </div>
        </div>
      </el-drawer>
    </div>
  </section>
</template>
<style>
.el-dropdown-menu{
  background: #3132fe;
}
.el-dropdown-menu__item{
  color: #fff;

}
.el-dropdown-menu__item a{
  color: #fff;

}
.el-dropdown-menu__item:not(.is-disabled):focus{
  color: #3132fe;
  background: #ffff00;
  
}
.el-dropdown-menu__item:not(.is-disabled):focus a{
  color: #3132fe;
  background: #ffff00;
}
.el-dropdown{
  width: 100%;
  color: #fff;
}
.el-dropdown:hover{
  color: #3132fe;
}
.el-popper.is-light .el-popper__arrow::before{
  background:#3132fe;
}
</style>
<style scoped lang="less">

.el-dropdown-link{
  width: 100%;
  padding: 19px 0;
}
.nav_warp{
  background: #020096;
}
.logo_efootball{
  max-width: 360px;
  margin: 0 auto;
  padding: 20px 0 20px 0;
}
.global_nav{
  display: flex;
  align-items:center;
  max-width: 1200px;
  background:#3132fe;
  justify-content: center;
  min-height: 50px;
  border-radius: 25px;
  width: 94%;
  margin: 0 auto;
}
.m_global_nav{
  display: none;
  justify-content: end;
  position: absolute;
  top: 20px;
  right: 20px;
}
.nav_item{
  cursor: pointer;
  text-align: center;
  border-radius: 100vh;
  margin: 2px;
  transition: all .2s;
  width: calc(100% / 7);
  color: #fff;
  padding: 14px 0;
  position: relative;
  &._children{
    padding: 0px ;
  }
  .children_warp{
    position: absolute;
    top: 50px;
  }
  &:hover{
    color: #3132fe;
    background: #ffff00;
  }

}
.children_warp{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  background: #3132fe;
}
.children_item{
  color:#fff;
  padding: 10px;
  width: 100%;
  &:hover{
    color: #3132fe;
    background: #ffff00;
  }

}
/deep/.m_nav_drawer{
  background: #0600fe;
}
.m_nav_warp{
  display: flex;
  flex-direction: column;
}
.m_nav_item{
  color: #fff;
  padding: 0.35rem 1rem 0.35rem 0px;
}
.m-el-dropdown-link{
  color: #666;
}
/deep/.el-collapse{
  border: 0;
}
/deep/.el-collapse-item__header{
  border: 0;
  color: #fff;
  background: #0600fe;
  height: auto;
  font-size: 15px;
  line-height: inherit;
}
/deep/.el-collapse-item__content{
  color: #fff;
  padding-top: 10px;
  background: #0600fe;
  a{
    color: #fff;
  }
}
@media (max-width: 768px) {
  .global_nav{
    display: none;
  }
  .m_global_nav{
    display: flex;
  }
  .logo_efootball{
    img{
      width: 90%;
    }
  }
  /deep/.el-carousel__container{
    height: 200px;
  }
}
</style>
