import Vue from 'vue';
import VueRouter from 'vue-router';


import mainList from '../components/mainList.vue';
import sampleList1 from '../components/sampleList1.vue';
import sampleList2 from '../components/sampleList2.vue';
import sampleList3 from '../components/sampleList3.vue';
import detail from '../view/listA/detailA.vue';


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
      name:'/main',
      component:mainList
    },
    {
      path:'/list1',
      name:'/list1',
      component:sampleList1
    },
    {
      path:'/list2',
      name:'/list2',
      component:sampleList2
    },
    {
      path:'/list3',
      name:'/list3',
      component:sampleList3
    },
    {
      path:'/detail',
      name:'/detail',
      component:detail,
      props:true
    },
  ]
});