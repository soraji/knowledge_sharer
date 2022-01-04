<template>
  <div :style="{ fontSize: fontSize + 'px' }">
    <table class="chamgaja_search_table">
      <tr>
        <td>
          <div style="width:98%; margin:8px auto">
            <table class="chamgaja_search_table">
              <tr>
                <td>
                  <table style="width:555px; float:left;" class="cp_search_bar">
                    <tr>
                      <td>참가 : {{detail.chamgajasu}} 인</td>
                      <td>|</td>
                      <td>
                        <div>
                          <select id="keyfield" name="keyfield" v-model="keyfield">
                            <option value="1">제출과일</option>
                            <option value="2">이름</option>
                          </select>
                        </div>
                        <div>
                          <input-korean v-model="keyword"></input-korean>
                          <span class="search_btn"><font-awesome-icon :icon="faSearch" size="lg" style="color:#919191" v-scroll-to="{el:'#checkform',offset:-150}"/></span>
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
                <td></td>
              </tr>
            </table>
          </div>
        </td>
      </tr>
    </table>
    
    <div class="spinner" v-if="loading">
      <fade-loader :loading="loading" :color="color"></fade-loader>
    </div>
    <div v-else style="margin-top:1px;width:98%;margin:0 auto;">
      <table class="result_detail_table sticky">
        <colgroup>
          <col style="width:10%">
          <col style="width:8%">
          <col style="width:8%">
          <col style="width:10%">
          <col style="width:8%">
          <col style="width:10%">
          <col style="width:15%">
          <col style="width:15%">
          <col style="width:10%">
        </colgroup>
        <tr>
          <th class="gugan">구간</th>
          <th class="jijum">지점</th>
          <th class="chamga">참가</th>
          <th class="fruits">제출과일</th>
          <th class="search">상세</th>
          <th class="name">이름</th>
          <th class="jiyuk">지역</th>
          <th class="number">제출숫자</th>
          <th class="rank">순위</th>
        </tr>
      </table>
      <table class="chamgaja_table">
        <tr>
          <td style="padding:0">
            <!-- 반응형rowspan넣으려면 tr에 v-for넣어야함 -->
            <table class="main_list">
              <colgroup>
                <col style="width:10%">
                <col style="width:8%">
                <col style="width:8%">
                <col style="width:10%">
                <col style="width:8%">
                <col style="width:10%">
                <col style="width:15%">
                <col style="width:15%">
                <col style="width:10%">
              </colgroup>
              <tr v-for="(item,i) in newArray" :key="item.var5"  ref="open">

                <td class="gugan" v-if="item.bigRowSpan > 0"  :rowspan="item.bigRowSpan">
                  <div v-html="item.tt1" class="gugan_title"></div>
                  <table class="tableclassnon">
                    <tr>
                      <td>참가 : </td>
                      <td>
                        <div >{{item.chamga}}</div>
                      </td>
                    </tr>
                    <tr>
                      <td>비율 : </td>
                      <td>
                        <div >{{(( 100 / detail.chamgajasu ) * item.chamga).toFixed(1)}}</div>
                      </td>
                    </tr>
                  </table> 
                </td>
                <td class="jijum txt_right" v-if="item.rowspan > 0" :rowspan="item.rowspan">
                  <div >
                    {{item.jijum}}
                  </div>
                </td>

                <td class="chamga txt_center"  v-if="item.rowspan > 0" :rowspan="item.rowspan">
                  <span :style="[item.count != 0 ? {}:{'visibility':'hidden'}]">{{item.count}}</span><br>
                  <span v-if="( 100 / detail.chamgajasu ) * item.count != 0">({{ (( 100 / detail.chamgajasu ) * item.count).toFixed(1) }})</span>
                </td>


                <td class="fruits txt_center" v-if="item.fruits == '1등 기준'" :colspan="3"
                  :style="[keyfield == '1' && (keyword != '' && (item.fruits.includes(keyword) ))? {backgroundColor:'#cfecf1',color:'#000000'} : {},
                  item.fruits == '1등 기준' ? { backgroundColor:'#5cbfd1', color:'#ffffff'} : {} ]" >{{item.fruits}}
                </td>
                <td class="fruits" v-else 
                  :style="[keyfield == '1' && (keyword != '' && (item.fruits.includes(keyword) ))? {backgroundColor:'#cfecf1',color:'#000000'} : {},
                  item.fruits == '1등 기준' ? { backgroundColor:'#5cbfd1', color:'#ffffff'} : {} ]" >
                          <div class="txt_short"  style="margin-left:6px">{{item.fruits}}</div>
                          <span id="checkform" v-if="keyfield == '1' && (keyword != '' && (item.fruits.includes(keyword) ))"></span>
                </td>

                <td class="search txt_center cp_td" v-if="item.fruits != '1등 기준'"
                    :style="[item.fruits == '1등 기준' ? { backgroundColor:'#5cbfd1', color:'#ffffff'} : {} ]">
                    <div :style="[item.numberOne == true || item.fruits == '' ? {display:'none'} : {}]" >
                      <font-awesome-icon :icon="faSearch" style="color:#a2a2a5" />
                    </div>
                </td>

                <td class="name txt_center" v-if="item.fruits != '1등 기준'"
                  :style="[keyfield == '2' && keyword != '' && item.name.includes(keyword)? {backgroundColor:'#cfecf1',color:'#000000'} : {}, 
                  item.fruits == '1등 기준' ? { backgroundColor:'#5cbfd1', color:'#ffffff'} : {} ]">
                  <div class="txt_short">
                    <span id="checkform" v-if="keyfield == '2' && keyword != '' && item.name.includes(keyword)" v-html="item.name"></span>
                    <span v-else v-html="item.name"></span>
                  </div>
                </td>


                <td class="jiyuk txt_center"
                  :style="[item.fruits == '1등 기준' ? { backgroundColor:'#5cbfd1', color:'#ffffff'} : {} ]" v-html="item.jiyuk"></td>


                <td class="number txt_right" 
                  :style="[item.fruits == '1등 기준' ? { backgroundColor:'#5cbfd1', color:'#ffffff'} : {} ]">{{item.price}}</td>
                
                
                <td class="rank txt_right" 
                  :style="[item.fruits == '1등 기준' ? { backgroundColor:'#5cbfd1', color:'#ffffff'} : {} ]">
                  <span v-if="item.pm == '0'" >-</span><span v-html="item.rank"></span>
                </td>
              </tr>

              <tr>
                <td colspan="13" style="padding: 5px 0 5px 8px;">참가자 : {{detail.chamgajasu}} 개 업체</td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {EventBus} from '../eventBus.js';
