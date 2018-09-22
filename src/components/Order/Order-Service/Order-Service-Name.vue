<template>
  <div class="container">
    <div class="step1">
      <div class="form-row">
        <div class="mb-1 mt-5 ml-3 mr-3">
          <fieldset>
            <label for="want-buy" class="mb-0"><h2>Qual é o tipo de serviço?</h2></label>

            <p class="mt-3">
              <input type="radio" id="pintura" value="pintura" v-model="order.name" />
              <label class="btn btn-rounded btn-md btn-outline-simple btn-block" for="pintura">Pintura</label>
            </p>

            <p class="mt-3">
              <input type="radio" id="laudo" value="laudo" v-model="order.name" />
              <label class="btn btn-rounded btn-md btn-outline-simple btn-block" for="laudo">Laudo</label>
            </p>

            <p class="mt-3">
              <input type="radio" id="limpeza" value="limpeza" v-model="order.name" />
              <label class="btn btn-rounded btn-md btn-outline-simple btn-block" for="limpeza">Limpeza</label>
            </p>

            <p class="type pt-2 pb-2" v-if="order.name == 'outro'">
              <label for="order-time" class="mb-0">Defina o tipo </label>
              <input type="text" class="form-control pt-0" v-model="otherType" id="want-buy" placeholder='Ex.: "Segurança"' />
            </p>
            <p class="mt-3" v-else>
              <input type="radio" id="otherType" value="outro" v-model="order.name" />
              <label class="btn btn-rounded btn-md btn-outline-simple btn-block" for="otherType">Outro tipo</label>
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
            :disabled="$v.$invalid"
            @click.prevent="changeStep(+1)">Prosseguir ›</button>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { required, requiredIf } from 'vuelidate/lib/validators'
import { mapMutations } from 'vuex'

export default {
  name: 'order-service-name',
  props: ['order'],
  data: function () {
    return {
      otherType: ''
    }
  },
  validations: {
    order: {
      name: {
        required
      }
    },
    otherType: {
      requiredIf: requiredIf((vm) => {
        return vm.order.name === 'outro'
      })
    }
  },
  methods: {
    ...mapMutations([
      'changeStep'
    ])
  }
}
</script>
