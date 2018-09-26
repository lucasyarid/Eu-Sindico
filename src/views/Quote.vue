<template>
  <section class="quote">
    <v-tabs centered icons-and-text
      slot="extension"
      v-model="tabs"
      slider-color="green accent-3">
      <v-tab href="#tab-2">
        Em Aberto
      </v-tab>
      <v-tab href="#tab-3">
        Em Votação
      </v-tab>
    </v-tabs>
    <main class="horizontal-scroll mt-3">
      <router-link to="/quote/review" class="quote-item card card-image card-lg" style="background-image: url(//picsum.photos/300/400)">
        <div class="quote-item-info">
          <div class="quote-item-title">
            <h5>Compra de</h5>
            <h2> Guarda-sóis</h2>
          </div>

          <span class="quote-item-reference align-text-top">
            <v-icon :size="21" color="white">account_circle</v-icon> À pedido do Síndico</span>

          <div class="footer-button container">
            <v-btn round large dark depressed block outline
              color="white">Mais informações</v-btn>
            <v-progress-circular
              :rotate="-90"
              :size="80"
              :width="4"
              :value="25"
              color="green accent-3">
              <div class="timer">
                <div class="timer-content">
                  <small>Expira em</small>
                  <time>2 dias</time>
                </div>
              </div>
            </v-progress-circular>
          </div>
        </div>
      </router-link>
    </main>
  </section>
</template>

<script>
import FooterButton from '@/components/FooterButton.vue'

export default {
  name: 'quote',
  components: {
    FooterButton
  },
  data: function () {
    return {
      title: 'Orçamentos',
      tabs: null
    }
  },
  methods: {
    setName () {
      this.$emit('getTitle', this.title)
    }
  },
  mounted () {
    this.setName()
  }
}
</script>
