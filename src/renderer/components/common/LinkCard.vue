<template>
  <div class="card center-align">
    <div v-if="!opened" class="card-content">
      <button class="btn waves-effect waves-light" @click="toggleOpen()">
        LINK CARD
      </button>
    </div>
    <div v-else class="card-content">
      <div v-if="!tag">
        Insert card to the reader
      </div>
      <div v-else class="card-ready">
        <p>Card with ID:</p>
        <b>{{ tag }}</b>
        <button class="btn waves-effect waves-light submit-card" @click="handleLinkCard()">
          LINK CARD
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'link-card',
    props: ['username'],
    data() {
      return {
        opened: false,
      };
    },
    computed: {
      ...mapGetters([
        'tag',
      ]),
    },
    methods: {
      toggleOpen() {
        this.opened = !this.opened;
      },
      async handleLinkCard() {
        await this.createAlternativeLogin({
          username: this.username,
          tag: this.tag,
        });
        this.opened = false;
      },
      ...mapActions([
        'createAlternativeLogin',
      ]),
    },
  };
</script>

<style lang="scss" scoped>
  .card.ready button {
    margin-top: 10px;
  }
</style>
