<template>
  <v-container>
    <fieldset class="pa-3">
      <h1 class="font-weight-bold mb-4">Defina a urgência</h1>

      <p class="mt-3">
        <input type="radio" id="alta" :value="3" v-model="order.priority" />
        <label class="btn btn-rounded btn-md btn-outline-simple btn-block" for="alta">Urgência alta</label>
      </p>

      <p class="mt-3">
        <input type="radio" id="media" :value="2" v-model="order.priority" />
        <label class="btn btn-rounded btn-md btn-outline-simple btn-block" for="media">Urgência média</label>
      </p>

      <p class="mt-3">
        <input type="radio" id="baixa" :value="1" v-model="order.priority" />
        <label class="btn btn-rounded btn-md btn-outline-simple btn-block" for="baixa">Urgência baixa</label>
      </p>

      <p class="mt-3">
        <input type="radio" id="nao" :value="0" v-model="order.priority" />
        <label class="btn btn-rounded btn-md btn-outline-simple btn-block" for="nao">Sem urgência</label>
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
  name: 'order-service-priority',
  props: ['order'],
  data: function () {
    return {
      otherType: ''
    }
  },
  validations: {
    order: {
      priority: { required }
    }
  },
  methods: {
    ...mapMutations([
      'changeStep'
    ])
  }
}
</script>
