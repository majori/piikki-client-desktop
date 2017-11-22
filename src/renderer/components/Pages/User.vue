<template>
  <div v-if="username" class="wrapper row">
    <div class="center-align">
      <h1>{{ username }}</h1>
    </div>
    <div class="col s4">
      <saldo :username="username"></saldo>
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
  import Saldo from '@/components/common/Saldo';
  import LinkCard from '@/components/common/LinkCard';

  export default {
    name: 'user-page',
    components: { Saldo, LinkCard },
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
