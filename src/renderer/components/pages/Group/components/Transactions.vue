<template>
  <card class="transactions" title="Latest transactions">
    <div slot="actions">
      <button class="btn waves-effect waves-light">
        Day
      </button>
      <button class="btn waves-effect waves-light">
        Week
      </button>
      <button class="btn waves-effect waves-light">
        Month
      </button>
    </div>
    <div class="table">
      <table>
        <tr v-for="trx in transactions" :key="`${trx.username}:${trx.groupName}:${trx.timestamp}`">
          <td>{{ trx.timestamp }}</td>
          <td>{{ trx.username }}</td>
          <td>{{ trx.diff }}</td>
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
      this.getGroupTransactions(subDays(new Date(), 160));
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
  .transactions .card-content .table {
    overflow: auto;
  }
</style>
