<template>
  <section id="confirmation">
    <v-container>
      <h2>Confirme as informações</h2>
      <v-layout>
        <v-flex>
          <h4>Empresa</h4>
          <p>{{ quote.companyName }}</p>
        </v-flex>
      </v-layout>

      <v-layout>
        <v-flex>
          <h4>Telefone</h4>
          <p>{{ quote.companyPhone }}</p>
        </v-flex>
      </v-layout>

      <v-layout>
        <v-flex>
          <h4>Site da Empresa</h4>
          <p>{{ quote.companyWebsite }}</p>
        </v-flex>
      </v-layout>

      <v-layout>
        <v-flex>
          <h4>Tempo Estimado</h4>
          <p>{{ quote.time }}</p>
        </v-flex>
        <v-flex>
          <h4>Custo Total</h4>
          <p>{{ quote.price }}</p>
        </v-flex>
      </v-layout>

      <div class="horizontal-scroll">
        <h4>FOTOS</h4>
        <v-layout>
          <v-flex v-for="i in 6" :key="i">
            <img src="//picsum.photos/68/68" />
          </v-flex>
        </v-layout>
      </div>

      <v-layout mt-5>
        <v-flex>
          <h4>ANEXOS</h4>
          <p><v-icon>add_a_photo</v-icon> Orçamento empresa XYZ.pdf</p>
          <p><v-icon>attachment</v-icon> Orçamento empresa XYZ.pdf</p>
        </v-flex>
      </v-layout>

      <footer class="mt-5 px-3">
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
              color="green accent-3">Submeter solicitação</v-btn>
          </v-flex>
        </v-layout>
      </footer>
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
