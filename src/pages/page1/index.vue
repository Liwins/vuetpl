
<template>
  <div class="anas">
    页面一
    <p v-text="store.time"></p>
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import { Observer } from "mobx-vue";
import store from "../../store/index";


@Observer
@Component
export default class Page1 extends Vue {
  store = store;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
