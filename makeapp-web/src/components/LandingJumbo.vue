<template>
  <div :class="'jumbotron jumbotron-fluid h-100 ' + jumboStyle">
    <div class="container pt-4">
      <img v-if="showBrand" src="/static/logos/make_text_only.png" class="float-right"/>
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
import AppLink from '@/components/AppLink';
import 'bootstrap';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import regular from '@fortawesome/fontawesome-free-regular';

fontawesome.library.add(brands, regular);

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
