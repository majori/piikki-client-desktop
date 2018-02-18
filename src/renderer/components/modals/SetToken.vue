<template>
  <div>
    <div v-if="!tokenExists" class="row">
      Set token received from
    </div>
    <div class="row" v-else>
      Change token
    </div>
    <div class="row" v-if="invalidToken">
      Invalid token
    </div>
    <div class="row">
      <input v-model="token"/>
    </div>
    <div class="row">
      <button class="btn waves-effect waves-light" @click="handleClose()">
        SET TOKEN
      </button>
      <button class="btn waves-effect waves-light" v-if="tokenExists" @click="closeModal()">
        CANCEL
      </button>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

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
      ...mapGetters([
        'isModalOpen',
      ]),
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

<style lang="scss">

</style>
