<template>
  <div class="container">
    <div class="step2">
      <div class="form-row">
        <div class="col mb-4 mt-1">
          <label for="company-name" class="mb-0">O que deve ser comprado?</label>
          <input type="text" class="form-control" id="company-name" v-model="order.name" placeholder="Exemplo: guarda-sóis">
        </div>
      </div>
      <div class="form-row">
        <div class="col mb-4 mt-1">
          <label for="company-phone" class="mb-0">Explique os motivos</label>
          <textarea type="text" class="form-control" id="company-phone" v-model="order.details" placeholder="Exemplo: Nossos guarda-sóis estão todos furados e não podem ser utilizados. Uma pena para todos!"></textarea>
        </div>
      </div>
      <div class="form-row">
        <div class="col mb-4 mt-1">
          <label for="order-time" class="mb-0">Quantidade</label>
          <input type="number" class="form-control" id="order-time" v-model.number="order.quantity" required>
        </div>
        <div class="col mb-4 mt-1">
          <v-dialog
            ref="dialog"
            v-model="modal"
            :return-value.sync="order.deadline"
            lazy
            full-width
            width="290px"
          >
            <v-text-field
              slot="activator"
              v-model="order.deadline"
              label="Prazo"
              prepend-icon="event"
              readonly
              color="white"
            ></v-text-field>
            <v-date-picker color="green accent-3" v-model="order.deadline" scrollable>
              <v-btn flat color="green accent-3" @click="modal = false">Cancel</v-btn>
              <v-btn flat color="green accent-3" @click="$refs.dialog.save(order.deadline)">OK</v-btn>
            </v-date-picker>
          </v-dialog>
        </div>
      </div>
      <div class="form-row">
        <div class="col mb-1 mt-3 fileupload">
          <div class="row no-gutters">
            <div class="col-auto p-0 m-0">
              <h4 class="pr-3">Adicione Anexos</h4>
            </div>
          </div>
          <v-avatar size="60" color="white">
            <v-icon color="light-blue lighten-2">add_a_photo</v-icon>
          </v-avatar>
          <v-avatar size="60" color="white">
            <v-icon color="light-blue lighten-2">attachment</v-icon>
          </v-avatar>
        </div>
      </div>
    </div>
    <footer>
      <div class="container">
        <div class="d-flex justify-content-center">
          <button
            type="button"
            class="btn btn-success btn-rounded btn-lg btn-block"
            :disabled="$v.$invalid"
            @click.prevent="changeStep(+1)">Prosseguir ›</button>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { required, numeric } from 'vuelidate/lib/validators'
import { mapMutations } from 'vuex'

export default {
  name: 'order-product-info',
  props: ['order'],
  data: () => ({
    modal: false
  }),
  validations: {
    order: {
      name: {
        required
      },
      details: {
        required
      },
      quantity: {
        required,
        numeric
      },
      deadline: {
        required
      }
    }
  },
  methods: {
    ...mapMutations([
      'changeStep'
    ])
  }
}
</script>
