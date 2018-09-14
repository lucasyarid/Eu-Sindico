<template>
  <div class="container">
    <div class="step1">
      <div class="form-row">
        <div class="mb-1 mt-5 ml-3 mr-3">
          <label for="want-buy" class="mb-0"><h2>O que deve ser comprado?</h2></label>
          <input type="text" class="form-control" id="want-buy" v-model="order.name" placeholder="Exemplo: guarda-sóis" />
        </div>
      </div>
    </div>
    <footer>
      <div class="container">
        <div class="d-flex justify-content-center">
          <button
            type="button"
            class="btn btn-success btn-rounded btn-lg btn-block"
            :disabled="buttonDisabled"
            @click.prevent="changeStep(1)">Prosseguir ›</button>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'order-product-name',
  props: ['order'],
  computed: {
    buttonDisabled () {
      return this.order.name === ''
    }
  },
  methods: {
    ...mapMutations([
      'changeStep'
    ])
  }
}
</script>
