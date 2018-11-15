<template>
  <section>
    <v-container>
      <h3 class="font-weight-bold mb-4">Confirme as informações</h3>
      <v-layout>
        <v-flex>
          <h6 class="text-uppercase">Empresa</h6>
          <p>{{ quote.companyName }}</p>
        </v-flex>
      </v-layout>

      <v-layout>
        <v-flex>
          <h6 class="text-uppercase">Telefone</h6>
          <p>{{ quote.companyPhone }}</p>
        </v-flex>
      </v-layout>

      <v-layout>
        <v-flex>
          <h6 class="text-uppercase">Site da Empresa</h6>
          <p>{{ quote.companyWebsite }}</p>
        </v-flex>
      </v-layout>

      <v-layout>
        <v-flex>
          <h6 class="text-uppercase">Tempo Estimado</h6>
          <p>{{ quote.estimatedDays }}</p>
        </v-flex>
        <v-flex>
          <h6 class="text-uppercase">Custo Total</h6>
          <p>{{ quote.price }}</p>
        </v-flex>
      </v-layout>

      <h6 class="text-uppercase mt-4 mb-1">ANEXOS</h6>
      <v-layout mb-5>
        <v-flex>
          <Files list hide-btn
            :files="quote.files"
            @uploadedFiles="quote.files = $event"/>
        </v-flex>
      </v-layout>

      <v-form>
        <v-container pa-0>
          <v-layout justify-center class="footer-button">
            <v-flex xs4>
              <v-btn round large depressed outline block
                class="text-sm-left"
                @click.prevent="setStep(0)"
                color="light-blue lighten-2">Alterar</v-btn>
            </v-flex>
            <v-flex xs8>
              <v-btn round large depressed block
                class="text-sm-left"
                @click.prevent="postQuote"
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
      width="300">
      <v-card
        color="primary"
        dark>
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
  name: 'quote-confirm',
  props: ['quote'],
  components: {
    Files
  },
  data () {
    return {
      dialog: false
    }
  },
  mounted () {
    console.log(this.quote)
  },
  methods: {
    ...mapMutations([
      'setStep', 'changeStep'
    ]),
    postQuote () {
      this.dialog = true
      axios
        .post('/orders/' + this.$route.params.id + '/options', {
          attachments: this.quote.files,
          companyName: this.quote.companyName,
          companyPhone: this.quote.companyPhone,
          companyWebSite: this.quote.companyWebsite,
          estimatedDays: this.quote.estimatedDays,
          price: this.quote.price
        })
        .then(res => {
          setTimeout(() => {
            this.changeStep(1)
          }, 2000)
        })
        .catch((error) => {
        // Error
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request)
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message)
          }
          console.log(error.config)
        })
    }
  }
}
</script>
