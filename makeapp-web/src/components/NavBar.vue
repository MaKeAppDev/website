<template>
  <nav class="navbar navbar-dark bg-dark sticky-top navbar-expand-sm">
    <router-link class="navbar-brand" to="/">
      <img src="/static/logos/make_text_only.png" width="auto" height="40"
           class="d-inline-block align-top" alt="">
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" :class="{ active: $route.path === '/' }">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li v-for="section in $options.content.sections" :key="section.titleShort"
            class="nav-item dropdown" :class="{ active: isActive(section.titleShort) }">
          <a class="nav-link dropdown-toggle" href="#" :id="'navbarDropdown' + section.titleShort"
             role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {{section.titleShort}}
          </a>
          <div class="dropdown-menu" :aria-labelledby="'navbarDropdown' + section.titleShort">
            <div v-for="element in section.data" :key="element.title">
              <app-link v-if="element.link" :to="element.link" class="dropdown-item">
                <img :src="element.icon" height="20px"> {{element.title}}
              </app-link>
              <button v-else v-on:click="showInDevAlert(element.title)"
                      class="dropdown-item">
                <img :src="element.icon" height="20px"> {{element.title}}
              </button>
            </div>
          </div>
        </li>
      </ul>
      <ul class="navbar-nav float-right">
        <li v-for="ref in $options.content.refs" :key="ref.title" class="nav-item">
          <app-link class="nav-link" :to="ref.link">
            <font-awesome-icon :icon="ref.icon"/>
          </app-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import 'bootstrap';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import BaseContent from '@/assets/data/base_content.json';
import AppLink from '@/components/AppLink.vue';
import DevAlert from './mixins/devAlert';

library.add(fab, far);
dom.watch();

export default {
  name: 'nav-bar-component',
  components: {
    FontAwesomeIcon,
    AppLink,
  },
  content: BaseContent,
  mixins: [DevAlert],
  methods: {
    isActive(section) {
      return this.$route.path.includes(section.toLowerCase());
    },
  },
};
</script>

<style scoped lang="scss">
@import '../../node_modules/bootstrap/scss/bootstrap.scss';
</style>
