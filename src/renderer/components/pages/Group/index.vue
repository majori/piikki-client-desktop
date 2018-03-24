<template>
  <div class="group-page row">
    <div class="col s5">
      <members />
    </div>
    <div class="col s7 row">
      <div class="col s6">
        <group-saldo />
      </div>
      <div class="col s12">
        <transactions />
      </div>
    </div>
  </div>
</template>

<script>
  import Members from './components/Members';
  import GroupSaldo from './components/GroupSaldo';
  import Transactions from './components/Transactions';

  export default {
    name: 'group-page',
    components: { Members, GroupSaldo, Transactions },
  };
</script>

<style scoped lang="scss">
  .group-page.row {
    margin-bottom: 0;
  }

  .group-page /deep/ {
    .members .table {
      max-height: 80vh;
    }

    .transactions .table {
      max-height: 50vh;
    }
  }
</style>
