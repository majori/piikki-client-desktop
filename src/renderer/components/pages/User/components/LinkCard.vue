<template>
  <card>
    <div v-if="!opened" class="card-content">
      <button class="btn waves-effect waves-light" @click="toggleOpen()">
        LINK CARD
      </button>
    </div>
    <div v-else class="card-content">
      <div v-if="!readerOnline">
        Reader is offline
      </div>
      <div v-else-if="!tag">
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
  </card>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import Card from '@/components/common/Card';

  export default {
    name: 'link-card',
    components: { Card },
    props: ['username'],
    data() {
      return {
        opened: false,
      };
    },
    computed: {
      ...mapGetters([
        'tag',
        'readerOnline',
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
