<template>
  <card class="transactions" title="Latest transactions">
    <div slot="actions">
      <button class="btn waves-effect waves-light" @click="getTransactions(1)">Day</button>
      <button class="btn waves-effect waves-light" @click="getTransactions(7)">Week</button>
      <button class="btn waves-effect waves-light" @click="getTransactions(30)">Month</button>
    </div>
    <div class="table">
      <table>
        <tr v-for="trx in transactions" :key="`${trx.username}:${trx.groupName}:${trx.timestamp}`">
          <td>{{ trx.timestamp }}</td>
          <td>{{ trx.username }}</td>
          <td>{{ trx.diff }}</td>
        </tr>
        <tr v-if="transactions.length === 0">
          <td class="center-align" colspan="3">No transactions</td>
        </tr>
      </table>
    </div>
  </card>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import { subDays } from 'date-fns';
  import Card from '@/components/common/Card';

  export default {
    name: 'group-transactions',
    components: { Card },
    created() {
      // On mount fetch transactions since last week
      this.getTransactions(7);
    },
    computed: {
      ...mapGetters({
        transactions: 'groupTransactions',
      }),
    },
    methods: {
      getTransactions(daysSince) {
        this.getGroupTransactions(subDays(new Date(), daysSince));
      },
      ...mapActions([
        'getGroupTransactions',
      ]),
    },
  };
</script>

<style scoped lang="scss">
  .transactions .card-content .table {
    overflow: auto;
  }
</style>
