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
}

export default methAll;