<template>
  <div class="navigation">
    <div class="logo">
      <img src="~@/assets/logo.png" />
    </div>
    <hr class="splitter" />
    <div class="link" v-for="link in links" :key="link.name">
      <div>
        <i :class="['fa', `fa-${link.icon}`]" aria-hidden="true"/>
      </div>
      <div>
        {{ link.name }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        links: [
          { name: 'Me', icon: 'user-circle-o' },
          { name: 'Group', icon: 'users' },
          { name: 'Graphs', icon: 'pie-chart' },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped>
  .navigation {
    text-align: center;
    height: 100vh;
    box-shadow: 0 0 15px #c1c1c1;
  }

  .logo {
    padding-top: 10px;
    & > img {
      width: 70%;
    }
  }

  .splitter {
    width: 90%;
    border-top: 1px solid #c1c1c1;
    margin-bottom: 0;
  }

  .link {
    padding: 10px 0;
    border-bottom: 1px solid #c1c1c1;
    font-size: 1.2vw;
    cursor: pointer;

    i.fa {
      color: #225fc6;
      font-size: 4vw;
    }

    &:hover {
      color: white;
      
      i.fa {
        color: white;
      }
      
      background: #225fc6;
    }
  }

</style>
