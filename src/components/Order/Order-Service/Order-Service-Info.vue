<template>
  <v-container class="scrollable tab">
    <v-layout>
      <v-flex>
        <h4 class="font-weight-bold">Explique a situação</h4>
        <v-textarea no-resize dark
          rows="3"
          placeholder="Exemplo: Nosso contrato de segurança está acabando. Precisamos escolher uma nova empresa."
          v-model="order.description"
        ></v-textarea>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <h4 class="font-weight-bold">Escopo do serviço</h4>
        <v-textarea no-resize dark
          rows="3"
          placeholder="Exemplo: São necessários 2 seguranças, uma empresa de..."
          v-model="order.scope"
        ></v-textarea>
      </v-flex>
    </v-layout>
    <v-layout>
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
import { required } from 'vuelidate/lib/validators'
import { mapMutations } from 'vuex'
import Files from '@/components/Files.vue'

export default {
  name: 'order-service-info',
  components: {
    Files
  },
  props: ['order'],
  data: () => ({
    modal: false
  }),
  validations: {
    order: {
      title: { required },
      description: { required },
      scope: { required },
      estimatedDays: { required }
    }
  },
  methods: {
    ...mapMutations([
      'changeStep'
    ])
  }
}
</script>
