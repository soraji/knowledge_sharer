import {ko} from 'vuejs-datepicker/dist/locale'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { faShare } from '@fortawesome/free-solid-svg-icons'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
const customLabels = {
  first: '<<',
  last: '>>',
  previous: '<',
  next: '>'
};
var variable = { 
  data: function () { 
    return { 
      ko:ko, customLabels, color:'#5cbfd1', 
      loading:false, isShowing:true, date:[],
      fontSize: this.$store.state.fontSize,faTrashAlt,faShare,faSearch,faAngleDoubleDown,faAngleDoubleUp,
      window:0, multicates:[], listArray:[],
    } 
  },
  computed:{
    sort:{
      get(){ return this.$store.state.listA.sort},
      set(val){ this.$store.state.listA.sort = val;}
    },
    toticount:{
      get(){ return this.$store.state.listA.toticount },
      set(val){ this.$store.state.listA.toticount = val; }
    },
    currentpage:{
      get(){ return this.$store.state.listA.currentpage },
      set(val){ this.$store.state.listA.currentpage = val; }
    },
    countview:{
      get(){ return this.$store.state.listA.countview },
      set(val){ this.$store.state.listA.countview = val; }
    },
    keyword:{
      get(){ return this.$store.state.listA.keyword },
      set(val){ this.$store.state.listA.keyword = val; }
    },
    category:{
      get(){ return this.$store.state.listA.category},
      set(val){ this.$store.state.listA.category = val; }
    },
    date1:{
      get(){ return this.$store.state.listA.date1 },
      set(val){ this.$store.state.listA.date1 = val; }
    },
    date2:{
      get(){ return this.$store.state.listA.date2 },
      set(val){ this.$store.state.listA.date2 = val; }
    },
    categories:{
      get(){ return this.$store.state.listA.categories },
      set(val){ this.$store.state.listA.categories = val; }
    }
  }
}
export default variable;