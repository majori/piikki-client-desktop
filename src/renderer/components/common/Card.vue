<template>
  <div class="card center-align">
    <div class="card-content">
      <div class="card-header" v-if="title">
        <h3>{{ title }}</h3>
        <hr />
      </div>
      <div class="card-actions">
        <slot name="actions" />
      </div>
      <slot name="content"/>
      <slot />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'card',
    props: ['title'],
  };
</script>

<style scoped lang="scss">
  .card-header {
    hr {
      width: 90%;
    }

    h3 {
      margin-top: 0;
      margin-bottom: 10px;
    }
  }

  .card-actions {
    button {
      margin: 0 10px;
    }
  }
</style>