import style from '../lib/style.css'
import FadeLoader from 'vue-spinner/src/FadeLoader.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import methAll from '../include/methAll.js'
import inputKorean from '../components/inputKorean.vue';

export default {
  data(){
    return{
      detail:[],listArray:[],faSearch,
      loading:true,color:'#5cbfd1',fontSize: this.$store.state.fontSize,
      keyfield:'1',keyword:'',jijum:[],
      guganPart:[],
      newArray:[],
    }
  },
  components:{
    FadeLoader,FontAwesomeIcon,
    inputKorean
  },
  created(){
    this.callingList();
  },
  methods:{
    async callingList(payload){
      this.loading = true;
      try{
        const res = await axios.get('https://soraji.github.io/dummyAPI/rowspan.json');
        this.listArray = res.data.listArray;
        this.detail = res.data.detail[0];
        this.contentFn();
      }catch(e){
        // this.slackMsg('');
      }finally{
        this.loading = false;
      }
    },
    contentFn(){
      let count = 0;    //사람이 있는지 카운트. 사람 1명있을때마다 ++
      let guganPart = 0;   //구간에 사람 몇명있는지 카운트
      let index = 0;  //rowspan할때 사용
      let guganTot = 0; //rowspan해야할 tr의 개수
      let gijun = 0;

      let startpoint = this.detail.startpoint;
      startpoint = parseInt(startpoint);

      let endpoint = this.detail.endpoint;
      endpoint = parseInt(endpoint) ;

      for(let i=startpoint;i<=endpoint;i++) {
        guganPart = 0;
        guganTot = 0;
        if( i == startpoint || i == endpoint) {  //pre예가 미만, post예가 이상 처리  
          count = 0;

          for(let p=0;p<this.listArray.length;p++) {
              if( i == startpoint && (parseInt(this.listArray[p].var1.split(".")[0]) <= i) || (i == endpoint && (parseInt(this.listArray[p].var1.split(".")[0]) >= i) ) ){
                count ++;
                guganPart ++;
                if( (i == startpoint && (parseInt(this.listArray[p].var1.split(".")[0] ) <= i)) ){  
                  this.newArray.push({
                    'tt1':(i+1)+'.0 <br>미만', 
                    'tt2':0,
                    'jijum':'',
                    'price':this.listArray[p].var1,
                    'fruits':this.listArray[p].var2, 
                    'name':this.listArray[p].var3,
                    'jiyuk':this.listArray[p].var6,
                    'rank':this.listArray[p].var4,
                    'pm':this.listArray[p].var5,
                    'count':count,
                    'rowspan':1,
                    'colspan':0,
                    'bigRowSpan':1,
                    'chamga':0,
                  }); 
                  index++;
                  guganTot++;
                  
                }else if( (i == endpoint && (parseInt(this.listArray[p].var1.split(".")[0]) >= i) ) ){
                  this.newArray.push(
                  {'tt1':i+'.0 <br>이상', 
                  'tt2':0,
                  'jijum':'',
                  'price':this.listArray[p].var1,
                  'fruits':this.listArray[p].var2, 
                  'name':this.listArray[p].var3,
                  'jiyuk':this.listArray[p].var6,
                  'rank':this.listArray[p].var4,
                  'pm':this.listArray[p].var5,
                  'count':count,
                  'rowspan':1,
                  'colspan':0,
                  'bigRowSpan':1,
                  'chamga':0,
                  }); 
                  index++;
                  guganTot++;
                }
              }
            }

            
            if(count == 0 ){
              if( i == startpoint  ){ 
                this.newArray.push(
                  {'tt1':i+'.0 % <br>미만', 
                  'tt2':0,
                  'jijum':'',
                  'price':'',
                  'fruits':'', 
                  'name':'',
                  'jiyuk':'',
                  'rank':'',
                  'pm':'',
                  'count':'',
                  'rowspan':1,
                  'colspan':0,
                  'bigRowSpan':1,
                  'chamga':0,
                  });
                index++;
                guganTot++;
              }else if( i == endpoint ){  //이상 구간에 사람이 0일때
                this.newArray.push(
                  {'tt1':i+'.0 % <br>이상', 
                  'tt2':0,
                  'jijum':'',
                  'price':'',
                  'fruits':'', 
                  'name':'',
                  'jiyuk':'',
                  'rank':'',
                  'pm':'',
                  'count':'',
                  'rowspan':1,
                  'colspan':0,
                  'bigRowSpan':1,
                  'chamga':0,
                  });
                index++;
                guganTot++;
              }
            }else if(count > 1 ) {
              let idx = 0;
              for(idx=1;idx<=count;idx++) {
                if(idx == count) {
                  this.newArray[index-idx].rowspan = count;
                  this.newArray[index-idx].count = count;
                } else {
                  this.newArray[index-idx].rowspan = 0;
                  this.newArray[index-idx].count = 0;
                }
              }
            }

        } else {  //예가 사이
          for(let j=0;j<10;j++) {
            count = 0;
            for(let p=0;p<this.listArray.length;p++) {
                //예가안에서의 적격심사 기준율
                
                if( (parseInt(this.listArray[p].var1.split(".")[0]) == i &&  parseInt(this.listArray[p].var1.split(".")[1].substring(0,1)) == j ) && this.listArray[p].var4 == '1' && this.listArray[p].var5 == '1' ){
                  this.newArray.push(
                  {'tt1':i, 
                    'tt2':0,
                    'jijum':i+'.'+j,
                    'price':'',
                    'fruits':'1등 기준', 
                    'name':'',
                    'jiyuk':'',
                    'count':'',
                    'rowspan':1,
                    'colspan':0,
                    'bigRowSpan':1,
                    'chamga':0,
                  });
                  index++;
                  guganTot++;
                  count++;
                  gijun++;
              }
        
              
              if(  (parseInt(this.listArray[p].var1.split(".")[0]) == i &&  parseInt(this.listArray[p].var1.split(".")[1].substring(0,1)) == j ) ) {
                count ++;
                guganPart ++;

                this.newArray.push(
                  {'tt1':i+'.0 %', 
                  'tt2':j,
                  'jijum':i+'.'+j,
                  'price':this.listArray[p].var1,
                  'fruits':this.listArray[p].var2, 
                  'name':this.listArray[p].var3,
                  'jiyuk':this.listArray[p].var6,
                  'rank':this.listArray[p].var4,
                  'pm':this.listArray[p].var5,
                  'count':count,
                  'numberOne':false,
                  'rowspan':1,
                  'colspan':0,
                  'bigRowSpan':1,
                  'chamga':0,
                  }); 
                  index++;
                  guganTot++;
              } 
            }
            
            if(count == 0 ){
              // if((startpoint == i &&  parseInt(this.listArray[p].var1.split(".")[1].substring(0,1)) == j )){
              //   // 기준율 찍을때 count가 0이므로 배열값에서는 건너뛰도록 해야함
              // }else{
              //   //시작되는 곳의 구간을 찍는다 예를들어 98.0만 해당됨
                
              // }
              this.newArray.push(
                  {'tt1':i+'.0%', 
                  'tt2':j,
                  'jijum':i+'.'+j,
                  'fruits':'', 
                  'name':'',
                  'jiyuk':'',
                  'rank':'',
                  'pm':'',
                  'count':'',
                  'rowspan':1,
                  'colspan':0,
                  'bigRowSpan':1,
                  'chamga':0,
                  });
                index++;
                guganTot++;
            }else if(count > 1 ) {
              let idx = 0;
              for(idx=1;idx<=count;idx++) {
                if(idx == count) {
                  this.newArray[index-idx].rowspan = count;
                  if(gijun == 1){  //적격심사기준율tr은 count에 들어가면 안됨
                    this.newArray[index-idx].count = count-1;
                  }else{
                    this.newArray[index-idx].count = count;
                  }
                } else {
                  this.newArray[index-idx].rowspan = 0;
                  this.newArray[index-idx].count = 0;
                }
              }
            }
          }
        }
        this.guganPart.push({'gugan':i,'guganTot':guganPart});
        let ss = 0;
        for(ss=1;ss<=guganTot;ss++) {
          if(ss == guganTot) {
            this.newArray[index-ss].bigRowSpan = guganTot;
            this.newArray[index-ss].chamga = guganPart;
          } else {
            this.newArray[index-ss].bigRowSpan = 0;
          }
        }
      }
    },
    slackMsg(text){
    const url = "https://hooks.slack.com/services/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";
    var xhr = new XMLHttpRequest();
      xhr.open("POST", url, true);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      var payload = {
          "text": text+" 에서 에러 발생",
      };
      xhr.send( JSON.stringify(payload));
    },
    getFormatDate(date){
      var year = date.getFullYear();              //yyyy
      var month = (1 + date.getMonth());          //M
      month = month >= 10 ? month : '0' + month;  //month 두자리로 저장
      var day = date.getDate();                   //d
      day = day >= 10 ? day : '0' + day;          //day 두자리로 저장
      return  year + '-' + month + '-' + day;
    }
  },
}
</script>



