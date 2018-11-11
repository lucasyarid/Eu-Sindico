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

          :key="order.length"
          :to="'/quote/review/' + order.id"
          class="quote-item card card-image card-lg"
          :style="{ backgroundImage: 'url(' + order.thumbnail + ')' }">
          <div class="quote-item-info">
            <div class="quote-item-title">
              <h5>{{order.type.name}}</h5>
              <h2 class="font-weight-bold"> {{order.title}}</h2>
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
                :value="getDatePercentage(order.approvalDeadline, order.created)"
                color="accent">
                <div class="timer">
                  <div class="timer-content">
                    <small class="text-xs-center">Expira em</small>
                    <time class="text-xs-center">{{ getDaysLeft(order.approvalDeadline) }} dias</time>
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
import axios from '@/axios-auth'

export default {
  name: 'quote',
  mixins: [dateCalc],
  data: function () {
    return {
      title: 'Orçamentos',
      tabs: null,
      orders: {}
    }
  },
  methods: {
    setName () {
      this.$emit('getTitle', this.title)
    },
    getOrders () {
      axios
        .get('/orders')
        .then(res => {
          this.orders = res.data
          console.log(res.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  mounted () {
    this.setName()
    this.getOrders()
  }
}
</script>
