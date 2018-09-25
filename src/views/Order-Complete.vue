<template>
  <section class="order-complete">
    <header class="container">
      <div class="row">
        <h5 class="col-5 mt-2">
          <strong>2017</strong> / NOVEMBRO
          {{ date }}
        </h5>
        <div class="calendar col-7 form-group">
          <v-dialog
            ref="dialog"
            v-model="modal"
            :return-value.sync="date"
            lazy
            full-width
            width="290px"
          >
            <v-text-field
              slot="activator"
              v-model="date"
              label="Filtrar por mês"
              append-outer-icon="event"
              readonly
            ></v-text-field>
            <v-date-picker color="green accent-3" v-model="date" type="month" scrollable>
              <v-btn flat color="green accent-3" @click="modal = false">Cancel</v-btn>
              <v-btn flat color="green accent-3" @click="$refs.dialog.save(date)">OK</v-btn>
            </v-date-picker>
          </v-dialog>
        </div>
      </div>
    </header>
    <main class="container">
      <router-link to="/order/complete/vote">
        <div class="card card-image card-md mb-3" style="background-image: url(//picsum.photos/310/135)">
          <span class="order-complete-info">
            <h4>Serviço de reforma</h4>
            <v-rating small
              :dense="true"
              :readonly="true"
              color="green accent-3"
              background-color="green accent-3"
              v-model="rating"></v-rating>
          </span>
        </div>
      </router-link>
    </main>
  </section>
</template>

<script>
export default {
  name: 'order-complete',
  data: function () {
    return {
      title: 'Pedidos Concluídos',
      rating: 4,
      date: null,
      menu: false,
      modal: false
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
