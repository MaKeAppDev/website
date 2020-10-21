<template>
  <div>
    <landing-jumbo :title="name" :description="description" :refs="refs"
                   jumboStyle="bg-primary text-white" btnStyle="btn-warning"/>
    <div class="container pt-5">
      <content-row title="Biography" v-if="infos">
        <ul class="list-group list-group-flush">
          <li class="list-group-item" v-for="info in infos" :key="info.date">
            <font-awesome-icon :icon="info.icon" fixed-width/>
            {{info.text}}<br>
            <small class="text-secondary">{{info.subtext}}, {{info.date}}</small>
          </li>
        </ul>
      </content-row>
      <content-row title="Projects" v-if="projects">
        <div class="row">
          <div v-for="element in projects" :key="element.title" class="col-sm text-center">
            <content-card :title="element.title" :link="element.link" :image="element.icon"
                          :description="element.description" :tags="element.tags">
            </content-card>
          </div>
        </div>
      </content-row>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import OwnersContent from '@/assets/data/owners_content.json';
import ContentRow from '@/components/ContentRow.vue';
import LandingJumbo from '@/components/LandingJumbo.vue';
import ContentCard from '@/components/ContentCard.vue';
import 'bootstrap';

library.add(fas);
dom.watch();

export default {
  name: 'OwnersView',
  data() {
    const owner = OwnersContent[this.$route.params.id];

    return {
      name: owner.name,
      description: owner.description,
      refs: owner.refs,
      infos: owner.infos,
      projects: owner.projects,
      publications: owner.publications,
    };
  },
  components: {
    LandingJumbo,
    ContentRow,
    FontAwesomeIcon,
    ContentCard,
  },
};
</script>

<style scoped lang="scss">
  @import '../../node_modules/bootstrap/scss/bootstrap.scss';
</style>
