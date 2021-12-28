<template>
  <div class="content">
  <form ref="form1"  >
    <table class="content_table">
      <tr>
        <td>
          <table class="content_table_title " v-bind:style="{ fontSize: fontSize + 'pt' }">
            <tr>
              <th class="title num">No</th>
              <th></th>
            </tr>       
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <div class="spinner" v-if="loading"><fade-loader :loading="loading" :color="color"></fade-loader></div>
          <div v-else>
            <div v-if="toticount == 0">
              <table  class="jasasubnon">
                <tr>
                  <td class="noDataScrollBlind">
                    <div align="center">
                      <table class="nodata">
                        <tr>
                          <td height="200" colspan="2"></td>
                        </tr>
                        <tr>
                          <td width="32%"></td>
                          <td>검색된 데이터가 없습니다</td>
                        </tr>
                        <tr>
                          <td width="32%"></td>
                          <td>검색조건을 선택하여 다시 검색하세요.</td>
                        </tr>
                        <tr>
                          <td height="15" colspan="2"></td>
                        </tr>
                        <tr>
                          <td height="200" colspan="2"></td>
                        </tr>
                      </table>
                    </div>
                  </td>
                </tr>          
              </table>
            </div>
            <div v-else class="list_div"> <!-- toticount가 0이 아니면 -->
              <table v-for="(konggo,i) in konggo_list" class="main_list" :key="i" :ref="'konggoList'+i" v-bind:style="{ fontSize: fontSize + 'pt' }">
                <tr ref="trcolor"  v-on:mouseover="bgchange(i,1)" v-on:mouseleave="bgchange(i,2)"  v-bind:style="[ (konggo.update_yn=='2' || konggo.reipchal=='1') ? {color:'#808080'} : {color:'#000000'} ]">
                  <td class="num txt_center" ref="num" >{{((currentpage-1) * countview )+i+1}}</td>
                  <td class="tuchalcheck txt_center" ref="tuchalcheck" ></td>
                </tr>
              </table>
            </div>
          </div>
        </td>
      </tr>
    </table>
    <div style="text-align:center; margin-top:16px;" >
      <paginate v-if="toticount" :items="toticount" @changePage="changePage" :disableDefaultStyles="false" :pageSize="parseInt(countview)" :initialPage="currentpage"> </paginate>
    </div>
    <div class="floating">
      <button type="button" v-scroll-to="'#scrollTop'"><font-awesome-icon :icon="faAngleDoubleUp" style="color:#313131;"/></button>
      <button type="button" v-scroll-to="'#scrollBottom'"><font-awesome-icon :icon="faAngleDoubleDown" style="color:#313131;"/></button>
    </div>
  </form  >
  </div>
</template>

<script>
import axios from 'axios';
import {EventBus} from '../../eventBus.js';
import paginate from './pagination.vue';
import style from '../../lib/style.css'
import FadeLoader from 'vue-spinner/src/FadeLoader.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import variable from './listB.js'
import methAll from '../../include/methAll.js'
export default {
  mixins: [variable,methAll],
  components:{
    paginate,
    FadeLoader,
    FontAwesomeIcon,
  },
  created(){
      this.callingList();
    EventBus.$on("EVfont_change", fontSize => {this.fontSize = fontSize;});
    if(localStorage.getItem('konggoOpen') == 'undefined') this.konggo_open = false
    else this.konggo_open = JSON.parse(localStorage.getItem('konggoOpen'));
  },
  watch: { 
    currentpage: function(newVal) { //현재페이지가 변동이 있으면 즉시 업데이트 된다.
      this.currentpage = newVal;
      this.callingList({
        
      });
    },
  },
  methods:{
    async callingList(payload){
      this.gwanliOpen = false;
      this.loading = true;
      
      try{
        const res = await axios.get('');
        
        
      }catch(e){
        this.slackMsg(''+param);
      }finally{
        this.loading = false;
      }
    },
    getFormatDate(date){
    var year = date.getFullYear();              //yyyy
    var month = (1 + date.getMonth());          //M
    month = month >= 10 ? month : '0' + month;  //month 두자리로 저장
    var day = date.getDate();                   //d
    day = day >= 10 ? day : '0' + day;          //day 두자리로 저장
    return  year + '-' + month + '-' + day;
  },
  }
}
</script>

<style scoped>
.img{background-color: #56c15c;border: 1px solid #56c15c;background-image: url("../../assets/check.png");background-size: 20px 20px;background-position: center center;}
.imgred{background-color: #ff0000;border: 1px solid #ff0000;background-image: url("../../assets/check.png");background-size: 20px 20px;background-position: center center;}
.perfect_btn{width:35px;line-height:12px;border:none;background-color: #E2EFD9;font-size: 11px;border:1px solid #2c7a4f;border-radius: 25px;margin:0;padding:0 0 2px 0;color:#15482c;}
.result_btn{color:#000000;border:1px solid #9da1aa;border-radius:2px;padding:2px 3px;background: rgb(226,227,228);background: linear-gradient(180deg, rgba(226,227,228,1) 0%, rgba(205,209,226,1) 100%);}
.pagenation{list-style: none;width:100%;}
.pagenation li{width:20px;}



.v-spinner{ /*돌아가는 스피너 이미지*/width: 50px;left:50%;top:200px;}
.spinner{margin: -1px auto;width: inherit;height: 486px;border: 1px solid #a5a5a5;background-color: #ffffff;}
.tableclassnon{width:100%;table-layout: fixed;border-collapse: collapse;}
.tableclassnon tr td{border:   #CCCCCA 0px solid; padding:  0px; margin: 0px;}
.content{width:98%;margin:0 auto;}
.content_table{width: 100%;padding:0; margin:0;border-collapse: collapse;}
.content_table td{padding:0;margin:0;}
.content_table_title{margin:0 auto;table-layout: fixed; width:100%; text-align:center; background-color:#f7f7f8;border-collapse: collapse;padding:0;height: 41px;}
.content_table_title th{border:1px solid #919191;font-weight: normal;}
.main_list{margin:0 auto;table-layout: fixed;word-break: break-all;width:100%; background-color: #ffffff;border-collapse: collapse;  border-bottom: 1px solid #e1e1e2; height: 21px;}
.main_list td{border-collapse: collapse;padding:4px 5px;cursor:default;border-right: 1px solid #e1e1e2; border-left: 1px solid #e1e1e2;}
.jasasubnon{margin:-1px auto;table-layout: fixed;width:100%; background-color: #fff;border: 1px solid #a5a5a5;}


.title{text-align: center !important; color:#000000 !important; cursor:default !important;}
.num{width: 3%;}

/* 관리td */
.subject1_td{width:85%;float:left;}
.pencil_td{vertical-align:top;text-align:right;margin-right:-4px;width:15px;float:right;}


label{text-align: center;}
input[type=checkbox]{display: none;}
input[type=checkbox] + label span{display: inline-block;width: 11px;height: 11px;border-radius: 2px;border: 1px solid #3c3c3c;cursor: pointer;position: relative;background-color:#fff;z-index: 1;margin:3px 5px -3px 5px}
input[type=checkbox]:checked + label span{background-color: #56c15c;border: 1px solid #56c15c;background-image: url("../../assets/check.png");background-size: 20px 20px;background-position: center center;}

</style>