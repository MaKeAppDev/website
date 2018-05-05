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
        <li class="nav-item">
        <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li v-for="section in $options.content.sections" :key="section" class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" :id="'navbarDropdown' + section.titleShort"
             role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {{section.titleShort}}
          </a>
          <div class="dropdown-menu" :aria-labelledby="'navbarDropdown' + section.titleShort">
            <div v-for="element in section.data" :key="element">
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
        <li v-for="ref in $options.content.refs" :key="ref" class="nav-item">
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
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import regular from '@fortawesome/fontawesome-free-regular';
import BaseContent from '@/assets/data/base_content.json';
import AppLink from '@/components/AppLink';
import DevAlert from './mixins/devAlert';

fontawesome.library.add(brands, regular);

export default {
  name: 'nav-bar-component',
  components: {
    FontAwesomeIcon,
    AppLink,
  },
  content: BaseContent,
  mixins: [DevAlert],
};
</script>

<style scoped lang="scss">
@import '../../node_modules/bootstrap/scss/bootstrap.scss';
</style>
