<template>
  <section class="order">
    <v-tabs centered icons-and-text
      slot="extension"
      v-model="tabs"
      slider-color="accent">
      <v-tab href="#Novo">
        Novos
      </v-tab>
      <v-tab href="#Aceitos">
        Aceitos
      </v-tab>
      <v-tab href="#Cancelada">
        Negados
      </v-tab>
    </v-tabs>
    <main class="mt-3 scrollable tab">
      <template v-for="order in orderByTab">
        <router-link
          v-if="tabs == order.currentStatus"
          :to=" 'order/' + order.id "
          :key="order.length"
          :style="backgroundImage(order)"
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
                :value="getDatePercentage(order.approvalDeadline, order.created)"
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
import { dateCalc } from '@/mixins/dateCalc'
import axios from '@/axios-auth'

export default {
  name: 'order',
  mixins: [dateCalc],
  data: function () {
    return {
      title: 'Pedidos',
      tabs: null,
      orders: [],
      defaultImage: 'background-image: url(//picsum.photos/640/560)'
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
    },
    backgroundImage (order) {
      if (order.attachments && order.attachments.length) {
        for (let i = 0; i < order.attachments.length; i++) {
          const attachment = order.attachments[i]
          if (attachment.fileType === 'jpg' || attachment.fileType === 'jpeg' || attachment.fileType === 'png') {
            return 'background-image: url(' + attachment.url + ')'
          } else {
            return this.defaultImage
          }
        }
      } else {
        return this.defaultImage
      }
    }
  },
  computed: {
    orderByTab () {
      return this.orders.filter((order) => {
        if (order.currentStatus === 'Novo' || order.currentStatus === 'Cancelada') {
          return order
        } else {
          order.currentStatus = 'Aceitos'
          return order
        }
      })
    }
  },
  mounted () {
    this.setName()
    this.getOrders()
  }
}
</script>
