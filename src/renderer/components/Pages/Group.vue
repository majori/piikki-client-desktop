<template>
  <div class="row">
    <div class="col s4">
      <div class="members card center-align">
        <div class="card-content">
          <ul>
            <li v-for="member in members" :key="member.username">
              <div class="row">
                <div class="col s6">
                  {{ member.username }}
                </div>
                <div class="col s6">
                   {{ member.saldo}}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'group-page',
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
    max-height: 96vh ;
    overflow-y: auto;
    overflow-x: hidden;

    .card-content {
      padding: 0;
    }
  }
</style>
