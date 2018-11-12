<template>
  <div>
    <div id="carouselIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselIndicators" data-slide-to="1"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <landing-jumbo :title="$options.content.title" :description="$options.content.description"
                         :refs="$options.content.refs" :showBrand="false"></landing-jumbo>
        </div>
        <div class="carousel-item">
          <div class="jumbotron jumbotron-fluid bg-primary h-100 bg-image-second-slide">
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div class="container">
      <div v-for="section in this.$options.content.sections" :key="section.titleShort" class="my-5">
        <h2>{{section.title}}</h2>
        <p class="text-muted">{{section.description}}</p>
        <div class="row">
          <div v-for="element in section.data" :key="element.title" class="col-sm" align="center">
            <content-card :title="element.title" :link="element.link" :image="element.icon"
                          :description="element.description" :tags="element.tags">
            </content-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentCard from '@/components/ContentCard.vue';
import LandingJumbo from '@/components/LandingJumbo.vue';
import BaseContent from '@/assets/data/base_content.json';
import 'bootstrap';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fab, far);
dom.watch();

export default {
  name: 'HomeView',
  components: {
    ContentCard,
    LandingJumbo,
  },
  content: BaseContent,
};
</script>

<style scoped lang="scss">
@import '../../node_modules/bootstrap/scss/bootstrap.scss';

.carousel-item {
  height: 320px;
}

.bg-image-second-slide {
  background: url('/static/logos/make_text_only.png') no-repeat center center;
}
</style>
