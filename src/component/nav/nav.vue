<template>
  <div>
    <div>12334444444444</div>
    <div :class='$style.header'>
    </div>
    <div :class='$style.footer'></div>
  </div>
</template>

<script>
  export default {
    computed: {
      styles() {
        return this.$style;
      }
    },
  }
</script>

<style moudle>

</style>