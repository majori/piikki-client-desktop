<template>
  <div id="app">
    <token-setter>
      <navigation id="navigation"/>
      <div id="content">
        <router-view />
      </div>
      <modal/>
    </token-setter>
  </div>
</template>

<script>
  import Navigation from './components/Navigation';
  import TokenSetter from './components/wrappers/TokenSetter';
  import Modal from './components/modals';

  export default {
    name: 'piikki',
    components: { Navigation, TokenSetter, Modal },
  };
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
  @import url('https://fonts.googleapis.com/css?family=Montserrat');
  @import "./variables";
  @import "./global";

  // Materialize
  @import "~materialize-css/sass/materialize.scss";

  // Font awesome
  $fa-font-path: "~font-awesome/fonts";
  @import "~font-awesome/scss/font-awesome.scss";

  $navigation-width: 10vw;

  #navigation {
    width: $navigation-width;
  }

  #content {
    margin-left: $navigation-width;
    margin-bottom: 0;
  }

</style>
