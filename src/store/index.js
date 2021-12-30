import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export const store = new Vuex.Store({
  state:{
    loading:true,
    fontSize: 12,
    thisMonth : new Date().getMonth()+1, //10
    thisDate : new Date().getDate(),    //16
    options:{
      animals:[
        { value : "11", text : "강아지"},
        { value : "12", text : "고양이"},
        { value : "13", text : "기린"},
        { value : "14", text : "펭귄"},
        { value : "15", text : "하마"},
        { value : "16", text : "표범"},
        { value : "17", text : "팬더"}
      ]
    },
    listA:{
      date1 : new Date(new Date().getFullYear(), new Date().getMonth(),  new Date().getDate()-1),
      date2 : new Date(new Date().getFullYear(), new Date().getMonth(),  new Date().getDate()),
      radio:'cmp1',
      currentpage:1,
      toticount:0,
      countview:'50',
      keyfield:'casename',
      keyword:'',
      sort:'publishedAt',
      category:'bitcoin',
      categories:'',
      baljucheocode:'00',
      amt1:'',
      amt2:''
    },
  }
})

