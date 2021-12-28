<template>
  <div>
    <div>
      <form name="f1">
      <table class="search1_table">
        <tr>
          <td class="search1_left">지역B</td>
          <td style="border:1px solid #e5e5e5; padding-left:10px;">
            <div :style="[window > 1200 ? {width : '787px'} : {}]">
              <table class="search1_right_inner_table">
                <tr>
                  <td width="140">
                    <select class="selectpicker selectDropDown jiyukcode show-tick" name="jiyukcode" id="jiyukcode" v-model="jiyukcode" @change="sjiyuk($event);">
                      <option value="00">전체</option>
                      <option value="11">서울</option>
                      <option value="12">부산</option>
                      <option value="13">인천</option>
                      <option value="14">대구</option>
                      <option value="15">광주</option>
                      <option value="16">대전</option>
                      <option value="17">울산</option>
                      <option value="18">세종</option>
                      <option value="19">경기</option>
                      <option value="20">강원</option>
                      <option value="21">충북</option>
                      <option value="22">충남</option>
                      <option value="23">전북</option>
                      <option value="24">전남</option>
                      <option value="25">경북</option>
                      <option value="26">경남</option>
                      <option value="27">제주</option>
                      <option value=""></option>
                      <option data-divider="true"></option>
                      <option value="88">선택한 지역 전체</option>
                      <option v-for="multijiyuk in multijiyuks" :value="multijiyuk.code" :key="multijiyuk.code" v-if="multijiyuks != ''">{{multijiyuk.value}}</option>
                    </select>
                  </td>
                  <td width="10" style="text-align:center;padding:0px 25px 0px 5px;"><font-awesome-icon :icon="faSearch" size="lg" style="color:#a2a2a5;" @click="$modal.show('jiyuk_modal')" /></td>
                  <td></td>
                </tr>
              </table>
            </div>
          </td>
          <td rowspan="4" width="120" class="txt_center">
            <button type="button" name="search_btn" id="search_btn" @click="checkform()">검색</button>
          </td>
        </tr>
        <tr>
          <td class="search1_left">기관B</td>
          <td style="border:1px solid #e5e5e5;padding:4px 4px 4px 10px">
            <div :style="[window > 1200 ? {width : '787px'} : {}]">
              <table class="search1_right_inner_table" style="width:700px;">
                <tr>
                  <td width="140">
                    <select class="selectpicker selectDropDown baljucheocode show-tick" name="baljucheocode" id="baljucheocode" v-model="baljucheocode">
                      <option v-for="animal in this.$store.state.options.animals" :value="animal.value" :key="animal.value">{{animal.text}}</option>
                    </select>
                  </td>
                  <td></td>
                </tr>
              </table>
            </div>
          </td>
        </tr>
        <tr>
          <td class="search1_left">금액설정B</td>
          <td style="border:1px solid #e5e5e5;padding: 3px 0px 3px 12px;">
            <div :style="[window > 1200 ? {width : '787px'} : {}]">
              <table class="search1_right_inner_table" style="padding:0; margin-left:-2px;">
                <tr>
                  <td >
                    <table style="padding:0; margin-left:-2px;">
                      <tr>
                        <td width="140">
                          <input type="text" name="amt1" id="amt1" v-model="amt1" v-on:keyup.enter='checkform' @focus="$event.target.select()">
                        </td>
                        <td width="25" style="padding:0 7px">억&nbsp;~</td>
                        <td width="140">
                          <input type="text" name="amt2" id="amt2" v-model="amt2" v-on:keyup.enter='checkform'  @focus="$event.target.select()">
                        </td>
                        <td width="25" style="padding:0 7px">억</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </div>
          </td>
        </tr>
        <tr>
          <td class="search1_left" style="border-bottom:2px solid #a2a2a5;">검색기간B</td>
          <td style="border:1px solid #e5e5e5;padding: 2px 0px 1px 10px">
            <div :style="[window > 1200 ? {width : '787px'} : {}]">
              <table class="search1_right_inner_table">
                <tr>
                  <td colspan="5" style="padding:0;">
                    <table style="padding:0; margin-left:-3px;">
                      <tr>
                        <td width="140">
                          <datepicker :disabled-dates="disabledDates" :language="ko" :format="customFormatter" :value="date1" v-model="date1" ></datepicker>
                        </td>
                        <td width="25" style="padding:0 7px;">일&nbsp;~</td>
                        <td width="140">
                          <datepicker :disabled-dates="disabledDates" :language="ko" :format="customFormatter" :value="date2" v-model="date2"></datepicker>
                        </td>
                        <td width="25" style="padding:0 7px;">일</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </div>
          </td>
        </tr>
      </table>
      </form>
    </div>
    <jiyuk_modal name="jiyuk_modal" v-on:mutijiyuk="fnmutijiyuk"></jiyuk_modal>
  </div>
