
<template>
  <div class="anas">
    <section>
      <p >{{store.time}}</p>
      
    </section>
  </div>
</template>

<script>
import Vue from "vue";
import { Observer } from "mobx-vue";
import Component from "vue-class-component";
import store from "../../store";


@Observer
@Component
export default class Home extends Vue {
  store=store
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
