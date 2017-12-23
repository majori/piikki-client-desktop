<template>
  <div class="saldo card center-align">
    <div class="card-content">
      <card-header title="Group saldo"></card-header>
      <h2>{{ saldo }}</h2>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import CardHeader from '@/components/common/CardHeader';

  export default {
    name: 'group-saldo',
    components: { CardHeader },
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
  .saldo {

  }
</style>
