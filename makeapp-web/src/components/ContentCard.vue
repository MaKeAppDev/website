<template>
  <div class="card bg-light mt-2">
    <img class="card-img-top center-square mt-3" :src="image" alt="Card image cap">
    <hr>
    <div class="card-body">
      <h5 class="card-title">{{title}}</h5>
      <span v-for="tag in tags" :key="tag.label" class="badge badge-primary ml-1">
         <i :class="tag.icon"></i> {{tag.label}}
      </span>
      <p class="card-text text-muted mt-3">{{description}}</p>
      <app-link v-if="link" :to="link" class="btn btn-primary">More</app-link>
      <button v-else v-on:click="showInDevAlert(title)" class="btn btn-primary">More</button>
    </div>
  </div>
</template>

<script>
import AppLink from '@/components/AppLink.vue';
import DevAlert from './mixins/devAlert';

export default {
  name: 'content-card',
  props: {
    image: String,
    title: String,
    link: String,
    description: String,
    tags: Array,
  },
  components: {
    AppLink,
  },
  mixins: [DevAlert],
};
</script>

<style scoped lang="scss">
@import '../../node_modules/bootstrap/scss/bootstrap.scss';
@import "../../node_modules/devicon-2.2/devicon.min.css";

.center-square {
  width: auto;
  height: 192px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
