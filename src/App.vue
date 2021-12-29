<template>
  <div id="app">
    <div class="iealert" ref="iealert">
      <table style="float:left;">
        <tr>
          <td rowspan="2" width="40">
            <font-awesome-icon :icon="faExclamationTriangle" style="color:#f8884d;" size="lg"/>
          </td>
          <td>이 브라우저는 속도저하 및 보안 위험에 노출 될 수 있습니다.</td>
        </tr>
        <tr>
          <td>보안 걱정없는 브라우저를 사용해주세요</td>
        </tr>
      </table>
      <table style="float:left;padding-left:50px;">
        <tr>
          <td></td>
          <td style="text-align:center;width:100px;"><img src="https://img.icons8.com/fluent/35/000000/ms-edge-new.png"/></td>
          <td style="text-align:center;width:100px;"><img src="https://img.icons8.com/color/35/000000/chrome--v1.png"/></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td class="txt_center">엣지</td>
          <td class="txt_center">크롬</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td class="txt_center"><button type="button" class="roundBtn" @click="goDownload('edge')">다운로드</button></td>
          <td class="txt_center"><button type="button" class="roundBtn" @click="goDownload('chrome')">다운로드</button></td>
          <td></td>
        </tr>
      </table>
      <div class="closeBtn" @click="closeBtn()"><font-awesome-icon :icon="faTimes" style="color:#f8884d;" size="3x"/></div>
    </div>
    <Header v-on:destroy="destroy"></Header>
    <div class="page-container">
      <keep-alive>
        <router-view ref="routerview" :key="$route.fullPath"></router-view>
      </keep-alive>
      <Footer></Footer>
    </div>
    
    
  </div>
</template>

<script>
import Footer from './components/footer.vue'
import Header from './components/header.vue'
import Axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
export default {
  name: 'app',
  components: {
    Header,
    Footer,
    FontAwesomeIcon
  },
  data(){
    return{
      ie:false,faExclamationTriangle,faTimes
    }
  },
  created(){
    setTimeout(()=>{
      this.detectBrowser();
    },1500);
  },
  methods:{
    detectBrowser(){
      const isIE = /*@cc_on!@*/false || !!document.documentMode;
      // const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
      if(isIE == true){
        this.ie = true;
        this.$refs.iealert.style.display = 'block';
      }
    },
    goDownload(browser){
      if(browser == 'edge'){
        window.open("https://www.microsoft.com/ko-kr/edge");
      }else{
        window.open("https://www.google.com/intl/ko/chrome/");
      }
    },
    closeBtn(){
      this.$refs.iealert.style.display = 'none';
    },
    destroy(){
      this.$refs.routerview.reset();
    }
  }
}
</script>

<style>
*:focus{
  outline:none;
}
#app {
  margin:0 auto;
  padding:0;
  width:100%;
  font-family:'dotum','돋움','Apple SD Gothic Neo';
  font-size: 9pt;
  min-width:1200px;
  height:100%;
}
html,body{
  margin:0;
  width:100%; height:100%;
  padding:0;
  font-size: 9pt;
  overflow-x: hidden;
  font-family:'dotum','돋움','Apple SD Gothic Neo';
}
svg{
  cursor: pointer;
}
.iealert{
  display: none;
  height:100px;
  padding-top:20px;
  padding-left:5%;
  line-height: 20px;
  background: rgb(248,239,229);
  background: linear-gradient(180deg, rgba(248,239,229,1) 0%, rgba(248,136,77,0.4164040616246498) 100%);
  font-size: 11pt;
  font-weight: bold;
  animation: 1s ease-out 0s 1 slideInFromDown;
}
@keyframes slideInFromDown {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}
.page-container{position: relative;min-height:100%;padding-bottom: 100px;}
.roundBtn{
  font-size: 9pt;
  padding-bottom:2px;
  border-radius: 25px;
  border:1px solid #a5a5a5;
  background-color: #f8f8f8;
  cursor: pointer;
}
.closeBtn{
  position: absolute;
  top: 35px;
  left:95%;
  cursor: pointer;
  width:50px;
  opacity: 0.8;
}
</style>
