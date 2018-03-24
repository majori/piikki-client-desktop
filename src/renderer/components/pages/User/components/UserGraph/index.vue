<template>
  <line-chart :chart-data="chartData"></line-chart>
</template>


<script>
  import { mapActions, mapGetters } from 'vuex';
  import { subDays } from 'date-fns';
  import LineChart from './LineChart';

  export default {
    components: { LineChart },
    data() {
      return {
        daysSince: 90,
      };
    },
    created() {
      this.getUserTransactions(subDays(new Date(), this.daysSince));
    },
    computed: {
      ...mapGetters({
        transactions: 'userTransactions',
      }),
      chartData() {
        return {
          datasets: [
            {
              fill: false,
              steppedLine: 'after',
              borderColor: '#4b29c5', // TODO Get color from style variable
              data: this.transactions.map(trx => ({ x: trx.timestamp, y: trx.saldo })),
            },
          ],
        };
      },
    },
    methods: {
      ...mapActions([
        'getUserTransactions',
      ]),
    },
  };
</script>
