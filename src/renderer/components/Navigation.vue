<template>
  <div class="navigation">
    <div class="logo">
      <router-link to="/user">
        <img src="~@/assets/logo.png" />
      </router-link>
    </div>
    <hr class="splitter" />
    <router-link class="link" v-for="link in links" :to="{ name: link.name }" :key="link.label">
      <div>
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
          { label: 'ME', icon: 'user-circle-o', name: 'user-page' },
          { label: 'GROUP', icon: 'users', name: 'group-page' },
          { label: 'SETTINGS', icon: 'cogs', name: 'settings-page' },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped>
  .navigation {
    background: #4b29c5;
    position: fixed;
    top: 0;
    left: 0;
    text-align: center;
    height: 100vh;
  }

  .logo {
    padding-top: 10px;

    img {
      width: 80%;
    }
  }

  .splitter {
    width: 100%;
    border-top: 1px solid white;
    margin-bottom: 0;
  }

  .link {
    font-size: 1.4vw;
    width: 100%;
    cursor: pointer;

    & > div {
      padding: 10px 0;
    }

    span {
      font-weight: bold;
      color: white;
    }

    i.fa {
      color: white;
      font-size: 4vw;
      margin-bottom: 2px;
    }

    &:hover > div {
      background: #a293d6;
    }

    &.router-link-active {
      span, i.fa {
        color: #4b29c5;
      }

      & > div {
        background: white;
      }
    }
  }

</style>
