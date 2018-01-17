<template>
  <card title="Saldo">
    <h1 class="saldo">{{ saldoExists ? saldo : '-' }}</h1>
    <div>
      <button @click="removeSaldo" :disabled="!saldoExists" class="btn-floating btn-large waves-effect waves-light">
        <i class="fa fa-minus" aria-hidden="true"></i>
      </button>
      <button @click="addSaldo" :disabled="!saldoExists" class="btn-floating btn-large waves-effect waves-light">
        <i class="fa fa-plus" aria-hidden="true"></i>
      </button>
    </div>
  </card>
</template>

<script>
  import * as _ from 'lodash';
  import { mapActions, mapGetters } from 'vuex';
  import Card from '@/components/common/Card';

  export default {
    name: 'user-saldo',
    props: ['username'],
    components: { Card },
    data() {
      return {
        deltaSaldo: 0,
      };
    },
    created() {
      this.getSaldo(this.username);
    },
    computed: {
      saldo() {
        return (this.realSaldo || 0) + this.deltaSaldo;
      },
      saldoExists() {
        return this.realSaldo !== null;
      },
      ...mapGetters({
        realSaldo: 'saldo',
      }),
    },
    methods: {
      addSaldo() {
        this.deltaSaldo = this.deltaSaldo + 1;
        this.saldoChanged();
      },

      removeSaldo() {
        this.deltaSaldo = this.deltaSaldo - 1;
        this.saldoChanged();
      },

      saldoChanged: _.debounce(async function () { // eslint-disable-line
        if (!this.username || this.deltaSaldo === 0) {
          return;
        }
        await this.makeTransaction({
          username: this.username,
          amount: this.deltaSaldo,
        });

        this.deltaSaldo = 0;
      }, 1000),

      ...mapActions([
        'getSaldo',
        'makeTransaction',
      ]),
    },
    watch: {
      // If username changes update the saldo
      username(val) {
        this.getSaldo(val);
      },
    },
  };
</script>

<style lang="scss" scoped>
  h2 {
    margin: 0;
  }

  button {
    margin: 0 20px;
  }

  .saldo {
    font-family: 'Montserrat';
    margin: 20px 0;
  }
</style>
