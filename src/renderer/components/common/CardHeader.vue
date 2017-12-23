<template>
  <div class="card-header">
    <h3>{{ title }}</h3>
    <hr />
  </div>
</template>

<script>
  export default {
    name: 'card-header',
    props: ['title'],
  };
</script>

<style lang="scss" scoped>
  .card-header {
    hr {
      width: 90%;
    }

    h3 {
      margin-top: 0;
      margin-bottom: 10px;
    }
  }
</style>
