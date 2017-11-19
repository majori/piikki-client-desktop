<template>
  <div class="navigation">
    <div class="logo">
      <router-link to="/login">
        <img src="~@/assets/logo.png" />
      </router-link>
    </div>
    <hr class="splitter" />
    <router-link class="link" v-for="link in links" :to="link.path" :key="link.name">
      <div class="link-wrapper" >
        <i :class="['fa', `fa-${link.icon}`]" aria-hidden="true"/>
        <div>
          <span>{{ link.name }}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'navigation',
    data() {
      return {
        links: [
          { name: 'Me', icon: 'user-circle-o', path: '/user' },
          { name: 'Group', icon: 'users', path: '/group' },
          { name: 'Graphs', icon: 'pie-chart', path: '/graphs' },
          { name: 'Settings', icon: 'cogs', path: '/settings' },
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

    img {
      width: 70%;
    }
  }

  .splitter {
    width: 90%;
    border-top: 1px solid #c1c1c1;
    margin-bottom: 0;
  }

  .link {
    border-bottom: 1px solid #c1c1c1;
    font-size: 1.2vw;
    cursor: pointer;

    & > div {
      padding: 10px 0;
    }

    span {
      color: black;
    }

    i.fa {
      color: #225fc6;
      font-size: 4vw;
    }

    &:hover > div {
      background: #cccccc;
    }

    &.router-link-active {
      span {
        color: white;
      }

      i.fa {
        color: white;
      }

      & > div {
        background: #225fc6;
      }
    }
  }

</style>
