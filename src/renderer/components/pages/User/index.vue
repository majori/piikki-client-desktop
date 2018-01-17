<template>
  <div v-if="username" class="wrapper row">
    <div class="center-align">
      <h1>{{ username }}</h1>
    </div>
    <div class="col s4">
      <user-saldo :username="username"/>
    </div>
    <div class="col s3">
      <card>
        <button class="btn waves-effect waves-light" @click="logout()">LOGOUT</button>
      </card>
      <link-card :username="username"/>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import Card from '@/components/common/Card';
  import UserSaldo from './components/UserSaldo';
  import LinkCard from './components/LinkCard';

  export default {
    name: 'user-page',
    components: { UserSaldo, LinkCard, Card },
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
