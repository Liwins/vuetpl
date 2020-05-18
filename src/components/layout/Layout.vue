<template>
  <div >
    <a-layout id="components-layout-demo-top-side">
      <a-layout-header>
        <div class="logo">
          <span class="logoApp">demo</span>
        </div>
        <a-menu
          theme="dark"
          mode="horizontal"
          :defaultSelectedKeys="['2']"
          :style="{ lineHeight: '64px' }"
        >
          <a-menu-item key="1">
            <router-link to="/home">主页</router-link>
          </a-menu-item>
          <a-menu-item key="2">
            <router-link to="/page1">页面一</router-link>
          </a-menu-item>
          <a-menu-item key="3">
            <router-link to="/page2">页面二</router-link>
          </a-menu-item>
        </a-menu>
      </a-layout-header>
      <a-layout-content>
        <router-view />
      </a-layout-content>
      <a-layout-footer style="text-align: center">上海直達國際 ©2018 Created by riversky</a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: "Layout",
  components: {}
};
</script>

<style>
#components-layout-demo-top-side .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 19px 0;
  float: left;
}
.logoApp {
  font-size: 200%;
  color: bisque;
  /* margin-bottom: -50%; */
  font-weight: 200;
  position: absolute;
}
</style>