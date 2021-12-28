<template>
<modal name="jiyuk_modal" transition="pop-out" :width="200" :height="640" :clickToClose="false">
  <div style="background-color:#E1E1E1;">
    <div class="modal_title">지역 복수선택</div>
    <table class="jiyuk_modal_table">
      <tr>
        <td class="shadowbox">
          <table class="jiyuk_modal_table_content">
            <tr>
              <td style="background-color:#E1E1E1;border-top:2px solid #777771;border-bottom:1px solid #777771;">선택</td>
              <td style="background-color:#E1E1E1;border-top:2px solid #777771;border-bottom:1px solid #777771;">지역</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="popjiyuk" id="c08" value="c08,전국대상" v-model="selectjiyuk">
                <label for="c08"><span></span></label>
              </td>
              <td>전국대상</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="popjiyuk" id="c12" value="c12,서울" v-model="selectjiyuk">
                <label for="c12"><span></span></label>
              </td>
              <td>서울</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="popjiyuk" id="c13" value="c13,경기" v-model="selectjiyuk">
                <label for="c13"><span></span></label>
              </td>
              <td>경기</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="popjiyuk" id="c14" value="c14,인천" v-model="selectjiyuk">
                <label for="c14"><span></span></label>
              </td>
              <td>인천</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="popjiyuk" id="c15" value="c15,부산" v-model="selectjiyuk">
                <label for="c15"><span></span></label>
              </td>
              <td>부산</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="popjiyuk" id="c16" value="c16,대구" v-model="selectjiyuk">
                <label for="c16"><span></span></label>
              </td>
              <td>대구</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="popjiyuk" id="c17" value="c17,광주" v-model="selectjiyuk">
                <label for="c17"><span></span></label>
              </td>
              <td>광주</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="popjiyuk" id="c18" value="c18,대전" v-model="selectjiyuk">
                <label for="c18"><span></span></label>
              </td>
              <td>대전</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="popjiyuk" id="c19" value="c19,울산" v-model="selectjiyuk">
                <label for="c19"><span></span></label>
              </td>
              <td>울산</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="popjiyuk" id="c11" value="c11,세종" v-model="selectjiyuk">
                <label for="c11"><span></span></label>
              </td>
              <td>세종</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="popjiyuk" id="c20" value="c20,강원" v-model="selectjiyuk">
                <label for="c20"><span></span></label>
              </td>
              <td>강원</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="popjiyuk" id="c21" value="c21,충북" v-model="selectjiyuk">
                <label for="c21"><span></span></label>
              </td>
              <td>충북</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="popjiyuk" id="c22" value="c22,충남" v-model="selectjiyuk">
                <label for="c22"><span></span></label>
              </td>
              <td>충남</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="popjiyuk" id="c23" value="c23,전북" v-model="selectjiyuk">
                <label for="c23"><span></span></label>
              </td>
              <td>전북</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="popjiyuk" id="c24" value="c24,전남" v-model="selectjiyuk">
                <label for="c24"><span></span></label>
              </td>
              <td>전남</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="popjiyuk" id="c25" value="c25,경북" v-model="selectjiyuk">
                <label for="c25"><span></span></label>
              </td>
              <td>경북</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="popjiyuk" id="c26" value="c26,경남" v-model="selectjiyuk">
                <label for="c26"><span></span></label>
              </td>
              <td>경남</td>
            </tr>
            <tr>
              <td style="border-bottom:2px solid #777771;">
                <input type="checkbox" name="popjiyuk" id="c27" value="c27,제주" v-model="selectjiyuk">
                <label for="c27"><span></span></label>
              </td>
              <td style="border-bottom:2px solid #777771;">제주</td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
    <div class="buttonPosition">
      <button type="button" id="apply" @click="applyModal()">적용</button>
      <button type="button" id="close" @click="selectjiyuk=[]; $modal.hide('jiyuk_modal')">닫기</button>
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
      selectjiyuk:[]
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
      
      
      for(let i=0; i<this.selectjiyuk.length; i++){
        let code = this.selectjiyuk[i].split(',')[0];
        let name = this.selectjiyuk[i].split(',')[1];
        collection.push({'code':code.replace('c',''),'name':name});
      }
      console.log(collection);
      this.$emit('mutijiyuk',collection);
      this.$modal.hide('jiyuk_modal')
    }
  }
}
</script>
<style scoped>
.modal_title{
  background: rgb(90,172,86);
  background: linear-gradient(180deg, rgba(90,172,86,1) 0%, rgba(51,138,46,1) 100%);
  line-height: 24px;
  text-align: center;
  color:#ffffff;
  font-size:10pt;
  padding:5px;
}
.jiyuk_modal_table{
  margin:10px auto;
  padding:10px;
  width:90%;
  
  border-collapse: collapse;
  background-color: #E1E1E1;
}
.jiyuk_modal_table tr td{
  border-right:1px solid #dddddc;
  border-left:1px solid #dddddc;
  border-bottom:1px solid #dddddc;
  border-top:1px solid #dddddc;
  padding:4px;
  text-align:center;
  line-height:20px;
  vertical-align: middle;
  background-color: #ffffff;
}
.jiyuk_modal_table_content{
  width:100%;
  border-collapse: collapse;
  background-color: #E1E1E1;
}

.jiyuk_modal_table_content tr td{
  border-right:1px solid #aaaaac;
  border-left:1px solid #aaaaac;
  border-bottom:1px solid #aaaaac;
  border-top:1px solid #aaaaac;
  text-align:center;
  line-height:20px;
  vertical-align: middle;
  background-color: #ffffff;
}
.buttonPosition{
  text-align: center;
  padding: 0;
  margin-top:-5px;
  height: 28px;
}
.jiyuk_modal_table .shadowbox{
  border-top:1px solid #ffffff;
  border-left:1px solid #ffffff;
  border-right:1px solid #000000;
  border-bottom:1px solid #000000;
  background-color:#E1E1E1;
}
#apply,#close{
  margin-right:5px;
  border-radius: 3px;
  border:1px solid #9da1aa;
  background: rgb(225,226,227);
  background: linear-gradient(180deg, rgba(225,226,227,1) 0%, rgba(208,211,219,1) 100%);
  font-family:'돋움','Apple SD Gothic Neo';
  line-height: 18px;
}
input[type=checkbox]{
  display: none;
}
input[type=checkbox] + label span{
  display: inline-block;
  width: 11px;
  height: 11px;
  border-radius: 2px;
  border: 1px solid #3c3c3c;
  cursor: pointer;
  background-color:#fff;
  z-index: 1;
  text-align: center; 
  margin:0;
  padding: 0;
}
input[type=checkbox]:checked + label span{
  background-color: #56c15c;
  border: 1px solid #56c15c;
  background-image: url("../../assets/check.png");
  background-size: 20px 20px;
  background-position: center center;
}
.pop-out-enter-active,
.pop-out-leave-active {
  transition: all 0.5s;
}
.pop-out-enter,
.pop-out-leave-active {
  opacity: 0;
  transform: translateY(24px);
}
</style>