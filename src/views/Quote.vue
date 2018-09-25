<template>
  <section class="quote">
    <nav class="selector d-flex justify-content-center">
      <a href="#" class="selector-option active">Em aberto</a>
      <a href="#" class="selector-option">Em votação</a>
    </nav>
    <main>
      <router-link to="/quote/review" class="quote-item card card-image card-lg" style="background-image: url(//picsum.photos/300/400)">
        <div class="quote-item-info">
          <div class="quote-item-title">
            <h5>Compra de</h5>
            <h2> Guarda-sóis</h2>
          </div>

          <span class="quote-item-reference align-text-top">
            <v-icon :size="21" color="white">account_circle</v-icon> À pedido do Síndico</span>

          <router-link to="/quote/review">
            <FooterButton
              title="Mais informações"
              classes="btn-outline-simple btn-rounded btn-lg center-btn"
              showTimer="true"
              timerProgress="25"
            />
          </router-link>
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
      title: 'Orçamentos'
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
