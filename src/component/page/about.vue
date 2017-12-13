<template>
  <div :class="styles.contain">
    <div>我们是专业的</div>
    <div>我们是最棒的的</div>
  </div>
</template>
<script>

  export default {
    mounted(){
    },
    data: function () {
      return {
      }
    },
    computed: {
      styles() {
        return this.$style;
      },
    },
    beforeDestroy(){

    },
  }
</script>
<style module>
</style>