<style scoped>
input[id="keyword"]{width:300px;height:26px;border-radius:25px;padding:1px 10px 1px 100px;-webkit-box-sizing:border-box;box-sizing:border-box;border:1px solid #bebfc4!important}
input[name="keyword"]{width:150px;height:22px;border: 1px solid #cccccc;border-radius:2px}
.chamgaja_search_table{width:100%;border-collapse: collapse;}
.chamgaja_search_table tr td{padding:0}
.chamgaja_search_table > tr > td > div > table > tr > td:nth-child(1){width:80%}
.chamgaja_search_table > tr > td > div > table > tr > td:nth-child(2){width:20%}

.chamgaja_search_table > tr > td > div > table > tr > td:nth-child(1) > table > tr > td:nth-child(1){width:50px}
.chamgaja_search_table > tr > td > div > table > tr > td:nth-child(1) > table > tr > td:nth-child(2),
.chamgaja_search_table > tr > td > div > table > tr > td:nth-child(1) > table > tr > td:nth-child(5){width:20px;color:#dae1e6;text-align: center;}
.chamgaja_search_table > tr > td > div > table > tr > td:nth-child(1) > table > tr > td:nth-child(3){width:53px}
.chamgaja_search_table > tr > td > div > table > tr > td:nth-child(1) > table > tr > td:nth-child(4){width:43px}
.chamgaja_search_table > tr > td > div > table > tr > td:nth-child(1) > table > tr > td:nth-child(6){width:100px}
.chamgaja_search_table > tr > td > div > table > tr > td:nth-child(1) > table > tr > td:nth-child(7){width:170px}

#search_sm{height: 26px;border-radius: 0;line-height: 26px;padding: 0 7px;background: rgb(254,254,254);background: linear-gradient(180deg, rgba(254,254,254,1) 0%, rgba(240,242,245,1) 100%);border: 1px solid #bebfc4;color: #545454;font-size: 13px;border-radius: 3px;cursor: pointer;width:45px}


.chamgaja_box{height:400px;width:1040px;margin:-2px auto;overflow-y: auto;overflow-x: hidden;border-bottom:1px solid #e5e5e5}
.spinner{height:398px;width:100%;}
.v-spinner {top: 200px;left: 50%;}
.chamgaja_table{width:100%;border-collapse: collapse;}
.chamgaja_table tr td{margin:0;padding:0}

.tab1{width: 98%;margin: 0 auto;background-color: #fff;padding-bottom: 15px;border: 1px solid #a2a2a5;position: relative;}
.result_detail_table{width: 100%;table-layout: fixed;border-collapse: collapse;margin:0 auto;}
.result_detail_table tr th{border:1px solid #a5a5a5;background-color: #f7f7f8;height:25px;text-align: center;font-weight: normal;padding:0 5px}
.menu{padding:22px 0 10px 10px;font-size:14px;}

.main_list{width: 100%;margin:0px auto 2px auto;border-collapse: collapse;}
.main_list td{padding: 5px !important; border:1px solid #e5e5e5;}

.tableclassnon tr td{border:   #CCCCCA 0px solid; }
.resultKonggoTable{width: 98%;margin:17px auto 10px auto;border-top:2px solid #dae1e6;border-bottom:2px solid #dae1e6;border-collapse: collapse;table-layout: fixed;}
.resultKonggoTable tr th{background-color: #f7f7f8;border:1px solid #e5e5e5;width: 5%;height:20px;padding:3px 5px;font-weight: normal;}
.resultKonggoTable tr td{border:1px solid #e5e5e5;width:24%;padding:5px 8px;}


.vue-tabs{/* 탭을 감싸고있는 한줄 */width:100%;padding-top:20px;position: relative;top:-20px;background-color: #edeef1;z-index: 1;}
.vue-tablist {/* 탭리스트 스타일 */list-style: none;display: flex;margin:0 auto;width:98.1%;/* border-bottom: 1px solid #e2e2e2; */}
.vue-tab {/* tab한개한개 스타일 */z-index: 1;padding: 5px 10px;cursor: pointer;user-select: none;border: 1px solid #edeef1;border-bottom-color: #a2a2a5;border-radius: 5px 5px 0 0;background-color: #e1e3e8;position: relative;bottom: -1px;width:119px;height: 24px;line-height: 24px;vertical-align: middle;text-align: center;font-size: 12.5px;color:#68696e;}
input[type=radio]:disabled + label,
input[type=radio]:disabled + label span{cursor:not-allowed;}


.vue-tab[aria-selected="true"] {/* 선택된 tab */border-color: #a2a2a5;background-color:#fff;border-bottom-color: transparent;color: #323232;}
.vue-tab[aria-disabled="true"] {cursor: not-allowed;color: #999;}



.gugan_title{padding-left:5px}
.gugan .tableclassnon{font-weight:normal;width:85px;margin:15px 0 0 0;}
.gugan .tableclassnon tr td{line-height:10px;}
.gugan .tableclassnon tr td:nth-child(1){width:35px}
.gugan .tableclassnon tr td:nth-child(2){padding:0 !important}

/* .gugan{width:10%;}
.jijum{width:8%}
.chamga{width:8%;}
.fruits{width:10%;}
.search{width:8%}
.name{width:10%;}
.jiyuk{width:15%;}
.number{width:15%;}
.rank{width:10%;} */

.search_btn{position: relative;left:-8%;}
select{border: none ;position: relative;display: block;z-index: 2;width:80px;height: 19px !important;top: 16px;left: 10px;border-radius: 25px;}
#app > div.page-container > div > div > table > tr > td > div > table > tr > td:nth-child(1) > table > tr > td:nth-child(3) > div:nth-child(1){max-width: 99%;height: 0;position: relative;top: -13px;left: 0;}
input[id="keyword"]{width:300px;height:26px;border-radius: 25px;padding:1px 10px 1px 100px;box-sizing:border-box;border: 1px solid #bebfc4 !important;}
</style>