<template>
  <div class="members card center-align">
    <div class="card-content">
      <card-header title="Members"></card-header>
      <table>
        <tr v-for="member in members" :key="member.username">
          <td v-if="member.saldo >= 0" :style="{ textAlign: 'right', borderRight: '1px solid grey' }">
            {{ member.username }}
          </td>
          <td class="saldo-wrapper">
            <div :class="{ 'indicator-wrapper': true, negative: member.saldo < 0 }">
              <div class="indicator" :style="{ width: `${(member.saldo * 100) / (member.saldo < 0 ? saldos.min : saldos.max)}%` }">
              </div>
              <span class="saldo">{{ member.saldo }}</span>
            </div>
          </td>
          <td v-if="member.saldo < 0" :style="{ textAlign: 'left', borderLeft: '1px solid grey' }">
            {{ member.username }}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import * as _ from 'lodash';
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
      saldos() {
        const saldos = _.map(this.members, 'saldo');
        return {
          max: _.max(saldos),
          min: _.min(saldos),
        };
      },
    },
    methods: {
      ...mapActions([
        'getMembers',
      ]),
    },
  };
</script>

<style scoped lang="scss">
  $border-radius: 10px;
  $indicator-height: 28px;

  .members {
    hr {
      width: 90%;
    }

    max-height: 96vh;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .saldo-wrapper {
    padding: 0;
  }

  .indicator-wrapper {
    position: relative;
  }

  .saldo {
    position: absolute;
    top: $indicator-height / 2;
    left: 22px;
    transform: translate(-50%, -50%);
    padding: 0 5px;
    border-radius: 10px;
    border: 1px solid lightgray;
    background: #efefef;
    font-weight: bold;
  }

  .indicator {
    background: #209c20;
    height: $indicator-height;
    border-radius: 0 $border-radius $border-radius 0;
  }

  .indicator-wrapper.negative .indicator {
    float: right;
    background: #f15252;
    border-radius: $border-radius 0 0 $border-radius;
  }

  .indicator-wrapper.negative .saldo {
    left: initial;
    right: 0;
  }
</style>
