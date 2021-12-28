<template>
  <input v-bind:value="value" v-on:input="updateInput" name="keyword" id="keyword" v-on:keydown.enter.prevent='checkform' @focus="$event.target.select()">
</template>

<script>
export default {
  props: ['value'],
  methods: {
    updateInput(event) {
      this.$emit('input', event.target.value);
    },
    checkform(){
      console.log(this.value);
      this.$emit("checkform",this.value);
    }
  }
}
</script>

<style>

</style>