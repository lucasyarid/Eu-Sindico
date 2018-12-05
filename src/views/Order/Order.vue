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
        <full-width
          v-if="tabs == order.currentStatus"
          :key="order.id"
          :to="'order/' + order.id"
          :background-image="backgroundImage(order)"
          :name="order.type.name"
          :title="order.title"
          :date1="order.approvalDeadline"
          :date2="order.created"/>
      </template>
    </main>
  </section>
</template>

<script>
import axios from '@/axios-auth'
import FullWidth from '@/components/List/Full-Width.vue'

export default {
  name: 'order',
  components: {
    FullWidth
  },
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
    },
    getOrders () {
      axios
        .get('/orders')
        .then(res => {
          this.orders = res.data
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
          }
        }
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
