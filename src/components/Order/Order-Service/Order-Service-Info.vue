<template>
  <v-container>
    <v-layout mb-5>
      <v-flex>
        <v-textarea dark
          label="Explique a situação"
          placeholder="Exemplo: Nosso contrato de segurança está acabando. Precisamos escolher uma nova empresa."
          v-model="order.details"
        ></v-textarea>
      </v-flex>
    </v-layout>
    <v-layout mb-5>
      <v-flex>
        <v-textarea dark
          label="Escopo do serviço"
          placeholder="Exemplo: São necessários 2 seguranças, uma empresa de..."
          v-model="order.scope"
        ></v-textarea>
      </v-flex>
    </v-layout>
    <v-layout mb-5>
      <v-flex>
        <v-dialog
          ref="dialog"
          v-model="modal"
          :return-value.sync="order.deadline"
          lazy
          full-width
          width="290px"
        >
          <v-text-field dark
            slot="activator"
            v-model="order.deadline"
            label="Prazo"
            prepend-icon="event"
            readonly
            color="white"
          ></v-text-field>
          <v-date-picker color="green accent-3" v-model="order.deadline" scrollable>
            <v-btn flat color="green accent-3" @click="modal = false">Cancel</v-btn>
            <v-btn flat color="green accent-3" @click="$refs.dialog.save(order.deadline)">OK</v-btn>
          </v-date-picker>
        </v-dialog>
      </v-flex>
    </v-layout>
    <v-layout mb-5>
      <v-flex>
        <h4 class="pr-3">Adicione Anexos</h4>
        <v-avatar size="60" color="white">
          <v-icon color="light-blue lighten-2">add_a_photo</v-icon>
        </v-avatar>
        <v-avatar size="60" color="white">
          <v-icon color="light-blue lighten-2">attachment</v-icon>
        </v-avatar>
      </v-flex>
    </v-layout>
    <footer class="mt-5 px-3">
      <v-btn round large dark depressed block
        tag="button"
        color="green accent-3"
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
  name: 'order-service-info',
  props: ['order'],
  data: () => ({
    modal: false
  }),
  validations: {
    order: {
      name: { required },
      details: { required },
      scope: { required },
      deadline: { required }
    }
  },
  methods: {
    ...mapMutations([
      'changeStep'
    ])
  }
}
</script>
