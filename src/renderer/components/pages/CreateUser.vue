<template>
  <div class="wrapper">
    <form v-on:submit.prevent="createUser({ username, password })">
      <div class="row">
        <div class="input-field col s10 m4 offset-s1 offset-m4">
          <input id="username" type="text" v-model="username">
          <label for="username">Username</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s10 m4 offset-s1 offset-m4">
          <input id="password" type="password" v-model="password">
          <label for="password">Password</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s10 m4 offset-s1 offset-m4">
          <input id="repeatPassword" type="password" v-model="repeatPassword">
          <label for="repeatPassword">Repeat password</label>
        </div>
      </div>
      <div class="row">
        <button
          :disabled="!username || !password || (password !== repeatPassword)"
          class="btn waves-effect waves-light"
        >
          CREATE ACCOUNT
        </button>
      </div>
    </form>
    <div v-if="userCreateError" class="row error">
      {{ userCreateError }}
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'create-user-page',
    components: { },
    data() {
      return {
        username: '',
        password: '',
        repeatPassword: '',
      };
    },
    computed: {
      ...mapGetters([
        'userCreateError',
      ]),
    },
    methods: {
      ...mapActions([
        'createUser',
      ]),
    },
  };
</script>

<style lang="scss" scoped>
  .wrapper {
    padding-top: 15vh;
    text-align: center;
  }

  form {
    .row {
      margin: 0;
    }

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
