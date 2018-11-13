<template>
  <div class="container text-center" style="margin-top: 10rem">
    <h1>Oops!</h1>
    <h2>404 Not Found</h2>
    <p>Sorry, an error has occured, Requested page not found!</p>
    <div>
      <router-link to="/" class="btn btn-primary btn-lg">
        <font-awesome-icon :icon="['fas', 'home']"/> Take Me Home
      </router-link>
      <router-link to="/support" class="btn btn-secondary btn-lg">
        <font-awesome-icon :icon="['fas', 'life-ring']"/> Contact Support
      </router-link>
    </div>
  </div>

</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fab, far);
dom.watch();

export default {
  name: 'PageNotFound',
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style scoped lang="scss">
@import '../../node_modules/bootstrap/scss/bootstrap.scss';
</style>
