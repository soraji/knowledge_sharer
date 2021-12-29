<template>
  <div class="main-content">
    <search1 ref="search1" v-on:search1Go="search1Go"></search1>
    <search2 ref="search2" v-on:search2Go="search2Go"></search2>
    <listA ref="list"></listA>
  </div>
</template>

<script>
import search1 from '../view/listA/search1.vue'
import search2 from '../view/listA/search2.vue'
import listA from '../view/listA/listA.vue'
export default {
    components:{
        search1,search2,listA
    },
    methods:{
      search1Go(payload){ 
        this.$refs.list.callingList(payload);
      },
      search2Go(payload){ 
        this.$refs.list.callingList(payload);
      },
    }
}
</script>

<style>

</style>