<template>
  <div class="content">
    <button type="button" class="btn" @click="backToList()">목록으로</button>
    <div class="inner_content">
      <div>제목 : {{param.title}}</div>
      <div>기자 : {{param.author}}</div>
      <div>날짜 : {{param.publishedAt.replace("T"," ").replace("Z","")}}</div>
      <img :src="param.urlToImage != null ? param.urlToImage : ''"/>
      <div>내용 : <span class="txt_blue txt_pointer" @click="move(param.url)">{{param.content}}</span></div>
    </div>
  </div>
</template>

<script>
export default {
  props:['param'],
  methods:{
    backToList(){
      this.$router.push('/main')
    },
    move(url){
      window.open(url);
    },
  }
}
</script>

<style scoped>
.content{width:95%;margin:0 auto;}
.inner_content{width:98%;margin:0 auto;border:1px solid #dae1e6; padding:10px;line-height: 26px;font-size:13px}
.inner_content img{width:50%;margin:20px 0;}
.btn{height: 30px;border-radius: 0;line-height: 26px;padding: 0 7px;background: rgb(254,254,254);background: linear-gradient(180deg, rgba(254,254,254,1) 0%, rgba(240,242,245,1) 100%);border: 1px solid #bebfc4;color: #545454;font-size: 13px;border-radius: 3px;cursor: pointer;margin-bottom:10px}
</style>