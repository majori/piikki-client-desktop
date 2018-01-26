<template>
  <div class="navigation">
    <div class="logo">
      <router-link to="/user">
        <img src="~@/assets/logo.png" />
      </router-link>
    </div>
    <hr class="splitter" />
    <router-link class="link" v-for="link in links" :to="{ name: link.name }" :key="link.label">
      <div class="link-wrapper" >
        <i :class="['fa', `fa-${link.icon}`]" aria-hidden="true"/>
        <div>
          <span>{{ link.label }}</span>
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
          { label: 'Me', icon: 'user-circle-o', name: 'user-page' },
          { label: 'Group', icon: 'users', name: 'group-page' },
          { label: 'Graphs', icon: 'pie-chart', name: 'graphs-page' },
          { label: 'Settings', icon: 'cogs', name: 'settings-page' },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped>
  .navigation {
    background: #fbfbfb;
    position: fixed;
    top: 0;
    left: 0;
    text-align: center;
    height: 100vh;
    box-shadow: 0 0 15px #ccc;
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
