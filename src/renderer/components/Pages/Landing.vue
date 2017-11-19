<template>
  <div id="wrapper">
  
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'landing-page',
    components: { },
    methods: {
      open(link) {
        this.$electron.shell.openExternal(link);
      },
      ...mapActions([
        'setToken',
      ]),
    },
  };
</script>

<style scoped>

</style>
