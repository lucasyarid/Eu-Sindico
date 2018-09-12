<template>
  <div class="container">
    <div class="step2">
      <div class="form-row">
        <div class="col-md-6 mb-4 mt-1">
          <label for="company-name" class="mb-0">O que deve ser comprado?</label>
          <input type="text" class="form-control" id="company-name" v-model="orderProduct.type" placeholder="Exemplo: guarda-sóis" required>
        </div>
      </div>
      <div class="form-row">
        <div class="col-md-6 mb-4 mt-1">
          <label for="company-phone" class="mb-0">Explique os motivos</label>
          <textarea type="text" class="form-control" id="company-phone" v-model="orderProduct.reason" placeholder="Exemplo: Nossos guarda-sóis estão todos furados e não podem ser utilizados. Uma pena para todos!"></textarea>
        </div>
      </div>
      <div class="form-row">
        <div class="col-md-4 mb-4 mt-1">
          <label for="order-time" class="mb-0">Quantidade</label>
          <input type="number" class="form-control" id="order-time" v-model.number="orderProduct.quantity" required>
        </div>
        <div class="col-md-4 mb-4 mt-1">
          <label for="order-cost" class="mb-0">Prazo</label>
          <input type="number" class="form-control" id="order-cost" v-model.number="orderProduct.deadline" required>
        </div>
      </div>
      <div class="form-row">
        <div class="col-md-2 mb-1 mt-3 fileupload">
          <div class="row no-gutters">
            <div class="col-auto p-0 m-0">
              <h4 class="pr-3">Adicione Anexos</h4>
            </div>
            <div class="col">
              <div id="progress-bar" class="progress">
                <div class="progress-bar progress-bar-striped bg-success" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%"></div>
              </div>
            </div>
          </div>
          <span class="btn btn-camera fileinput-button">
            <i class="fa fa-camera"></i>
            <input type="file" name="files[]" multiple="">
          </span>
          <span class="btn btn-attachment fileinput-button">
            <i class="fa fa-paperclip"></i>
            <input type="file" name="files[]" multiple="">
          </span>
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
  name: 'order-product-info',
  props: ['orderProduct'],
  computed: {
    step () {
      return this.$store.state.step
    },
    buttonDisabled () {
      return [
        this.orderProduct.type,
        this.orderProduct.reason,
        this.orderProduct.quantity,
        this.orderProduct.deadline
      ].some(elem => elem === '')
    }
  },
  methods: {
    ...mapMutations([
      'incrementStep'
    ])
  }
}
</script>
