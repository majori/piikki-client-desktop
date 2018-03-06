<template>
  <div class="wrapper">
    <card>
      <form v-on:submit.prevent="login({ username, password })">
        <div class="row input">
          <div class="input-field col s10 offset-s1">
            <input id="username" type="text" v-model="username">
            <label for="username">Username</label>
          </div>
        </div>
        <div class="row input">
          <div class="input-field col s10 offset-s1">
            <input id="password" type="password" v-model="password">
            <label for="password">Password</label>
          </div>
        </div>
        <div class="row">
          <button class="btn waves-effect waves-light">LOGIN</button>
        </div>
      </form>
      <div v-if="failedAuth" class="row error">
        Wrong username or password
      </div>
      <div class="row">
        <router-link :to="{ name: 'create-user-page' }">Don't have an account yet?</router-link>
      </div>
    </card>
  </div>
</template>

<script>
  import Card from '@/components/common/Card';
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'login',
    components: { Card },
    created() {
      // If user is already logged in, redirect to user page
      if (this.loggedInUser) {
        this.$router.push({ path: '/user' });
      }
    },
    data() {
      return {
        username: '',
        password: '',
      };
    },
    computed: {
      ...mapGetters([
        'failedAuth',
        'loggedInUser',
      ]),
    },
    methods: {
      ...mapActions([
        'login',
      ]),
    },
  };
</script>

<style lang="scss" scoped>
  .wrapper {
    padding-top: 15vh;
    text-align: center;
    width: 50%;
    margin: auto;
  }

  .row {
    margin: 0;
  }

  form {
    .input-field {
      margin: 0.5rem;
    }

    button {
      margin: 10px 0;
    }
  }

  .error {
    color: red;
  }

</style>
