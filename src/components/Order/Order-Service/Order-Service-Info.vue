<template>
  <v-container>
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
        <v-dialog
          ref="dialog"
          v-model="modal"
          :return-value.sync="order.deadline"
          lazy
          full-width
          width="290px"
        >
          <h4 slot="activator" class="font-weight-bold">Até</h4>
          <v-text-field dark
            slot="activator"
            v-model="order.deadline"
            readonly
            color="white"
          ></v-text-field>
          <v-date-picker color="accent" v-model="order.deadline" scrollable>
            <v-btn flat color="accent" @click="modal = false">Cancel</v-btn>
            <v-btn flat color="accent" @click="$refs.dialog.save(order.deadline)">OK</v-btn>
          </v-date-picker>
        </v-dialog>
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
