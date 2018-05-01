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
import LandingJumbo from '@/components/LandingJumbo';
import 'bootstrap';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import regular from '@fortawesome/fontawesome-free-regular';

fontawesome.library.add(brands, regular);

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
    FontAwesomeIcon,
    LandingJumbo,
  },
};
</script>

<style scoped lang="scss">
@import '../../node_modules/bootstrap/scss/bootstrap.scss';
</style>
