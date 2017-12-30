<template>
  <div class="transactions card center-align">
    <div class="card-content">
      <card-header title="Latest transactions"></card-header>
      <table>
        <tr v-for="trx in transactions" :key="trx.timestamp">
          <td>{{ trx.timestamp }}</td>
          <td>{{ trx.username }}</td>
          <td>{{ trx.diff }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import { subDays } from 'date-fns';
  import CardHeader from '@/components/common/CardHeader';

  export default {
    name: 'group-transactions',
    components: { CardHeader },
    created() {
      this.getGroupTransactions(subDays(new Date(), 60));
    },
    computed: {
      ...mapGetters({
        transactions: 'groupTransactions',
      }),
    },
    methods: {
      ...mapActions([
        'getGroupTransactions',
      ]),
    },
  };
</script>

<style scoped lang="scss">
  .transactions {
    .card-content {
      height: 100px;
      overflow: auto;
    }
  }
</style>
