<template>
  <v-container>
    <fieldset class="pa-3">
      <h1 class="font-weight-bold mb-4">De quem parte a solicitação</h1>

      <p class="mt-3">
        <input type="radio" id="equipeConselheira" value="Equipe conselheira" v-model="order.owner" />
        <label class="btn btn-rounded btn-md btn-outline-simple btn-block" for="equipeConselheira">Equipe conselheira</label>
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
import { required } from 'vuelidate/lib/validators'
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
  validations: {
    order: {
      owner: { required }
    }
  },
  methods: {
    ...mapMutations([
      'changeStep'
    ])
  }
}
</script>
