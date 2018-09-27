<template>
  <section>
    <v-container>
      <h1 class="font-weight-bold mb-4">Confirme as informações</h1>
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
          <p>{{ quote.time }}</p>
        </v-flex>
        <v-flex>
          <h6 class="text-uppercase">Custo Total</h6>
          <p>{{ quote.price }}</p>
        </v-flex>
      </v-layout>

      <div class="horizontal-scroll">
        <h6 class="text-uppercase">FOTOS</h6>
        <v-layout pt-2>
          <v-flex mr-1 v-for="i in 6" :key="i">
            <img class="thumb" src="//picsum.photos/68/68" />
          </v-flex>
        </v-layout>
      </div>

      <h6 class="text-uppercase mt-4 mb-2">ANEXOS</h6>
      <v-layout>
        <v-flex>
          <v-avatar :size="25" color="secondary">
            <v-icon :size="15" dark>close</v-icon>
          </v-avatar>
          <p class="d-inline-block pl-2"> Orçamento empresa XYZ.pdf</p>
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
                @click.prevent="changeStep(1)"
                color="accent">Submeter solicitação</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-form>
    </v-container>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'quote-confirm',
  props: ['quote'],
  methods: {
    ...mapMutations([
      'setStep', 'changeStep'
    ])
  }
}
</script>
