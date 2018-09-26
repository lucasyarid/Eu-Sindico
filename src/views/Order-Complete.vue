<template>
  <section class="order-complete">
    <v-container>
      <v-layout row px-3>
        <v-flex pt-4>
          <h5><strong>2017</strong> / NOVEMBRO</h5>
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
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
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
    </v-container>
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
