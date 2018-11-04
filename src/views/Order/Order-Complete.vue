<template>
  <section class="order-complete">
    <v-container py-0>
      <v-layout row>
        <v-flex>
          <v-text-field
            label="Buscar pedido"
            prepend-inner-icon="search"
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
              <v-btn flat color="accent" @click="modal = false">Cancel</v-btn>
              <v-btn flat color="accent" @click="$refs.dialog.save(date)">OK</v-btn>
            </v-date-picker>
          </v-dialog>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <h6 class="mb-3"><strong>2017</strong> / NOVEMBRO</h6>
      <router-link to="/order/complete/vote">
        <div class="card card-image card-md mb-3" style="background-image: url(//picsum.photos/310/135)">
          <span class="order-complete-info">
            <h4 class="font-weight-bold">Serviço de reforma</h4>
            <v-rating small
              :dense="true"
              :readonly="true"
              color="accent"
              background-color="accent"
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
