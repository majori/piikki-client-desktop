<template>
  <div class="members card center-align">
    <div class="card-content">
      <card-header title="Members"></card-header>
      <ul>
        <li v-for="member in members" :key="member.username">
          <div class="row">
            <div class="col s6">
              {{ member.username }}
            </div>
            <div class="col s6">
              {{ member.saldo }}
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import CardHeader from '@/components/common/CardHeader';

  export default {
    name: 'group-members',
    components: { CardHeader },
    created() {
      this.getMembers();
    },
    computed: {
      ...mapGetters({
        members: 'membersBySaldo',
      }),
    },
    methods: {
      ...mapActions([
        'getMembers',
      ]),
    },
  };
</script>

<style scoped lang="scss">
  .members {
    hr {
      width: 90%;
    }

    max-height: 96vh ;
    overflow-y: auto;
    overflow-x: hidden;
  }
</style>
