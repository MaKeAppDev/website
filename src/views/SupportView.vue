<template>
  <div>
    <landing-jumbo
      title="Support" jumboStyle="bg-warning"
      description="Contact us for questions or issues related to any of our projects">
    </landing-jumbo>
    <form class="container py-5" @submit="submitForm" action="javascript:void(0);">
      <div class="form-group">
        <label for="inputMail">Email address</label>
        <input v-model="email" type="email" class="form-control" id="inputMail"
               aria-describedby="emailHelp" placeholder="Enter your email">
        <small id="emailHelp" class="form-text text-muted">
          We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="inputText">Subject</label>
        <input v-model="subject" type="text" class="form-control" id="inputText"
               placeholder="Enter Subject">
      </div>
      <div class="form-group">
        <label for="inputMailText">Message</label>
        <textarea v-model="message" class="form-control" id="inputMailText" rows="5"
                  placeholder="Enter your message"/>
      </div>
      <div v-if="errors.length">
        <p v-for="error in errors" :key="error" class="alert alert-danger"
           role="alert">{{ error }}</p>
      </div>
      <button type="submit" class="btn btn-primary" :disabled="sending">Submit</button>
    </form>
  </div>
</template>

<script>
import SweetAlert from 'vue-sweetalert2';
import VueResource from 'vue-resource';
import Vue from 'vue';
import LandingJumbo from '@/components/LandingJumbo.vue';

Vue.use(SweetAlert);
Vue.use(VueResource);

export default {
  name: 'SupportView',
  components: {
    LandingJumbo,
  },
  data() {
    return {
      errors: [],
      subject: '',
      email: '',
      message: '',
      sending: false,
    };
  },
  methods: {
    isValidEmail() {
      return this.email.length > 0;
    },
    isValidMessage() {
      return this.message.length > 0;
    },
    checkForm() {
      this.errors = [];
      if (!this.isValidEmail()) {
        this.errors.push('Valid Email required');
      }
      if (!this.isValidMessage()) {
        this.errors.push('Message may not be empty');
      }
      return !this.errors.length;
    },
    sendEmail() {
      this.sending = true;
      this.$http.post(
        'https://support.makeappdev.com/send-mail.php',
        {
          email: this.email,
          subject: this.subject,
          message: this.message,
        },
      ).then(() => {
        this.$swal.fire({
          title: 'Email sent!',
          icon: 'success',
          text: 'Your email was sent successfully',
        });
        this.sending = false;
      }, () => {
        this.$swal.fire({
          title: 'Failed',
          icon: 'error',
          text: 'Email could not be sent',
        });
        this.sending = false;
      });
    },
    submitForm() {
      if (this.checkForm()) {
        this.sendEmail();
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import '../../node_modules/bootstrap/scss/bootstrap.scss';
</style>
