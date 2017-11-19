<template>
  <div id="wrapper" v-if="username">
    <h1>{{ username }}</h1>
    <button class="btn waves-effect waves-light" @click="logout()">LOGOUT</button>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import Login from './Login';

  export default {
    name: 'user-page',
    components: { Login },
    created() {
      // `this` points to the vm instance
      if (!this.username) {
        this.$router.push({ path: '/user/login' });
      }
    },
    computed: {
      ...mapGetters({
        username: 'loggedInUser',
      }),
    },
    methods: {
      ...mapActions([
        'logout',
      ]),
    },
  };
</script>

<style scoped>

</style>
