<template>
  <section class="quote">
    <v-tabs centered icons-and-text
      slot="extension"
      v-model="tabs"
      slider-color="accent">
      <v-tab href="#open">
        Em Aberto
      </v-tab>
      <v-tab href="#vote">
        Em Votação
      </v-tab>
    </v-tabs>
    <main class="horizontal-scroll mt-3">

      <template v-for="order in orders">
        <router-link
          v-if="tabs == order.status"
          :key="order.length"
          to="/quote/review"
          class="quote-item card card-image card-lg"
          :style="{ backgroundImage: 'url(' + order.thumbnail + ')' }">
          <div class="quote-item-info">
            <div class="quote-item-title">
              <h5>{{order.type}}</h5>
              <h2 class="font-weight-bold"> {{order.name}}</h2>
            </div>

            <span class="quote-item-reference align-text-top mt-2">
              <v-icon :size="21" color="white">account_circle</v-icon>
              À pedido do Síndico
            </span>

            <div class="footer-button mt-4">
              <v-btn round large dark depressed block outline
                color="white" class="align-left">Mais informações</v-btn>
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
            </div>
          </div>

        </router-link>
      </template>
    </main>
  </section>
</template>

<script>
import { dateCalc } from '@/mixins/dateCalc'

export default {
  name: 'quote',
  mixins: [dateCalc],
  data: function () {
    return {
      title: 'Orçamentos',
      tabs: null,
      orders: {
        order1: {
          type: 'Compra de',
          status: 'open',
          name: 'Guarda-sóis',
          dateCreated: 1537239600000,
          deadline: 1538276400000,
          thumbnail: '//picsum.photos/300/400'
        },
        order2: {
          type: 'Serviço',
          status: 'vote',
          name: 'Pintar Paredes',
          dateCreated: 1535425200000,
          deadline: 1542247200000,
          thumbnail: '//picsum.photos/300/400'
        },
        order3: {
          type: 'Serviço',
          status: 'open',
          name: 'Trocar Janelas',
          dateCreated: 1536721200000,
          deadline: 1539313200000,
          thumbnail: '//picsum.photos/300/400'
        },
        order4: {
          type: 'Compra de',
          status: 'vote',
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
