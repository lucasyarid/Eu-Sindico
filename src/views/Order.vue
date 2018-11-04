<template>
  <section class="order">
    <v-tabs centered icons-and-text
      slot="extension"
      v-model="tabs"
      slider-color="accent">
      <v-tab href="#new">
        Novos
      </v-tab>
      <v-tab href="#1">
        Aceitos
      </v-tab>
      <v-tab href="#denied">
        Negados
      </v-tab>
    </v-tabs>
    <main class="mt-3 scrollable tab">
      <template v-for="order in orders">
        <router-link
          :to=" 'order/' + order.id "
          :key="order.length"
          :style="{ backgroundImage: 'url(//picsum.photos/300/400)' }"
          class="order-item">
          <v-layout class="order-item-info">
            <v-flex xs9 pt-4>
              <h5>{{order.type.name}}</h5>
              <h4 class="font-weight-bold pt-1"> {{order.title}}</h4>
            </v-flex>
            <v-flex xs3>
              <v-progress-circular
                :rotate="-90"
                :size="80"
                :width="4"
                :value="getDatePercentage(order.dateCreated,order.approvalDeadline)"
                color="accent">
                <div class="timer">
                  <div class="timer-content">
                    <small class="text-xs-center">Expira em</small>
                    <time class="text-xs-center">{{ getDaysLeft(order.approvalDeadline) }} dias</time>
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
import axios from '../axios-auth'

export default {
  name: 'order',
  mixins: [dateCalc],
  data: function () {
    return {
      title: 'Pedidos',
      tabs: null,
      orders: []
    }
  },
  methods: {
    setName () {
      this.$emit('getTitle', this.title)
    }
  },
  computed: {
    apiToken () {
      return this.$store.state.auth.apiToken
    }
  },
  mounted () {
    axios
      .get('/orders')
      .then(res => {
        this.orders = res.data
      })
      .catch(error => {
        console.log(error)
      })
    this.setName()
  }
}
</script>
