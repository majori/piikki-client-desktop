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
      const token = localStorage.getItem('TOKEN');
      if (token) {
        this.setToken(token);
      } else {
        this.showModal('set-token');
      }
    },
    methods: {
      ...mapActions([
        'setToken',
        'showModal',
      ]),
    },
  };
</script>

<style scoped>

</style>
