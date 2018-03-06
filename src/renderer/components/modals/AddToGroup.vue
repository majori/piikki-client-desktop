<template>
  <div class="container">
    It seems that you are not a member in the group "{{ group }}".
    <p><b>Do you want to join the group now?</b></p>
    <div class="buttons">
      <button class="btn waves-effect waves-light" @click="handleYes()">
        YES
      </button>
      <button class="btn waves-effect waves-light" @click="handleNo()">
        NO
      </button>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'add-to-group-modal',
    props: ['closeModal'],
    computed: {
      ...mapGetters([
        'isModalOpen',
        'group',
      ]),
    },
    methods: {
      ...mapActions([
        'getGroup',
        'logout',
        'addCurrentUserToGroup',
      ]),

      async handleYes() {
        await this.addCurrentUserToGroup();
        this.close();
      },

      async handleNo() {
        await this.logout();
        this.close();
      },

      close() {
        this.$router.push({ path: '/user/login' });
        this.closeModal();
      },
    },
  };
</script>

<style scoped lang="scss">
  .container {
    width: 60%;
    margin: auto;
    text-align: center;
    font-size: 1.3rem;
  }

  .buttons {

  }
</style>
