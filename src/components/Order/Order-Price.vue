<template>
  <v-container>
    <div class="price">
      <div class="mb-1 mt-3 ml-1 mr-1">
        <h2>Qual o custo máximo sugerido?</h2>

        <p class="mt-3">
          <v-btn round large dark depressed outline
            tag="button"
            color="white"
            @click="$emit('changeOrderPrice', order.price += 500)">
            + R$500
          </v-btn>
        </p>
        <p class="mt-3">
          <v-btn round large dark depressed outline
            tag="button"
            color="white"
            @click="$emit('changeOrderPrice', order.price += 100)">
            + R$100
          </v-btn>
        </p>

        <p class="mt-3">
          <span>R$</span>
          <v-text-field dark
            type="number"
            class="price-input"
            v-model.number="order.price"
            placeholder="000 "
          ></v-text-field>
          <span>,00</span>
        </p>

        <p class="mt-3">
          <v-btn round large dark depressed outline
            tag="button"
            color="white"
            @click="$emit('changeOrderPrice', order.price -= 100)">
            - R$100
          </v-btn>
        </p>
        <p class="mt-3">
          <v-btn round large dark depressed outline
            tag="button"
            color="white"
            @click="$emit('changeOrderPrice', order.price -= 500)">
            - R$500
          </v-btn>
        </p>

      </div>
    </div>
    <footer class="mt-5 px-3">
      <v-btn round large dark depressed block
        tag="button"
        color="green accent-3"
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
  name: 'order-price',
  props: ['order'],
  validations: {
    order: {
      price: {
        required,
        numeric
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
