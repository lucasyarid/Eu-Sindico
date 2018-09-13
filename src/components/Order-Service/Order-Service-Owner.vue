<template>
  <div class="container">
    <div class="step1">
      <div class="form-row">
        <div class="col-md-4 mb-1 mt-5 ml-3 mr-3">
          <fieldset>
            <label for="want-buy" class="mb-0"><h2>Qual é o tipo de serviço?</h2></label>

            <p class="mt-3">
              <input type="radio" id="equipeConselheira" value="Equipe conselheira" v-model="order.owner" />
              <label class="btn btn-rounded btn-md btn-outline-simple btn-block" for="equipeConselheira">Urgência alta</label>
            </p>

            <p class="mt-3">
              <input type="radio" id="sindico" value="sindico" v-model="order.owner" />
              <label class="btn btn-rounded btn-md btn-outline-simple btn-block" for="sindico">Síndico</label>
            </p>

            <p class="mt-3">
              <input type="radio" id="moradores" value="moradores" v-model="order.owner" />
              <label class="btn btn-rounded btn-md btn-outline-simple btn-block" for="moradores">Moradores</label>
            </p>

            <p class="mt-3">
              <input type="radio" id="outros" value="outros" v-model="order.owner" />
              <label class="btn btn-rounded btn-md btn-outline-simple btn-block" for="outros">Outros</label>
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
  name: 'order-service-owner',
  props: ['order'],
  data: function () {
    return {
      otherType: ''
    }
  },
  computed: {
    buttonDisabled () {
      return this.order.owner === ''
    }
  },
  methods: {
    ...mapMutations([
      'changeStep'
    ])
  }
}
</script>
