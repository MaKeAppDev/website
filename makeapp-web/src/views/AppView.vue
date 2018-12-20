<template>
  <div class="container-fluid">
    <div class="row title justify-content-center py-4" :style="{ 'background': storeBg }">
      <img class="titleLogo" :src="imagePath + titleLogo" alt="Logo">
    </div>
    <div class="row">
      <div v-for="deviceImage in deviceImages" :key="deviceImage" class="col blockImg">
        <img class="device" :src="imagePath + deviceImage" alt="Device Store Image">
      </div>
    </div>
    <div class="row highlighted text-center" :style="{ 'background-color': mainColor }">
      <a v-for="storeImage in storeImages" :key="storeImage.image" class="col blockImg"
         :href="storeImage.link" target="_blank">
        <img class="storeImg" :src="appsPath + storeImage.image" alt="Download from Store">
      </a>
    </div>
  </div>
</template>

<script>
import AppContent from '@/assets/data/app_content.json';

export default {
  name: 'MensaView',
  data() {
    const app = AppContent[this.$route.params.id];
    const appsPath = '/apps/';

    return {
      appsPath,
      imagePath: `${appsPath}${this.$route.params.id}/`,
      titleLogo: app.titleLogo,
      deviceImages: app.deviceImages,
      storeImages: app.storeImages,
      mainColor: app.mainColor,
      storeBg: app.storeBg,
    };
  },
};
</script>

<style scoped lang="scss">
@import '../../node_modules/bootstrap/scss/bootstrap.scss';

.highlighted {
  padding: 16px 0;
  bottom: 0;
  box-shadow: 0 -1px 5px #888;
}

.title {
  font-weight: bold;
  color: white;
  box-shadow: 0 1px 5px #888;
}

.titleLogo {
  width: 90%;
  max-width: 400px;
}

.device {
  width: 100%;
}

.storeImg {
  height: 60px;
}

.blockImg {
  display: inline-block;
  width: 25%;
  min-width: 210px;
}

/* Mobile Optimisation */

@media screen and (max-width: 430px){
  .blockImg {
    width: 100%;
    padding: 0;
  }
  body {
    padding-bottom: 0;
  }
  .highlighted {
    position: relative;
    bottom: auto;
  }
  .storeImg {
    height: auto;
    width: 80%;
    max-width: 200px;
  }
}

@media screen and (max-width: 700px) and (orientation: landscape) {
  body {
    padding-bottom: 0;
  }
  .titleLogo {
    max-width: 200px;
  }
  .highlighted {
    position: relative;
    bottom: auto;
  }
}
</style>
