<template>
  <section class="order-complete">
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

      <template v-for="order in filteredOrders">
        <router-link
          :key="order.length"
          :to="'/order/complete/' + order.id">
          <div class="card card-image card-md mb-3" style="background-image: url(//picsum.photos/310/135)">
            <span class="order-complete-info">
              <h4 class="font-weight-bold">{{order.type.name}} {{order.title}}</h4>
              <v-rating small
                :dense="true"
                :readonly="true"
                color="accent"
                background-color="accent"
                v-model="rating"></v-rating>
            </span>
          </div>
        </router-link>
      </template>

    </v-container>
  </section>
</template>

<script>
import axios from '@/axios-auth'

export default {
  name: 'order-complete',
  data: function () {
    return {
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
    this.setName()
    this.getOrders()
  },
  methods: {
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
          console.log(res.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  computed: {
    filteredOrders () {
      return this.orders.filter((order) => {
        if (order.currentStatus === 'Concluido') {
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
