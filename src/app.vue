<template>
  <div :class='styles.contain'>
    <el-menu
      default-active="1"
      class="el-menu-demo"
      mode="horizontal"
      text-color="#fff"
      background-color="#545c64"
      separator="/"
      router
    >
      <el-menu-item index="/home">公司产品</el-menu-item>
      <el-menu-item index="/brand">适配品牌</el-menu-item>
      <el-menu-item index="3"><router-link to="/brand">服务与支持</router-link></el-menu-item>
      <el-menu-item index="/about">关于老五</el-menu-item>
      <el-submenu index="5">
        <template slot="title">联系我们</template>
        <el-menu-item index="5-1">选项1</el-menu-item>
        <el-menu-item index="5-2">选项2</el-menu-item>
        <el-menu-item index="5-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="6"><a href="#" target="_blank">订单管理</a></el-menu-item>
    </el-menu>
    <div :class="styles.content" :style="{height: oHeight + 'px'}">
      <router-view></router-view>
    </div>
    <div :class="styles.foot">
      <div :class="styles.list">
        <ul>
          <li>服务网点</li>
          <li>测试</li>
          <li>测试3</li>
          <li>测试4</li>
        </ul>
        <ul>
          <li>员工登陆</li>
          <li>测试2</li>
          <li>测试3</li>
          <li>测试4</li>
        </ul>
        <ul>
          <li>用户家园</li>
          <li>测试2</li>
          <li>测试3</li>
          <li>测试4</li>
        </ul>
        <ul>
          <li>友情链接</li>
          <li>测试2</li>
          <li>测试3</li>
          <li>测试4</li>
        </ul>
      </div>
      <div :class="styles.beian">备案号:hgthhjahjfhjdjdsjjfhjhafbehb</div>
    </div>

  </div>
</template>

<script>
  import $ from 'jquery';

  export default {
    mounted(){
      $(window).on('resize', this.onresize);
    },
    data: function () {
      return { oHeight: 500 }
    },
    computed: {
      styles() {
        return this.$style;
      }
    },
    methods: {
      onresize: function () {
        this.oHeight = window.innerHeight - 200;
      }
    },
    beforeDestroy(){
      $(window).off('resize', this.onresize);
    },

  }
</script>

<style module>
  .content{
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .foot {
    height: 140px;
    background: #2F4056;
    font-size: 12px;
    overflow: hidden;
  }
  .list{
    display: flex;
    color: #ffffff;
    height: 100px;
    box-sizing: border-box;
  }
  .list ul {
    flex: 1;
  }
  .beian{
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    text-align: center;
    line-height: 40px;
    color: #58595b;
  }
</style>