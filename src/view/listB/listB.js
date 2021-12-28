import {ko} from 'vuejs-datepicker/dist/locale'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faPrint } from '@fortawesome/free-solid-svg-icons'
import { faChartBar } from '@fortawesome/free-solid-svg-icons'
import { faFileExcel } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'
const customLabels = {
  first: '<<',
  last: '>>',
  previous: '<',
  next: '>'
};
var variable = { 
  data: function () { 
    return { 
      disabledDates: {
        to: new Date( new Date().getFullYear()-5,new Date().getMonth(),new Date().getDate() ),  //이 날짜까지는 선택할 수 없다. (년도, 월+1, 일)
        from : new Date( new Date().getFullYear()+1, new Date().getMonth() , new Date().getDate() ) //이 날짜 이후로는 선택할 수 없다(년도, 월+1, 일)
      },
      ko:ko,
      tri : -1,tdname : '', 
      customLabels, 
      loading:false, leftShowing:true,
      color:'#008844', 
      fontSize: this.$store.state.fontSize,
      faQuestionCircle, faPencilAlt, faChevronDown, faChevronUp ,faAngleDoubleDown,faAngleDoubleUp,faPrint,faChartBar,faFileExcel,faTrashAlt,faPlus,faMinus,faFileDownload,
      radio : 'cmp1', 
      faSearch,faCog,
      svcselect:'1',  window:0, multijiyuks:[],
      amtdown:'기초금액',amtup:'추정가격',datedown:'<font color=#ff0000>입찰마감↓</font>',dateup:'입찰개시',dateview3:'현설일시',dateview4:'참가마감',dateview5:'공동마감'
    } 
  },
  computed:{
    sort:{
      get(){
        return this.$store.state.listA.sort
      },
      set(val){
        this.$store.state.listA.sort = val;
      }
    },
    toticount:{
      get(){
          return this.$store.state.listA.toticount
      },
      set(val){
          this.$store.state.listA.toticount = val;
      }
    },
    countview:{
      get(){
          return this.$store.state.listA.countview
      },
      set(val){
          this.$store.state.listA.countview = val;
      }
    },
    keyfield:{
      get(){
          return this.$store.state.listA.keyfield
      },
      set(val){
          this.$store.state.listA.keyfield = val;
      }
    },
    keyword:{
      get(){
          return this.$store.state.listA.keyword
      },
      set(val){
          this.$store.state.listA.keyword = val;
      }
    },
    jiyukcode:{
      get(){
          return this.$store.state.listA.jiyukcode
      },
      set(val){
          this.$store.state.listA.jiyukcode = val;
      }
    },
    date1:{
      get(){
          return this.$store.state.listA.date1
      },
      set(val){
          this.$store.state.listA.date1 = val;
      }
    },
    date2:{
      get(){
          return this.$store.state.listA.date2
      },
      set(val){
          this.$store.state.listA.date2 = val;
      }
    },
    baljucheocode:{
      get(){
          return this.$store.state.listA.baljucheocode
      },
      set(val){
          this.$store.state.listA.baljucheocode = val;
      }
    },
    amt1:{
      get(){
          return this.$store.state.listA.amt1
      },
      set(val){
          this.$store.state.listA.amt1 = val;
      }
    },
    amt2:{
      get(){
          return this.$store.state.listA.amt2
      },
      set(val){
          this.$store.state.listA.amt2 = val;
      }
    },
  }
}
export default variable;