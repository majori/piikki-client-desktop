<template>
  <div class="group-page row">
    <div class="col s5">
      <members />
    </div>
    <div class="col s5 row">
      <div class="col s12">
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
  .group-page /deep/ {
    .members .table {
      max-height: 80vh;
    }

    .transactions .table {
      max-height: 20vh;
    }
  }
</style>
