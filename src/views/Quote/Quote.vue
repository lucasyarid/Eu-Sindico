<template>
  <section class="quote">
    <v-tabs centered icons-and-text
      slot="extension"
      v-model="tabs"
      slider-color="accent">
      <v-tab href="#Em Orçamento">
        Em Aberto
      </v-tab>
      <v-tab href="#Em Votação">
        Em Votação
      </v-tab>
    </v-tabs>
    <main class="horizontal-scroll mt-3">

      <template v-for="order in orders">
        <card-height
          v-if="tabs == order.currentStatus"
          :key="order.id"
          :to="'/order/' + order.id +'/quote/'"
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
import CardHeight from '@/components/List/Card-Height.vue'

export default {
  name: 'quote',
  components: {
    CardHeight
  },
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
  mounted () {
    this.setName()
    this.getOrders()
  }
}
</script>
