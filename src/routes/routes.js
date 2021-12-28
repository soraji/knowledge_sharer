import Vue from 'vue';
import VueRouter from 'vue-router';


import mainList from '../components/mainList.vue';
import sampleList1 from '../components/sampleList1.vue';
import sampleList2 from '../components/sampleList2.vue';
import sampleList3 from '../components/sampleList3.vue';


Vue.use(VueRouter);
export const router = new VueRouter({
  mode : 'history',
  routes : [
    {
      path:'/',
      redirect : '/main',
    },
    {
      path:'/main',
      component:mainList
    },
    {
      path:'/list1',
      component:sampleList1
    },
    {
      path:'/list2',
      component:sampleList2
    },
    {
      path:'/list3',
      component:sampleList3
    },

  ]
});