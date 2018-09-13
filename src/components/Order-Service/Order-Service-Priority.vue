<template>
  <div class="container">
    <div class="step1">
      <div class="form-row">
        <div class="col-md-4 mb-1 mt-5 ml-3 mr-3">
          <fieldset>
            <label for="want-buy" class="mb-0"><h2>Qual é o tipo de serviço?</h2></label>

            <p class="mt-3">
              <input type="radio" id="alta" value="alta" v-model="order.priority" />
              <label class="btn btn-rounded btn-md btn-outline-simple btn-block" for="alta">Urgência alta</label>
            </p>

            <p class="mt-3">
              <input type="radio" id="media" value="media" v-model="order.priority" />
              <label class="btn btn-rounded btn-md btn-outline-simple btn-block" for="media">Urgência média</label>
            </p>

            <p class="mt-3">
              <input type="radio" id="baixa" value="baixa" v-model="order.priority" />
              <label class="btn btn-rounded btn-md btn-outline-simple btn-block" for="baixa">Urgência baixa</label>
            </p>

            <p class="mt-3">
              <input type="radio" id="nao" value="não" v-model="order.priority" />
              <label class="btn btn-rounded btn-md btn-outline-simple btn-block" for="nao">Sem urgência</label>
            </p>

          </fieldset>
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
            @click.prevent="changeStep(+1)">Prosseguir ›</button>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'order-service-priority',
  props: ['order'],
  data: function () {
    return {
      otherType: ''
    }
  },
  computed: {
    buttonDisabled () {
      return this.order.priority === ''
    }
  },
  methods: {
    ...mapMutations([
      'changeStep'
    ])
  }
}
</script>
