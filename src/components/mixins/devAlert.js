import Swal from 'sweetalert2';

export default {
  methods: {
    showInDevAlert(projectName) {
      Swal.fire({
        title: 'In Development',
        icon: 'warning',
        showCloseButton: true,
        text: `The project and page  ${projectName} is currently in development and will be available in the future`,
      });
    },
  },
};
