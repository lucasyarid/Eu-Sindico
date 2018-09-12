<template>
  <div class="container">
    <div class="step1">
      <div class="form-row">
        <div class="col-md-4 mb-1 mt-5 ml-3 mr-3">
          <label for="want-buy" class="mb-0"><h2>O que deve ser comprado?</h2></label>
          <input type="text" class="form-control" id="want-buy" v-model="orderProduct.type" placeholder="Exemplo: guarda-sóis" />
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
            @click.prevent="incrementStep">Prosseguir ›</button>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'order-product-type',
  props: ['orderProduct'],
  computed: {
    step () {
      return this.$store.state.step
    },
    buttonDisabled () {
      return this.orderProduct.type === ''
    }
  },
  methods: {
    ...mapMutations([
      'incrementStep'
    ])
  }
}
</script>
