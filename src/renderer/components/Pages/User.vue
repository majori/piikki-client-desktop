<template>
  <div v-if="username" class="wrapper row">
    <div class="center-align">
      <h1>{{ username }}</h1>
    </div>
    <div class="col s4">
      <saldo :username="username"></saldo>
    </div>
    <div class="col s3 offset-s5">
      <div class="card center-align">
        <div class="card-content">
          <button class="btn waves-effect waves-light" @click="logout()">LOGOUT</button>
        </div>
      </div>
      <div class="card center-align">
        <div class="card-content">
          <button class="btn waves-effect waves-light">LINK CARD</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import Saldo from '@/components/common/Saldo';

  export default {
    name: 'user-page',
    components: { Saldo },
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
