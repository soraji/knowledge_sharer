<template>
  <div id="app">
    <Header></Header>
    <div class="page-container">
      <router-view :key="$route.fullPath"></router-view>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Footer from './components/footer.vue'
import Header from './components/header.vue'
export default {
  name: 'app',
  components: {
    Header,
    Footer,
  },
}
</script>

<style>
#app {margin:0 auto;padding:0;width:100%;font-family:Noto Sans KR, sans-serif,'Apple SD Gothic Neo';font-size: 9pt;min-width:1200px;height:100%;}
html,body{margin:0;width:100%; height:100%;padding:0;font-size: 9pt;overflow-x: hidden;font-family:Noto Sans KR, sans-serif,'Apple SD Gothic Neo';}
*:focus{outline: none;}
.page-container{position: relative;min-height:100%;padding-bottom: 100px;}
</style>
