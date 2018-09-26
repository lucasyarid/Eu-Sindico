<template>
  <v-container>
    <h3>Envie seu orçamento</h3>
    <h4>PREENCHA OS DADOS</h4>

    <v-layout mb-1>
      <v-flex>
        <v-text-field
          label="Nome da Empresa"
          v-model="quote.companyName"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs6>
        <v-text-field
          label="Telefone"
          v-model="quote.companyPhone"
        ></v-text-field>
      </v-flex>
      <v-flex xs6>
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
    <v-layout mb-5>
      <v-flex>
        <h4 class="pr-3">Adicione Anexos</h4>
        <v-avatar size="60" color="green accent-3">
          <v-icon color="white">add_a_photo</v-icon>
        </v-avatar>
        <v-avatar size="60" color="green accent-3">
          <v-icon color="white">attachment</v-icon>
        </v-avatar>
      </v-flex>
    </v-layout>
    <footer class="mt-5 px-3">
      <v-btn round large depressed block
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
import { required, numeric } from 'vuelidate/lib/validators'
import { mapMutations } from 'vuex'

export default {
  name: 'quote-info',
  props: ['quote'],
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
