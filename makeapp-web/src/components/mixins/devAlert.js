import SweetAlert from 'vue-sweetalert2';
import Vue from 'vue';

Vue.use(SweetAlert);

export default {
  methods: {
    showInDevAlert(projectName) {
      this.$swal({
        title: 'In Development',
        type: 'info',
        showCloseButton: true,
        text: `The project and page  ${projectName} is currently in development and will be available in the future`,
      });
    },
  },
};
