<template>
  <card class="members" title="Members">
    <div slot="actions">
      <button class="btn-floating waves-effect waves-light" @click="setMemberOrder('username')">
        <i :class="`fa fa-sort-alpha-${order.username.asc ? 'asc' : 'desc'}`" aria-hidden="true" />
      </button>
      <button class="btn-floating waves-effect waves-light" @click="setMemberOrder('saldo')">
        <i :class="`fa fa-sort-numeric-${order.saldo.asc ? 'asc' : 'desc'}`" aria-hidden="true" />
      </button>
    </div>
    <div class="table">
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
  </card>
</template>

<script>
  import * as _ from 'lodash';
  import { mapGetters, mapActions } from 'vuex';
  import Card from '@/components/common/Card';

  export default {
    name: 'group-members',
    components: { Card },
    data() {
      return {
        order: {
          sortBy: 'saldo',
          saldo: {
            asc: true,
          },
          username: {
            asc: true,
          },
        },
      };
    },
    created() {
      this.getMembers();
    },
    computed: {
      ...mapGetters([
        'membersBySaldo',
        'membersByUsername',
      ]),
      members() {
        const getter = (this.order.sortBy === 'saldo') ? this.membersBySaldo : this.membersByUsername;
        const dir = this.order[this.order.sortBy].asc ? 'asc' : 'desc';
        return getter(dir);
      },
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
      setMemberOrder(type) {
        if (this.order.sortBy === type) {
          this.order[type].asc = !this.order[type].asc;
        } else {
          this.order.sortBy = type;
        }
      },
    },
  };
</script>

<style scoped lang="scss">
  $border-radius: 10px;
  $indicator-height: 28px;

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

  .table {
    overflow: auto;
  }
</style>
