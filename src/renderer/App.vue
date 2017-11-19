<template>
  <div id="app" class="row">
    <div class="col s1">
      <navigation></navigation>
    </div>
    <div class="col s11">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import Navigation from './components/Navigation';

  export default {
    name: 'piikki',
    components: { Navigation },
    created() {
      // TODO: Check token from localstorage
      this.setToken('restricted_token');
    },
    methods: {
      ...mapActions([
        'setToken',
      ]),
    },
  };
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
  @import "./variables";

  // Materialize
  @import "~materialize-css/sass/materialize.scss";

  // Font awesome
  $fa-font-path: "~font-awesome/fonts";
  @import "~font-awesome/scss/font-awesome.scss";

  body { font-family: 'Source Sans Pro', sans-serif; }

  #app {
    background:
      radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
    );

    margin: 0;
  }

  #app > .col {
    padding: 0;
  }
</style>
