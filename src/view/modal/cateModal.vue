<template>
<modal name="cate_modal" transition="pop-out" :width="200" :height="300" :clickToClose="false">
  <div style="background-color:#E1E1E1;">
    <div class="modal_title">카테고리 복수선택</div>
    <table class="cate_modal_table">
      <tr>
        <td class="shadowbox">
          <table class="cate_modal_table_content">
            <tr>
              <td style="background-color:#E1E1E1;border-top:2px solid #777771;border-bottom:1px solid #777771;">선택</td>
              <td style="background-color:#E1E1E1;border-top:2px solid #777771;border-bottom:1px solid #777771;">주제</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="popjiyuk" id="stock" value="stock" v-model="multiCate">
                <label for="stock"><span></span></label>
              </td>
              <td>주식</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="popjiyuk" id="entertainment" value="entertainment" v-model="multiCate">
                <label for="entertainment"><span></span></label>
              </td>
              <td>엔터테인먼트</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="popjiyuk" id="beauty" value="beauty" v-model="multiCate">
                <label for="beauty"><span></span></label>
              </td>
              <td>뷰티</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="popjiyuk" id="youtube" value="youtube" v-model="multiCate">
                <label for="youtube"><span></span></label>
              </td>
              <td>유튜브</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="popjiyuk" id="nation" value="nation" v-model="multiCate">
                <label for="nation"><span></span></label>
              </td>
              <td>국가</td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
    <div class="buttonPosition">
      <button type="button" id="apply" @click="applyModal()">적용</button>
      <button type="button" id="close" @click="multiCate=[]; $modal.hide('cate_modal')">닫기</button>
    </div>
  </div>
</modal>
</template>
<script>
const MODAL_WIDTH = 656
export default {
  name: 'DemoLoginModal',
  data () {
    return {
      modalWidth: MODAL_WIDTH,
      multiCate:[]
    }
  },
  created () {
    this.modalWidth = window.innerWidth < MODAL_WIDTH
      ? MODAL_WIDTH / 2
      : MODAL_WIDTH
  },
  methods:{
    applyModal(){
      let collection = [];
      for(let i=0; i<this.multiCate.length; i++){
        collection.push(this.multiCate[i]);
      }
      this.$emit('multicate',collection);
      this.$modal.hide('cate_modal')
    }
  }
}
</script>
<style scoped>
.modal_title{background-color: #0093E9;line-height: 24px;text-align: center;color:#ffffff;font-size:10pt;padding:5px;}
.cate_modal_table{margin:10px auto;padding:10px;width:90%;border-collapse: collapse;background-color: #E1E1E1;}
.cate_modal_table tr td{border-right:1px solid #dddddc;border-left:1px solid #dddddc;border-bottom:1px solid #dddddc;border-top:1px solid #dddddc;padding:4px;text-align:center;line-height:26px;vertical-align: middle;background-color: #ffffff;}
.cate_modal_table_content{width:100%;border-collapse: collapse;background-color: #E1E1E1;}
.cate_modal_table_content tr td{border-right:1px solid #aaaaac;border-left:1px solid #aaaaac;border-bottom:1px solid #aaaaac;border-top:1px solid #aaaaac;text-align:center;line-height:26px;vertical-align: middle;background-color: #ffffff;}
.buttonPosition{text-align: center;padding: 0;margin-top:-3px;height: 28px;}
.cate_modal_table .shadowbox{border-top:1px solid #ffffff;border-left:1px solid #ffffff;border-right:1px solid #000000;border-bottom:1px solid #000000;background-color:#E1E1E1;}
#apply,#close{margin-right:5px;border-radius: 3px;border:1px solid #9da1aa;background: rgb(225,226,227);background: linear-gradient(180deg, rgba(225,226,227,1) 0%, rgba(208,211,219,1) 100%);font-family:'돋움','Apple SD Gothic Neo';line-height: 18px;}
input[type=checkbox]{display: none;}
input[type=checkbox] + label span{display: inline-block;width: 11px;height: 11px;border-radius: 2px;border: 1px solid #3c3c3c;cursor: pointer;background-color:#fff;z-index: 1;text-align: center; margin:0;padding: 0;}
input[type=checkbox]:checked + label span{background-color: #0093E9;border: 1px solid #0093E9;background-image: url("../../assets/check.png");background-size: 20px 20px;background-position: center center;}
.pop-out-enter-active,
.pop-out-leave-active {transition: all 0.5s;}
.pop-out-enter,
.pop-out-leave-active {opacity: 0;transform: translateY(24px);}
</style>