<template>
  <section class="quote-review">
    <Gallery info="true"/>
    <main class="pt-3 pb-3">
      <p class="container excerpt">O muro do fundo da garagem foi prejudicado pelas recentes fortes chuvas e precisa ser reforçado pois pode cair sob os carros.</p>
      <div class="app-cards">
        <div class="quote-review-item card card-lg card-grey card-disabled">
          <div class="quote-review-info card-inner-card">
            <h3 class="quote-review-info-title">Jardim do Sul Alvenaria</h3>

            <ul class="quote-review-list">
              <li class="quote-review-list-item">
                <a href="#"><v-icon :size="21" color="primary">web</v-icon> Visitar website</a>
              </li>
              <li class="quote-review-list-item">
                <a href="#"><v-icon :size="21" color="primary">settings_phone</v-icon> (11) 3666-1000</a>
              </li>
            </ul>

            <h6>Tempo estimado</h6>
            <p>12 dias</p>

            <h6>Anexos</h6>
            <ul class="quote-review-list">
              <li class="quote-review-list-item">
                <a href="#">
                  <v-icon :size="21" color="primary">attachment</v-icon> Laudo para Cond...Tintoreto.pdf
                </a>
              </li>
            </ul>

            <h6>Custo</h6>
            <p>R$700,00</p>
          </div>
          <div class="p-3">
            <FooterButton
              title="Confirmar"
              classes="btn-success btn-rounded btn-lg center-text"
              secondaryButton="true"
              secondaryTitle="X"
              secondaryClasses="btn-outline-danger btn-rounded btn-lg center-text"
            />
          </div>
        </div>
      </div>
    </main>
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
