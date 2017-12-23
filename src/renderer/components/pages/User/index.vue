<template>
  <div v-if="username" class="wrapper row">
    <div class="center-align">
      <h1>{{ username }}</h1>
    </div>
    <div class="col s4">
      <user-saldo :username="username"></user-saldo>
    </div>
    <div class="col s3">
      <div class="card center-align">
        <div class="card-content">
          <button class="btn waves-effect waves-light" @click="logout()">LOGOUT</button>
        </div>
      </div>
      <link-card :username="username"></link-card>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import UserSaldo from './components/UserSaldo';
  import LinkCard from './components/LinkCard';

  export default {
    name: 'user-page',
    components: { UserSaldo, LinkCard },
    created() {
      // User is not logged in, redirect to login
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
  .wrapper {
    margin: 0;
  }
</style>
