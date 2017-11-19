<template>
  <div class="wrapper">
    <form v-on:submit.prevent="login({ username, password })">
      <div class="row input">
        <div class="input-field col s10 m4 offset-s1 offset-m4">
          <input id="username" type="text" v-model="username">
          <label for="username">Username</label>
        </div>
      </div>
      <div class="row input">
        <div class="input-field col s10 m4 offset-s1 offset-m4">
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
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'login',
    data() {
      return {
        username: '',
        password: '',
      };
    },
    computed: {
      ...mapGetters([
        'failedAuth',
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
