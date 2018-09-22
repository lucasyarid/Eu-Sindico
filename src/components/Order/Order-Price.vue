<template>
  <div class="container">
    <div class="step3">
      <div class="form-row">
        <div class="col mb-1 mt-3 ml-1 mr-1">
          <label for="want-buy" class="mb-0"><h2>Qual o custo máximo sugerido?</h2></label>

          <p class="mt-3">
            <button
              type="button"
              class="btn btn-rounded btn-md btn-outline-simple"
              @click="$emit('changeOrderPrice', order.price += 500)">+ R$500</button>
          </p>
          <p class="mt-3">
            <button
              type="button"
              class="btn btn-rounded btn-md btn-outline-simple"
              @click="$emit('changeOrderPrice', order.price += 100)">+ R$100</button>
          </p>

          <p class="mt-3">
            <span>R$</span><input type="number" class="form-control" id="want-buy" v-model.number="order.price" placeholder="000" /><span>,00</span>
          </p>

          <p class="mt-3">
            <button
              type="button"
              class="btn btn-rounded btn-md btn-outline-simple"
              @click="$emit('changeOrderPrice', order.price -= 100)">- R$100</button>
          </p>
          <p class="mt-3">
            <button
              type="button"
              class="btn btn-rounded btn-md btn-outline-simple"
              @click="$emit('changeOrderPrice', order.price -= 500)">- R$500</button>
          </p>

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
