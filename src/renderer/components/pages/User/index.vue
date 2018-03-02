<template>
  <div v-if="username" class="row">
    <div class="username">
      <card>
        <h1>{{ username }}</h1>
      </card>
    </div>
    <div class="row">
      <div class="col s4">
        <user-saldo :username="username"/>
        <div class="row">
          <div class="col s12">
            <card>
              <button class="btn waves-effect waves-light" @click="logout()">LOGOUT</button>
            </card>
          </div>
          <div class="col s12">
            <link-card :username="username"/>
          </div>
        </div>
      </div>
      <div class="col s8">
        <card>
          <graph/>
        </card>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import Card from '@/components/common/Card';
  import UserSaldo from './components/UserSaldo';
  import LinkCard from './components/LinkCard';
  import Graph from './components/UserGraph';

  export default {
    name: 'user-page',
    components: {
      UserSaldo,
      LinkCard,
      Card,
      Graph,
    },
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
    width: 70%;
    margin: auto;

    h1 {
      margin: 0;
    }

    /deep/ .card-content {
      padding: 10px;
    }
  }
</style>
