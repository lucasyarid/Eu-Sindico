<template>
  <v-container scrollable icon>
    <h3>Envie seu orçamento</h3>
    <h6 class="mt-4 text-uppercase">PREENCHA OS DADOS</h6>

    <v-layout mt-2 >
      <v-flex xs6>
        <v-text-field
          label="Nome da Empresa"
          placeholder="Construções S.A."
          v-model="quote.companyName"
        ></v-text-field>
      </v-flex>
      <v-flex xs6 class="validate" :class="{invalid: $v.quote.companyPhone.$error}">
        <div v-if="$v.quote.companyPhone.$error" class="active"
          data-tooltip="Informe um telefone válido"></div>
        <v-text-field
          :mask="'(##) ##### - ####'"
          label="Telefone"
          placeholder="(11) 11111 - 1111"
          @blur="$v.quote.companyPhone.$touch()"
          v-model="quote.companyPhone"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <v-text-field
          label="Site da Empresa"
          placeholder="Ex: construcoessa.com.br"
          v-model="quote.companyWebsite"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs6>
        <v-text-field
          label="Tempo Estimado"
          suffix="dias"
          placeholder="Ex: 30"
          v-model="quote.estimatedDays"
        ></v-text-field>
      </v-flex>
      <v-flex xs6>
        <v-text-field
          class="price"
          label="Custo"
          prefix="R$"
          suffix=",00"
          placeholder="Ex: 1000"
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
import { required, numeric, minLength } from 'vuelidate/lib/validators'
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
      companyWebsite: {
        required
      },
      companyPhone: {
        required,
        numeric,
        minLength: minLength(10)
      },
      estimatedDays: { required },
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

<style lang="scss">
.price input {
  padding-left: 10px;
}
</style>
