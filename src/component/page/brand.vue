<template>
  <div :class="styles.brand">
    <div v-for="item in list" :class="styles.list">
      <div><img :src="item.src" /></div>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
import brandList from '../address/brand';

  export default {
    mounted(){
      this.list = brandList.map(val => ({
        src: './brand/' + val.src,
        title: val.title,
      }))
    },
    data: function () {
      return {
        list: [],
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
  .brand{
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    margin: 0 auto;
  }
  .list{
    min-height: 40px;
    width: 140px;
    text-align: center;
    margin: 10px 10px 0 0;
  }
  .list img{
    width: 130px;
    height: 40px;
    object-fit: cover;
  }
  .scroll{
    height: 244px;
    width: 100%;
    box-sizing: border-box;
  }
  .scroll div{
    height: 244px;
  }
  .contain{
    transition: all 2s;
    box-sizing: border-box;
    display: flex;
  }
  .contain div{
    flex: 1;
  }
  .contain img{
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

</style>