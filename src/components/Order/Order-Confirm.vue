<template>
  <section id="confirmation">
    <v-container>
      <h1 class="font-weight-bold mb-1">Confirme as informações</h1>
      <v-layout my-3>
        <v-flex>
          <h6 v-if="order.type === 1" class="text-uppercase mb-2">Produto</h6>
          <h6 v-if="order.type === 2" class="text-uppercase mb-2">Serviço</h6>
          <p>{{ order.title }}</p>
        </v-flex>
        <v-flex v-if="order.type == 1">
          <h6 class="text-uppercase mb-2">Quantidade</h6>
          <p>{{ order.quantity }}</p>
        </v-flex>
        <v-flex v-if="order.type == 2">
          <h6 class="text-uppercase mb-2">Prioridade</h6>
          <p>{{ order.priority }}</p>
        </v-flex>
      </v-layout>

      <v-layout>
        <v-flex>
          <h6 class="text-uppercase mb-2">Detalhes sobre a situação</h6>
          <p>{{ order.description }}</p>
        </v-flex>
      </v-layout>

      <h6 class="text-uppercase mt-4 mb-1">ANEXOS</h6>
      <v-layout mb-2>
        <v-flex>
          <Files list hide-btn
            :files="order.files"
            @uploadedFiles="order.files = $event"/>
        </v-flex>
      </v-layout>

      <v-layout mt-2>
        <v-flex>
          <h6 class="text-uppercase mb-2">Prazo</h6>
          <p>{{ order.deadline }}</p>
        </v-flex>
        <v-flex>
          <h6 class="text-uppercase mb-2">Custo Máx.</h6>
          <p><b>R${{ order.maxValue }},00</b></p>
        </v-flex>
      </v-layout>

      <v-form>
        <v-container pa-0>
          <v-layout justify-center class="footer-button">
            <v-flex xs4>
              <v-btn round large depressed outline block
                class="text-sm-left"
                @click.prevent="setStep(1)"
                color="light-blue lighten-2">Alterar</v-btn>
            </v-flex>
            <v-flex xs8>
              <v-btn round large depressed block
                class="text-sm-left"
                @click.prevent="postOrder(); dialog = true"
                color="accent">Submeter solicitação</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-form>
    </v-container>

    <v-dialog
      v-model="dialog"
      hide-overlay
      persistent
      width="300"
    >
      <v-card
        color="primary"
        dark
      >
        <v-card-text>
          Enviando...
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>

  </section>
</template>

<script>
import { mapMutations } from 'vuex'
import axios from '@/axios-auth'
import Files from '@/components/Files.vue'

export default {
  name: 'order-confirm',
  props: ['order'],
  components: {
    Files
  },
  data () {
    return {
      dialog: false
    }
  },
  methods: {
    ...mapMutations([
      'setStep', 'changeStep'
    ]),
    postOrder () {
      axios
        .post('/orders', {
          description: this.order.description,
          maxValue: this.order.maxValue,
          priority: this.order.priority,
          quantity: this.order.quantity,
          scope: this.order.scope,
          title: this.order.title,
          type: this.order.type
        })
        .then(res => {
          setTimeout(() => {
            this.changeStep(1)
          }, 2000)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
