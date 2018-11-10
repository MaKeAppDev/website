<template>
  <div>
    <landing-jumbo :title="name" :description="description" :refs="refs"
                   jumboStyle="bg-primary text-white" btnStyle="btn-warning"></landing-jumbo>
    <div class="container pt-5">
      <table class="table font-weight-bold">
        <tbody>
          <tr v-for="info in infos" :key="info">
            <td class="text-center">{{info.date}}</td>
            <td v-html="info.text"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import OwnersContent from '@/assets/data/owners_content.json';
import LandingJumbo from '@/components/LandingJumbo.vue';
import 'bootstrap';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { brands } from '@fortawesome/free-brands-svg-icons';
import { regular } from '@fortawesome/free-regular-svg-icons';

library.add(brands, regular);
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
    };
  },
  components: {
    LandingJumbo,
  },
};
</script>

<style scoped lang="scss">
@import '../../node_modules/bootstrap/scss/bootstrap.scss';
</style>
