<template>
  <div class="main-content">
    <search1></search1>
    <search2></search2>
    <listA></listA>
  </div>
</template>

<script>
import search1 from '../view/listA/search1.vue'
import search2 from '../view/listA/search2.vue'
import listA from '../view/listA/listA.vue'
export default {
    components:{
        search1,search2,listA
    }
}
</script>

<style>

</style>