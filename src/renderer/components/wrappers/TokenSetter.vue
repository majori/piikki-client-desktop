<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'token-setter-wrapper',
    created() {
      const token = 'restricted_token'; // localStorage.getItem('TOKEN');
      if (token) {
        this.setToken(token);
      } else {
        this.$router.push({ name: 'settings-page' });
      }
    },
    computed: {
      ...mapGetters([
        'token',
        'loadingPath',
      ]),
    },
    methods: {
      ...mapActions([
        'setToken',
      ]),
    },
  };
</script>

<style scoped>

</style>
