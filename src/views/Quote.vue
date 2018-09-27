<template>
  <section class="quote">
    <v-tabs centered icons-and-text
      slot="extension"
      v-model="tabs"
      slider-color="accent">
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
            <h2 class="font-weight-bold"> Guarda-sóis</h2>
          </div>

          <span class="quote-item-reference align-text-top mt-2">
            <v-icon :size="21" color="white">account_circle</v-icon>
            À pedido do Síndico
          </span>

          <div class="footer-button mt-4">
            <v-btn round large dark depressed block outline
              color="white" class="align-left">Mais informações</v-btn>
            <v-progress-circular
              :rotate="-90"
              :size="80"
              :width="4"
              :value="25"
              color="accent">
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
