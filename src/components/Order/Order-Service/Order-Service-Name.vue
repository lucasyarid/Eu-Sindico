<template>
  <v-container>
    <fieldset class="pa-3">
      <h1 class="font-weight-bold mb-4">Qual é o tipo de serviço?</h1>

      <p class="mt-3">
        <input type="radio" id="pintura" value="pintura" v-model="order.title" />
        <label class="btn btn-rounded btn-md btn-outline-simple btn-block" for="pintura">Pintura</label>
      </p>

      <p class="mt-3">
        <input type="radio" id="laudo" value="laudo" v-model="order.title" />
        <label class="btn btn-rounded btn-md btn-outline-simple btn-block" for="laudo">Laudo</label>
      </p>

      <p class="mt-3">
        <input type="radio" id="limpeza" value="limpeza" v-model="order.title" />
        <label class="btn btn-rounded btn-md btn-outline-simple btn-block" for="limpeza">Limpeza</label>
      </p>

      <p class="type pt-2 pb-2" v-if="order.title == 'outro'">
        <v-text-field dark
          label="Defina o tipo"
          placeholder="Ex.: 'Segurança'"
          v-model="otherType"
        ></v-text-field>
      </p>
      <p class="mt-3" v-else>
        <input type="radio" id="otherType" value="outro" v-model="order.title" />
        <label class="btn btn-rounded btn-md btn-outline-simple btn-block" for="otherType">Outro tipo</label>
      </p>
    </fieldset>
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
      title: {
        required
      }
    },
    otherType: {
      requiredIf: requiredIf((vm) => {
        return vm.order.title === 'outro'
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
