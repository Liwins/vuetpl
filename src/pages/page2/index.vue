
<template>
  <div>编解码</div>
</template>
<script>
import Vue from "vue";
import Component from "vue-class-component";
import { Observer } from "mobx-vue";
import ViewModel from "../../store";
@Component
@Observer
export default class Page2 extends Vue {
  store = ViewModel;
  
};
</script>

<style>
</style>