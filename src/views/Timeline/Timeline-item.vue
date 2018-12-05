<template>
  <section class="timeline">
    <Gallery info
      :images="images"
      :order="order"
      :name="order.type.name"
      :title="order.title"/>
    <main class="scrollable gallery">
      <v-container class="timeline-progress">
        <h6 class="mb-3">LINHA DO TEMPO</h6>
        <template v-for="(history, key) in order.statusHistory">
          <timeline-status
            :key="key"
            :date="history.date"
            :icon="key"
            :title="history.status.name"
            :status="true"/>
        </template>
        <div class="list-line"></div>
      </v-container>
    </main>
  </section>
</template>

<script>
import axios from '@/axios-auth'
import Gallery from '@/components/Gallery.vue'
import TimelineStatus from '@/components/Timeline/Timeline-Status.vue'

export default {
  name: 'TimelineItem',
  components: {
    Gallery,
    TimelineStatus
  },
  data: function () {
    return {
      title: 'Pedido em Andamento',
      menuBack: true,
      order: {
        id: 0,
        title: '',
        attachments: [],
        type: {
          name: ''
        },
        options: [{
          id: 0,
          companyName: '',
          companyPhone: '',
          companyWebSite: '',
          estimatedDays: 0,
          optionAttachments: [],
          price: 0,
          voted: true
        }],
        statusHistory: []
      },
      timeline: [
        { id: 1, date: '10/08/2018', title: 'Pedido Criado' },
        { id: 2, date: '10/08/2018', title: 'Pedido Aprovado' },
        { id: 3, date: '10/08/2018', title: 'Orçamento Aprovado' },
        { id: 4, date: '10/08/2018', title: 'Início do serviço' },
        { id: 5, date: '10/08/2018', title: 'Pedido Criado' }
      ]
    }
  },
  computed: {
    images () {
      return this.order.attachments.filter((attachment) => {
        if (attachment.fileType === 'jpg' || attachment.fileType === 'jpeg' || attachment.fileType === 'png') {
          return attachment
        }
      })
    }
  },
  methods: {
    setName () {
      this.$emit('getTitle', this.title)
    },
    setMenu () {
      this.$emit('getMenu', this.menuBack)
    },
    getOrder () {
      axios
        .get('/orders/' + this.$route.params.orderId)
        .then(res => {
          this.order = res.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  mounted () {
    this.setName()
    this.setMenu()
    this.getOrder()
  },
  destroyed () {
    this.menuBack = false
    this.setMenu()
  }
}
</script>
