<template>
  <div class="group-page row">
    <div class="col s5">
      <members></members>
    </div>
    <div class="col s7 row">
      <div class="col s12">
        <group-saldo></group-saldo>
      </div>
      <div class="col s12">
        <transactions></transactions>
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
  .group-page /deep/ .members .card-content {
    max-height: 100%;
  }
</style>
