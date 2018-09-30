<template>
  <v-container>
    <div class="price">
      <div>
        <h1 class="font-weight-bold mb-5">Qual o custo<br>máximo sugerido?</h1>

        <p>
          <v-btn round large dark depressed outline
            tag="button"
            color="white"
            @click="$emit('changeOrderPrice', order.maxValue += 500)">
            + R$500
          </v-btn>
        </p>
        <p>
          <v-btn round large dark depressed outline
            tag="button"
            color="white"
            @click="$emit('changeOrderPrice', order.maxValue += 100)">
            + R$100
          </v-btn>
        </p>

        <p class="nowrap">
          <span>R$</span>
          <v-text-field dark
            type="number"
            class="price-input"
            v-model.number="order.maxValue"
            placeholder="000 "
          ></v-text-field>
          <span>,00</span>
        </p>

        <p>
          <v-btn round large dark depressed outline
            tag="button"
            color="white"
            @click="$emit('changeOrderPrice', order.maxValue -= 100)">
            - R$100
          </v-btn>
        </p>
        <p>
          <v-btn round large dark depressed outline
            tag="button"
            color="white"
            @click="$emit('changeOrderPrice', order.maxValue -= 500)">
            - R$500
          </v-btn>
        </p>

      </div>
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
import { required, numeric } from 'vuelidate/lib/validators'
import { mapMutations } from 'vuex'

export default {
  name: 'order-price',
  props: ['order'],
  validations: {
    order: {
      maxValue: {
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
