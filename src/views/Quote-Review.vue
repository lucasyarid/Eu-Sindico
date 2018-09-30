<template>
  <section class="quote-review">
    <Gallery info="true"/>
    <v-container class="pb-3 scrollable gallery">
      <p>
        O muro do fundo da garagem foi prejudicado pelas recentes fortes chuvas e precisa ser reforçado pois pode cair sob os carros.
      </p>
      <div class="app-cards horizontal-scroll">
        <div class="quote-review-item card card-full card-grey card-disabled">
          <div class="quote-review-info card-inner-card">
            <h4 class="quote-review-info-title mb-3">Jardim do Sul Alvenaria</h4>

            <ul class="quote-review-list">
              <li class="quote-review-list-item">
                <v-icon :size="21" color="primary">web</v-icon>
                <p class="d-inline-block pl-2 primary--text mb-2">Visitar website</p>
              </li>
              <li class="quote-review-list-item">
                <v-icon :size="21" color="primary">settings_phone</v-icon>
                <p class="d-inline-block pl-2 primary--text">(11) 3666-1000</p>
              </li>
            </ul>

            <h6 class="text-uppercase pb-1 mt-2">Tempo estimado</h6>
            <p>12 dias</p>

            <h6 class="text-uppercase mt-4">Anexos</h6>
            <ul class="quote-review-list">
              <li class="quote-review-list-item">
                <a href="#">
                  <v-icon :size="21" color="primary">attachment</v-icon>
                  <p class="d-inline-block pl-2 primary--text">Laudo para Cond...pdf</p>
                </a>
              </li>
            </ul>

            <h6 class="text-uppercase pb-1 mt-2">Custo</h6>
            <p>R$700,00</p>
          </div>
          <v-container fluid grid-list-xl>
            <v-layout row justify-center class="footer-button">
              <v-flex xs4>
                <v-btn round large dark depressed outline block
                  class="text-sm-left"
                  color="red"><v-icon>close</v-icon></v-btn>
              </v-flex>
              <v-flex xs8>
                <v-btn round large dark depressed block
                  class="text-sm-left"
                  color="accent">Confirmar</v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script>
import Gallery from '@/components/Gallery.vue'
import FooterButton from '@/components/FooterButton.vue'

export default {
  name: 'quote-review',
  components: {
    Gallery,
    FooterButton
  },
  data: function () {
    return {
      title: 'Aprovar Orçamentos',
      menuBack: true
    }
  },
  methods: {
    setName () {
      this.$emit('getTitle', this.title)
    },
    setMenu () {
      this.$emit('getMenu', this.menuBack)
    }
  },
  mounted () {
    this.setName()
    this.setMenu()
  },
  destroyed () {
    this.menuBack = false
    this.setMenu()
  }
}
</script>