</template>

<script>
import style from '../../lib/style.css'
import axios from 'axios';
import {EventBus} from '../../eventBus.js';
import search2 from './search2.vue'
import Datepicker from 'vuejs-datepicker';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import jiyuk_modal from '../modal/jiyukmodal.vue';
import bootstrap from '../../lib/bootstrap.css'
import bootstrapselect from '../../lib/bootstrap-select.css'
import variable from './listB.js'
import methAll from '../../include/methAll.js'
export default {
  mixins: [variable,methAll],
  components:{
    Datepicker,FontAwesomeIcon,jiyuk_modal
  }
}
</script>

<style scoped>
.search1_table{margin: 10px auto;width: 98%;border-top:2px solid #a2a2a5;border-bottom:2px solid #a2a2a5;border-collapse: collapse;}
.search1_table tr td{padding:5px; margin:0;height:24px;border:1px solid #e5e5e5;}
.search1_table .search1_left{width:108px;background-color: #f8f8f8;border-right:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5;border-left:1px solid #e5e5e5;text-align:left;padding-left:22px;color:#000000;}
button#search_btn{background-color: #5cbfd1;width: 80px;height: 63px;border-radius: 4px;font-weight: bold;color:#fff;padding:0px;margin:0;border:0px;font-size:20px;line-height: 24px;}
.checkCollection{padding-left:10px;}
.checkCollection tr td{padding:0; margin:0;}
.checkCollection input[type=checkbox]{display: none;}
.checkCollection input[type=checkbox] + label span{display: inline-block;width: 11px;height: 11px;border-radius: 2px;border: 1px solid #3c3c3c;cursor: pointer;position: relative;top: -2px;background-color:#fff;z-index: 1;float: left;margin: 2px 5px 2px -10px;  }
.checkCollection input[type=checkbox]:checked + label span{background-color: #56c15c;border: 1px solid #56c15c;background-image: url("../../assets/check.png");background-size: 20px 20px;background-position: center center;}
.search1_table tr:nth-child(4) td:nth-child(2) div table tr td:nth-child(3) table tr td:nth-child(4){padding-left:21px;}
.search1_right_inner_table{width:100%;table-layout: fixed;padding:0; margin:0;}
.search1_right_inner_table tr td{padding:0; margin:0;border:none}
input[name="amt1"],
input[name="amt2"] {background-color: #fff;height: 22px;width: 126px;text-align: right;padding-right: 10px;}
@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
 .search1_table{  margin: 10px auto;width: 98%;  border-top:2px solid #a2a2a5;  border-bottom:2px solid #a2a2a5;  border-collapse: collapse;}
 .search1_table tr td{  padding:5px;   margin:0;  height:32px;  }
 .search1_table .search1_left{  width:108px;  background-color: #f8f8f8;  border-right:1px solid #e5e5e5;  border-bottom:1px solid #e5e5e5;  border-left:1px solid #e5e5e5;  text-align:left;  padding-left:22px;  font-weight: bold;}button#search_btn{  background-color: #338a2e;  width: 80px;  height: 63px;  border-radius: 4px;  font-weight: bold;  color:#fff;  padding:0px;  margin:0;  border:0px;  font-size:20px;  line-height: 24px;}
 .checkCollection{  padding-left:10px;}
 .checkCollection tr td{  padding:0; margin:0;  }
 .checkCollection input[type=checkbox]{  display: none;}
 .checkCollection input[type=checkbox] + label span{  display: inline-block;  width: 11px;  height: 11px;  border-radius: 2px;  border: 1px solid #3c3c3c;  cursor: pointer;  position: relative;  top: -2px;  background-color:#ffffff;  z-index: 1;  float: left;  margin: 2px 5px 2px 0px;  }
 .checkCollection input[type=checkbox]:checked + label span{  background-color: #56c15c;  border: 1px solid #56c15c;  background-image: url("../../assets/check.png");  background-size: 20px 20px;  background-position: center center;}
 .search1_table tr:nth-child(4) td:nth-child(2) div table tr td:nth-child(3) table tr td:nth-child(4){  padding-left:10px;}
 .checkCollection tr td:nth-child(2){  width:90px;}
 .search1_right_inner_table{  width:100%;  table-layout: fixed;  padding:0; margin:0;  }
 .search1_right_inner_table tr td{  padding:0; margin:0;  }
}
</style>