<template>
  <div class="card">
    <div class="card-content center-align">
      <h2>Saldo</h2>
      <h1 class="saldo">{{ realSaldo ? saldo : '-' }}</h1>
      <div>
        <button @click="removeSaldo" class="btn-floating btn-large waves-effect waves-light">
          <i class="fa fa-minus" aria-hidden="true"></i>
        </button>
        <button @click="addSaldo" class="btn-floating btn-large waves-effect waves-light">
          <i class="fa fa-plus" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import * as _ from 'lodash';
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'saldo',
    props: ['username'],
    data() {
      return {
        deltaSaldo: 0,
      };
    },
    created() {
      if (!this.realSaldo) {
        this.getSaldo(this.username);
      }
    },
    computed: {
      saldo() {
        return this.realSaldo + this.deltaSaldo;
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

      saldoChanged: _.debounce(async function () {
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
