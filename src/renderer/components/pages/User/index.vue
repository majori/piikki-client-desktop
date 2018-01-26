<template>
  <div v-if="username" class="wrapper row">
    <div class="username">
      <card>
        <h1>{{ username }}</h1>
      </card>
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

<style scoped lang="scss">
  .username {
    h1 {
      margin: 0;
    }
    /deep/ .card-content {
      padding: 10px;
    }
    width: 70%;
    margin: auto;
  }
  .wrapper {
    margin: 0;
  }
</style>
