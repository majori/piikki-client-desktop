<template>
  <div id="wrapper">
    <h1>{{ loggedInUser }}</h1>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import Login from './Login';

  export default {
    name: 'user-page',
    components: { Login },
    computed: {
      ...mapGetters([
        'loggedInUser',
      ]),
    },
  };
</script>

<style scoped>

</style>
