<template>
  <component v-bind="linkProps(to)" :is="to.type">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'app-link',
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  methods: {
    linkProps(url) {
      if (url.match(/^((http(s)?|ftp):\/\/|mailto:)/)) {
        return {
          is: 'a',
          href: url,
          target: '_blank',
          rel: 'noopener',
        };
      }
      return {
        is: 'router-link',
        to: url,
      };
    },
  },
};
</script>
