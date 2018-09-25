<template>
  <section class="quote">
    <nav class="d-flex justify-content-center">
      <v-tabs
        slot="extension"
        v-model="tabs"
        :icons-and-text="true"
        slider-color="green accent-3">
        <v-tab href="#tab-1">
          Em aberto
        </v-tab>
        <v-tab href="#tab-2">
          Em Votação
        </v-tab>
      </v-tabs>
    </nav>
    <main>
      <v-tabs-items v-model="tabs" class="white elevation-1">
        <v-tab-item
          v-for="i in 3"
          :id="'tab-' + i"
          :key="i">
          <router-link to="/quote/review" class="quote-item card card-image card-lg" style="background-image: url(//picsum.photos/300/400)">
            <div class="quote-item-info">
              <div class="quote-item-title">
                <h5>Compra de</h5>
                <h2> Guarda-sóis</h2>
              </div>

              <span class="quote-item-reference align-text-top">
                <v-icon :size="21" color="white">account_circle</v-icon> À pedido do Síndico</span>

              <FooterButton
                title="Mais informações"
                classes="btn-outline-simple btn-rounded btn-lg center-btn"
                showTimer="true"
                timerProgress="25"
              />
            </div>
          </router-link>
        </v-tab-item>
      </v-tabs-items>
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
