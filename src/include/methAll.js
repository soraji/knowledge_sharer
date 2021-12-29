import axios from 'axios';
import { _ } from 'core-js';
import {EventBus} from '../eventBus.js'
var moment = require('moment');
moment().format();

let methAll = {
  methods:{
    customFormatter(date) {   //datepicker 기본포맷
      return moment(date).format('YYYY/MM/DD');
    },
    fnmutijiyuk(payload){
      for(let i=0;i<payload.length;i++){
        if(i != payload.length-1){
          this.jiyukcodef += payload[i].code +',';
        }else{
          this.jiyukcodef += payload[i].code;
        }
        this.multijiyuks_1.push({'code':'c'+payload[i].code,'value':payload[i].name})
      }
      this.jiyukcode1 = '88';
      this.gugunArr = [];
      this.gugunArr.push({"code":"전체", "text":"전체"});
    },
  },
  getFormatDate(date){
    var year = date.getFullYear();              //yyyy
    var month = (1 + date.getMonth());          //M
    month = month >= 10 ? month : '0' + month;  //month 두자리로 저장
    var day = date.getDate();                   //d
    day = day >= 10 ? day : '0' + day;          //day 두자리로 저장
    return  year + '-' + month + '-' + day;
  },
  changePage(page){
    this.currentpage = page.currentPage;   
    window.scrollTo(0,0);
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
}

export default methAll;