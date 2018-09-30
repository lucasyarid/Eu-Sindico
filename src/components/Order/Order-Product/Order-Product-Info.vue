<template>
  <v-container>
    <v-layout>
      <v-flex>
        <h4 class="font-weight-bold">O que deve ser comprado?</h4>
        <v-text-field dark
          placeholder="Exemplo: guarda-sóis"
          v-model="order.title"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <h4 class="font-weight-bold">Explique os motivos</h4>
        <v-textarea no-resize dark
          placeholder="Exemplo: Nossos guarda-sóis estão todos furados e não podem ser utilizados. Uma pena para todos!"
          v-model="order.description"
        ></v-textarea>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs6>
        <h4 class="font-weight-bold">Quantidade</h4>
        <v-text-field dark
          placeholder="Exemplo: guarda-sóis"
          v-model.number="order.quantity"
        ></v-text-field>
      </v-flex>
      <v-flex xs6>
        <v-dialog
          ref="dialog"
          v-model="modal"
          :return-value.sync="order.deadline"
          lazy
          full-width
          width="290px"
        >
          <h4 slot="activator" class="font-weight-bold">Prazo</h4>
          <v-text-field dark
            slot="activator"
            v-model="order.deadline"
            append-icon="event"
            readonly
          ></v-text-field>
          <v-date-picker color="accent" v-model="order.deadline" scrollable>
            <v-btn flat color="accent" @click="modal = false">Cancel</v-btn>
            <v-btn flat color="accent" @click="$refs.dialog.save(order.deadline)">OK</v-btn>
          </v-date-picker>
        </v-dialog>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <h4 slot="activator" class="font-weight-bold mb-2">Anexos</h4>
        <v-avatar size="60" color="white" class="mr-2">
          <v-icon color="primary">add_a_photo</v-icon>
        </v-avatar>
        <v-avatar size="60" color="white">
          <v-icon color="primary">attachment</v-icon>
        </v-avatar>
      </v-flex>
    </v-layout>
    <footer class="px-3">
      <v-btn round large dark depressed block
        tag="button"
        color="accent"
        :disabled="$v.$invalid"
        @click.prevent="changeStep(1)">
        Prosseguir ›
      </v-btn>
    </footer>
  </v-container>
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
      title: {
        required
      },
      description: {
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
