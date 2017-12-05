<template>
  <div id="app">
    <token-setter class="row">
      <div class="col s1">
        <navigation></navigation>
      </div>
      <div id="content" class="col s11">
        <router-view></router-view>
      </div>
    </token-setter>
  </div>
</template>

<script>
  import Navigation from './components/Navigation';
  import TokenSetter from './components/wrappers/TokenSetter';

  export default {
    name: 'piikki',
    components: { Navigation, TokenSetter },
  };
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
  @import url('https://fonts.googleapis.com/css?family=Montserrat');
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

    & > .row {
      margin: 0;
    }

    & > .row > .col {
      padding: 0;
    }
  }

  #content > * {
    margin: 0;
  }


</style>
