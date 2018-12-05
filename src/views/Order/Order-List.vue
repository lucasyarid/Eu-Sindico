<template>
  <section class="order-list">
    <v-container py-0>
      <v-layout row>
        <v-flex>
          <v-text-field
            label="Buscar pedido"
            prepend-inner-icon="search"
            v-model="search"
          ></v-text-field>
        </v-flex>
        <v-flex>
          <v-dialog
            ref="dialog"
            v-model="modal"
            :return-value.sync="date"
            lazy
            full-width
            width="290px"
          >
            <v-icon class="pt-3" color="black" slot="activator">arrow_drop_down</v-icon>
            <v-icon color="black" slot="activator">event</v-icon>
            <v-date-picker color="accent" v-model="date" type="month" scrollable>
              <v-btn flat color="accent" @click="resetDate">Resetar</v-btn>
              <v-btn flat color="accent" @click="$refs.dialog.save(date)">OK</v-btn>
            </v-date-picker>
          </v-dialog>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container scrollable tab>
      <h6 v-if="date" class="mb-3">
        <strong>{{ date | year }}</strong> / {{ date | month | uppercase }}
      </h6>

      <template v-for="order in statusOrder">
        <card-width
          :show-stars="currentPage === 'order-complete'"
          :key="order.id"
          :to="goToPath + order.id"
          :background-image="backgroundImage(order)"
          :name="order.type.name"
          :title="order.title"
          :stars="order.rate.stars"/>
      </template>

    </v-container>
  </section>
</template>

<script>
import axios from '@/axios-auth'
import CardWidth from '@/components/List/Card-Width.vue'

export default {
  name: 'order-list',
  components: {
    CardWidth
  },
  data: function () {
    return {
      currentPage: '',
      goToPath: '',
      title: 'Pedidos Concluídos',
      rating: 4,
      orders: [],
      date: '',
      search: '',
      menu: false,
      modal: false
    }
  },
  mounted () {
    this.getPage()
    this.setName()
    this.getOrders()
  },
  watch: {
    '$route.name' () {
      this.getPage()
      this.setName()
    }
  },
  methods: {
    getPage () {
      this.currentPage = this.$route.name
      if (this.currentPage === 'timeline') {
        this.title = 'Pedidos em andamento'
        this.goToPath = '/timeline/'
      } else if (this.currentPage === 'order-complete') {
        this.goToPath = '/order/complete/'
      }
    },
    setName () {
      this.$emit('getTitle', this.title)
    },
    compareDates (firstDate, secondDate) {
      var firstDateYear = firstDate.getYear()
      var secondDateYear = secondDate.getYear()
      var firstDateMonth = firstDate.getMonth()
      var secondDateMonth = secondDate.getMonth()

      if (firstDateYear === secondDateYear) {
        if (firstDateMonth === secondDateMonth) {
          return true
        }
      }
      return false
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
    },
    resetDate () {
      this.modal = false
      this.date = null
      this.$refs.dialog.save(this.date)
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
    filterOrder (order) {
      if (this.date) {
        var dateFilter = new Date(this.date)
        var orderDate = new Date(order.budgetDeadline.substring(0, 7))
        if (this.compareDates(orderDate, dateFilter)) {
          return order.title.match(this.search)
        }
      } else {
        return order.title.toLowerCase().match(this.search.toLowerCase()) ||
        order.type.name.toLowerCase().match(this.search.toLowerCase())
      }
    }
  },
  computed: {
    statusOrder () {
      return this.orders.filter((order) => {
        if (this.currentPage === 'timeline') {
          if (order.currentStatus !== 'Concluido' || order.currentStatus !== 'Cancelada') {
            return this.filterOrder(order)
          }
        } else if (this.currentPage === 'order-complete') {
          if (order.currentStatus === 'Concluido') {
            return this.filterOrder(order)
          }
        }
      })
    }
  },
  filters: {
    month (value) {
      const date = new Date(value)
      date.setDate(date.getDate() + 1)
      return date.toLocaleString(['pt-BR'], { month: 'long' })
    },
    year (value) {
      const date = new Date(value)
      return date.toLocaleString(['pt-BR'], { year: 'numeric' })
    },
    uppercase (value) {
      return value.toUpperCase()
    }
  }
}
</script>
