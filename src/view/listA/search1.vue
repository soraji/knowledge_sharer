<template>
  <div>
    <div v-show="isShowing">
      <form name="f1">
      <table class="search1_table">
        <tr>
          <td class="search1_left">카테고리</td>
          <td>
            <div>
              <table class="search1_right_inner_table">
                <tr>
                  <td>
                    <select class="selectpicker selectDropDown category show-tick" name="category" id="category" v-model="category">
                      <option value="bitcoin">비트코인</option>
                      <option value="apple">애플</option>
                      <option value="tesla">테슬라</option>
                      <option value="google">구글</option>
                      <option data-divider="true"></option>
                      <option value="8">선택한 계약방법 전체</option>
                    </select>
                  </td>
                  <td width="10" style="text-align:center;padding:0px 25px 0px 5px;"><font-awesome-icon :icon="faSearch" size="lg" style="color:#a2a2a5;" @click="$modal.show('cate_modal')" /></td>
                  <td></td>
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
          <td class="search1_left">검색기간</td>
          <td>
            <div>
              <table class="search1_right_inner_table">
                <tr>
                  <td colspan="5">
                    <table class="dp_table">
                      <tr>
                        <td>
                          <datepicker :language="ko" :format="customFormatter" :value="date1" v-model="date1" ></datepicker>
                        </td>
                        <td>일&nbsp;~</td>
                        <td>
                          <datepicker :language="ko" :format="customFormatter" :value="date2" v-model="date2"></datepicker>
                        </td>
                        <td>일</td>
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
    <cate_modal name="cate_modal" v-on:multicate="fnCate"></cate_modal>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import cate_modal from '../modal/cateModal.vue';
import style from '../../lib/style.css'
import bootstrap from '../../lib/bootstrap.css'
import bootstrapselect from '../../lib/bootstrap-select.css'
import variable from './listA.js'
import methAll from '../../include/methAll.js'
export default {
  mixins: [variable,methAll],
  components:{
    Datepicker,FontAwesomeIcon,cate_modal
  },
  watch:{
    category(val){
      this.category = val;
    }
  },
  methods:{
    checkform(){
      this.currentpage = '1';
      let payload = '';
      if(this.category == '8'){
        this.categories = this.categories.replace(","," AND ");
      }
      payload = {
        "category" : this.category, "categories":this.categories, "date1": this.date1, "date2" : this.date2, "currentpage":1
      }
      this.$emit("search1Go",payload);
    },
    openCheck(){
      if(this.isShowing) this.isShowing = false;
      else this.isShowing = true;
    }
  }
}
</script>

<style scoped>
.search1_table{margin: 10px auto;width: 98%;border-top:2px solid #dae1e6;border-bottom:2px solid #dae1e6;border-collapse: collapse;}
.search1_table tr td{padding:5px; margin:0;height:24px;border:1px solid #e5e5e5;}
.search1_table .search1_left{width:108px;background-color: #f8f8f8;border-right:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5;border-left:1px solid #e5e5e5;text-align:left;padding-left:22px;color:#000000;}
button#search_btn{background-color: #5cbfd1;width: 80px;height: 63px;border-radius: 4px;font-weight: bold;color:#fff;padding:0px;margin:0;border:0px;font-size:20px;line-height: 24px;}
button#category{height:28px}
.search1_table tr:nth-child(4) td:nth-child(2) div table tr td:nth-child(3) table tr td:nth-child(4){padding-left:21px;}
.search1_right_inner_table{width:100%;table-layout: fixed;padding:0; margin:0;border-collapse: collapse;}
.search1_right_inner_table tr td{padding:0; margin:0;border:none}
.dp_table{border-collapse: collapse;}
.search1_right_inner_table > tr:nth-child(1) > td:nth-child(1),
.dp_table > tr > td:nth-child(1),
.dp_table > tr > td:nth-child(3){width:140px}
.dp_table > tr > td:nth-child(2),
.dp_table > tr > td:nth-child(4){width:25px;padding:0 7px}

@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
 .search1_table{  margin: 10px auto;width: 98%;  border-top:2px solid #dae1e6;  border-bottom:2px solid #dae1e6;  border-collapse: collapse;}
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