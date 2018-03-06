<template>
  <div class="center-align">
    <div v-if="!tokenExists" class="row">
      <h3>Hey!</h3>
      <b>It seems that you are using this app for the first time. Insert the token given to your group.</b>
    </div>
    <div class="row" v-else>
      <b>Change the API token</b>
    </div>
    <div class="row">
      <input v-model="token" placeholder="Insert the token here"/>
    </div>
    <div class="row">
      <button class="btn waves-effect waves-light" @click="handleClose()">
        SET TOKEN
      </button>
      <button class="btn waves-effect waves-light" v-if="tokenExists" @click="closeModal()">
        CANCEL
      </button>
    </div>
    <div class="row error" v-if="invalidToken">
      Token seems to be invalid. Are you sure you typed the token correctly?
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'set-token-modal',
    props: ['closeModal'],
    data() {
      return {
        token: '',
        invalidToken: false,
      };
    },
    computed: {
      tokenExists() {
        return localStorage.getItem('TOKEN');
      },
    },
    methods: {
      ...mapActions([
        'setToken',
        'getGroup',
      ]),
      async handleClose() {
        try {
          await this.setToken(this.token);
          await this.getGroup();

          // Request was successful, save token to localStorage
          localStorage.setItem('TOKEN', this.token);
          this.closeModal();
        } catch (err) {
          this.invalidToken = true;
        }
      },
    },
  };
</script>

<style scoped lang="scss">
  h3 {
    margin: 20px;
  }

  input {
    width: 60%;
    font-family: monospace;
  }

  .error {
    color: red;
  }

</style>
