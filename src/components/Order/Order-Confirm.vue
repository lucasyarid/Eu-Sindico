<template>
  <section id="confirmation">
    <v-container>
      <h1 class="font-weight-bold mb-1">Confirme as informações</h1>
      <v-layout my-3>
        <v-flex>
          <h6 class="text-uppercase mb-2">{{ order.type }}</h6>
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

      <div class="horizontal-scroll my-1">
        <h6 class="text-uppercase">FOTOS</h6>
        <v-layout pt-2>
          <v-flex mr-1 v-for="i in 6" :key="i">
            <img class="thumb" src="//picsum.photos/68/68" />
          </v-flex>
        </v-layout>
      </div>

      <h6 class="text-uppercase mt-4 mb-1">ANEXOS</h6>
      <v-layout>
        <v-flex>
          <v-avatar :size="25" color="secondary">
            <v-icon :size="15" dark>close</v-icon>
          </v-avatar>
          <p class="d-inline-block pl-2"> Orçamento empresa XYZ.pdf</p>
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

    {{order}}
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

export default {
  name: 'order-confirm',
  props: ['order'],
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
