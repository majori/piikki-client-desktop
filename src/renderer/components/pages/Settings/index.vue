<template>
  <div class="row">
    <div class="col s4"></div>
    <div class="col s4"></div>
    <div class="col s4">
      <card>
        <button class="btn waves-effect waves-light" @click="showModal('set-token')">
          CHANGE API TOKEN
        </button>
      </card>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import Card from '@/components/common/Card';

  export default {
    name: 'settings-page',
    components: { Card },
    methods: {
      ...mapActions([
        'showModal',
      ]),
    },
  };
</script>

<style scoped>

</style>
