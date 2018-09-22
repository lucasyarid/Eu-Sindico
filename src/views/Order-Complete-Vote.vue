<template>
  <section class="order-vote">
    <Gallery classes="pull-up large"/>
    <main>

      <div class="container justify-content-center text-center">
        <div class="order-vote-type bubble active">
          <i class="fa fa-handshake-o mt-3"></i>
        </div>
        <h2>Serviço de reforma</h2>
        <Rating :stars="3"/> 06 votos
      </div>

      <div class="order-vote-overview d-flex justify-content-center mt-4 mb-4 text-center">
        <div class="mr-2 ml-2">
          <div class="bubble">
            <i class="fa fa-thumbs-up mt-3"></i>
            <span class="badge badge-pill badge-success badge-bottom badge-right"><i class="fa fa-check"></i></span>
          </div>
          <p class="pt-2 mb-0">Pedido<br/>aprovado</p>
        </div>
        <div class="mr-2 ml-2">
          <div class="bubble">
            <i class="fa fa-newspaper-o mt-3"></i>
            <span class="badge badge-pill badge-success badge-bottom badge-right"><i class="fa fa-check"></i></span>
          </div>
          <p class="pt-2 mb-0">Orçamento<br/>aprovado</p>
        </div>
        <div class="mr-2 ml-2">
          <div class="bubble">
            <i class="fa fa-shield mt-3"></i>
            <span class="badge badge-pill badge-danger badge-bottom badge-right"><i class="fa fa-close"></i></span>
          </div>
          <p class="pt-2 mb-0">Realizado<br/>no prazo</p>
        </div>
      </div>

      <div class="container justify-content-center text-center mb-5">
        <h6>A pedido de</h6>
        <h1>Carlos da Silva</h1>
      </div>

      <div class="container justify-content-center text-center">
        <Rating :stars="3" vote="true"/>
      </div>

      <FooterButton
        class="mt-5"
        title="Confirmar Voto"
        classes="btn-success btn-rounded btn-lg center-btn center-text"
      />

    </main>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
import Gallery from '@/components/Gallery'
import Rating from '@/components/Rating'
import FooterButton from '@/components/FooterButton'

export default {
  name: 'order-complete-vote',
  components: {
    Gallery,
    Rating,
    FooterButton
  },
  data: function () {
    return {
      title: 'Pedido Concluído',
      classes: ['color-layout', 'hide-title'],
      menuBack: true
    }
  },
  methods: {
    ...mapMutations([
      'setStep'
    ]),
    setName () {
      this.$emit('getTitle', this.title)
    },
    setClasses () {
      this.$emit('getClasses', this.classes)
    },
    setMenu () {
      this.$emit('getMenu', this.menuBack)
    }
  },
  mounted () {
    this.setName()
    this.setClasses()
    this.setMenu()
  },
  destroyed () {
    this.classes = ['']
    this.menuBack = false
    this.setClasses()
    this.setMenu()
  }
}
</script>
