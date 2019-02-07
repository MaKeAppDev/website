<template>
  <div :class="'jumbotron jumbotron-fluid h-100 ' + jumboStyle">
    <div class="container pt-4">
      <img v-if="showBrand" src="/logos/make_text_only.png" class="float-right" alt="MaKeApp Logo"/>
      <h1>{{title}}</h1>
      <p class="lead">{{description}}</p>
      <app-link v-for="ref in refs" :key="ref.title"
         :class="'btn ' + btnStyle + ' mr-1 mb-1'" :to="ref.link">
        <font-awesome-icon :icon="ref.icon"/> {{ref.title}}
      </app-link>
    </div>
  </div>
</template>

<script>
import AppLink from '@/components/AppLink.vue';
import 'bootstrap';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fab, far);
dom.watch();

export default {
  name: 'landing-jumbo',
  props: {
    title: String,
    description: String,
    refs: Array,
    showBrand: {
      type: Boolean,
      default: true,
    },
    jumboStyle: String,
    btnStyle: {
      type: String,
      default: 'btn-primary',
    },
  },
  components: {
    AppLink,
    FontAwesomeIcon,
  },
};
</script>

<style scoped lang="scss">
@import '../../node_modules/bootstrap/scss/bootstrap.scss';
</style>
