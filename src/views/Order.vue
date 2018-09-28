<template>
  <section class="order">
    <v-tabs centered icons-and-text
      slot="extension"
      v-model="tabs"
      slider-color="accent">
      <v-tab href="#new">
        <v-badge color="accent">
          <span slot="badge">2</span>
          <span>
            Novos
          </span>
        </v-badge>
      </v-tab>
      <v-tab href="#accepted">
        Aceitos
      </v-tab>
      <v-tab href="#denied">
          Negados
      </v-tab>
    </v-tabs>
    <main class="mt-3">

      <template v-for="order in orders">
        <router-link
          to="order/review"
          v-if="tabs == order.status"
          :key="order.length"
          :style="{ backgroundImage: 'url(' + order.thumbnail + ')' }"
          class="order-item">
          <v-layout class="order-item-info">
            <v-flex xs9 pt-4>
              <h5>{{order.type}}</h5>
              <h4 class="font-weight-bold pt-1"> {{order.name}}</h4>
            </v-flex>
            <v-flex xs3>
              <v-progress-circular
                :rotate="-90"
                :size="80"
                :width="4"
                :value="getDatePercentage(order.dateCreated,order.deadline)"
                color="accent">
                <div class="timer">
                  <div class="timer-content">
                    <small class="text-xs-center">Expira em</small>
                    <time class="text-xs-center">{{ getDaysLeft(order.deadline) }} dias</time>
                  </div>
                </div>
              </v-progress-circular>
            </v-flex>
          </v-layout>
        </router-link>
      </template>

    </main>
  </section>
</template>

<script>
import { dateCalc } from '../mixins/dateCalc'

export default {
  name: 'order',
  mixins: [dateCalc],
  data: function () {
    return {
      title: 'Pedidos',
      tabs: null,
      orders: {
        order1: {
          type: 'Compra de',
          status: 'new',
          name: 'Guarda-sóis',
          dateCreated: 1537239600000,
          deadline: 1538276400000,
          thumbnail: '//picsum.photos/300/400'
        },
        order2: {
          type: 'Serviço',
          status: 'accepted',
          name: 'Pintar Paredes',
          dateCreated: 1535425200000,
          deadline: 1542247200000,
          thumbnail: '//picsum.photos/300/400'
        },
        order3: {
          type: 'Serviço',
          status: 'new',
          name: 'Trocar Janelas',
          dateCreated: 1536721200000,
          deadline: 1539313200000,
          thumbnail: '//picsum.photos/300/400'
        },
        order4: {
          type: 'Compra de',
          status: 'denied',
          name: 'Janelas',
          dateCreated: 1535857200000,
          deadline: 1539512200000,
          thumbnail: '//picsum.photos/300/400'
        }
      }
    }
  },
  methods: {
    setName () {
      this.$emit('getTitle', this.title)
    }
  },
  mounted () {
    this.setName()
  }
}
</script>
