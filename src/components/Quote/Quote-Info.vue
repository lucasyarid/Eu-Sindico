<template>
  <v-container scrollable icon>
    <h3>Envie seu orçamento</h3>
    <h6 class="mt-4 text-uppercase">PREENCHA OS DADOS</h6>

    <v-layout mt-2 >
      <v-flex xs6>
        <v-text-field
          label="Nome da Empresa"
          v-model="quote.companyName"
        ></v-text-field>
      </v-flex>
      <v-flex xs6>
        <v-text-field
          label="Telefone"
          v-model="quote.companyPhone"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <v-text-field
          label="Site da Empresa"
          v-model="quote.companyWebsite"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs6>
        <v-text-field
          label="Tempo Estimado"
          v-model="quote.time"
        ></v-text-field>
      </v-flex>
      <v-flex xs6>
        <v-text-field
          label="Custo"
          v-model="quote.price"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <h6 class="text-uppercase mt-4 mb-1">ANEXOS</h6>
        <v-layout mb-5>
          <v-flex>
            <Files list
              :files="quote.files"
              @uploadedFiles="quote.files = $event"/>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <footer class="px-3">
      <v-btn round large depressed block
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
  name: 'quote-info',
  props: ['quote'],
  components: {
    Files
  },
  validations: {
    quote: {
      companyName: { required },
      companyPhone: { required },
      time: { required },
      price: {
        required,
        numeric
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
