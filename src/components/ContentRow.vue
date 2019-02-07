<template>
  <div class="row mb-5">
    <div class="col-2">
      <p class="lead">{{title}}</p>
    </div>
    <div class="col-10">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import 'bootstrap';

export default {
  name: 'ContentRow',
  props: {
    title: String,
  },
};
</script>

<style scoped lang="scss">
  @import '../../node_modules/bootstrap/scss/bootstrap.scss';
</style>
