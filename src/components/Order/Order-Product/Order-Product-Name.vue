<template>
  <v-container>
    <div class="mb-1 mt-5 ml-3 mr-3">
      <h1>O que deve ser comprado?</h1>
      <v-text-field dark
        placeholder="Exemplo: guarda-sóis"
        v-model="order.title"
      ></v-text-field>
    </div>
    <footer class="mt-5 px-3">
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
import { required } from 'vuelidate/lib/validators'
import { mapMutations } from 'vuex'

export default {
  name: 'order-product-name',
  props: ['order'],
  validations: {
    order: {
      title: {
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
