<template>
  <card title="Group saldo">
    <h2>{{ saldo }}</h2>
  </card>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import Card from '@/components/common/Card';

  export default {
    name: 'group-saldo',
    components: { Card },
    created() {
      this.getGroupSaldo();
    },
    computed: {
      ...mapGetters({
        saldo: 'groupSaldo',
      }),
    },
    methods: {
      ...mapActions([
        'getGroupSaldo',
      ]),
    },
  };
</script>

<style scoped lang="scss">
  h2 {
    margin: 0;
  }
</style>
