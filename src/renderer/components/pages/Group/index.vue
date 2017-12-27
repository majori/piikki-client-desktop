<template>
  <div class="row">
    <div class="col s5">
      <members></members>
    </div>
    <div class="col s4">
      <group-saldo></group-saldo>
    </div>
  </div>
</template>

<script>
  import Members from './components/Members';
  import GroupSaldo from './components/GroupSaldo';

  export default {
    name: 'group-page',
    components: { Members, GroupSaldo },
  };
</script>

<style scoped lang="scss">

</style>
