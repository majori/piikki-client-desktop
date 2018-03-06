<template>
  <div>
    <slot />
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'token-setter-wrapper',
    created() {
      const token = (process.env.NODE_ENV === 'production') ? localStorage.getItem('TOKEN') : 'restricted_token';
      if (token) {
        this.setToken(token);
        this.getGroup();
      } else {
        this.showModal('set-token');
      }
    },
    methods: {
      ...mapActions([
        'setToken',
        'showModal',
        'getGroup',
      ]),
    },
  };
</script>

<style scoped>

</style>
