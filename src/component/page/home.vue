<template>
  <div :class="styles.scroll">
    <div :style="{marginLeft: marginLeft + 'px', width: allWidth + 'px'}" :class="styles.contain">
      <div :style="{width: oWidth + 'px'}"><img src="../bannerImg/a15.jpg"></div>
      <div :style="{width: oWidth + 'px'}"><img src="../bannerImg/a15.jpg"></div>
      <div :style="{width: oWidth + 'px'}"><img src="../bannerImg/a15.jpg"></div>
      <div :style="{width: oWidth + 'px'}"><img src="../bannerImg/a15.jpg"></div>
    </div>
    <div>
      <h3>投影仪摄像头</h3>
      <h4>投影短焦／长焦镜头</h4>
      <div>
        <span>1234</span>
        <span>1234</span>
        <span>1234</span>
        <span>1234</span>
        <span>1234</span>
        <span>1234</span>
        <span>1234</span>
        <span>1234</span>
      </div>
      <h4>鱼眼镜头</h4>
      <div>
        <span>wwww</span>
      </div>
    </div>
  </div>
</template>

<script>


  export default {
    mounted(){
      this.oWidth = window.innerWidth;
      let that = this;
      this.scroll = setInterval(function () {
        console.log(123)
        that.num = that.num + 1;
        if(that.num === 4){
          that.num = 0;
        }
      },5000);
    },
    data: function () {
      return {
        oWidth: 0,
        num: 0,
        scroll: '',
      }
    },
    computed: {
      styles() {
        return this.$style;
      },
      marginLeft() {
        return (-this.num * window.innerWidth);
      },
      allWidth(){
        return (4 * window.innerWidth);
      }
    },
    beforeDestroy(){
      clearInterval(this.scroll);
    },
  }
</script>
<style module>
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
