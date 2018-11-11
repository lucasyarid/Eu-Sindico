<template>
  <v-container class="scrollable tab">
    <v-layout>
      <v-flex>
        <h4 class="font-weight-bold">O que deve ser comprado?</h4>
        <v-text-field dark
          placeholder="Exemplo: guarda-sóis"
          v-model="order.title"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <h4 class="font-weight-bold">Explique os motivos</h4>
        <v-textarea no-resize dark
          placeholder="Exemplo: Nossos guarda-sóis estão todos furados e não podem ser utilizados. Uma pena para todos!"
          v-model="order.description"
        ></v-textarea>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex>
        <h4 class="font-weight-bold">Quantidade</h4>
        <v-text-field dark
          class="pt-4"
          placeholder="Exemplo: guarda-sóis"
          v-model.number="order.quantity"
        ></v-text-field>
      </v-flex>
      <v-flex>
        <h4 class="font-weight-bold">Estimativa de dias após aprovado</h4>
        <v-text-field dark
          class="pt-4"
          placeholder="Exemplo: 30"
          suffix="dias"
          v-model.number="order.estimatedDays"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <h4 slot="activator" class="font-weight-bold mb-2">Anexos</h4>
        <Files list
          :files="order.files"
          @uploadedFiles="order.files = $event"/>
      </v-flex>
    </v-layout>
    <footer class="px-3">
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
import { required, numeric } from 'vuelidate/lib/validators'
import { mapMutations } from 'vuex'
import Files from '@/components/Files.vue'

export default {
  name: 'order-product-info',
  components: {
    Files
  },
  props: ['order'],
  data: () => ({
    modal: false
  }),
  validations: {
    order: {
      title: {
        required
      },
      description: {
        required
      },
      quantity: {
        required,
        numeric
      },
      estimatedDays: {
        required
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
