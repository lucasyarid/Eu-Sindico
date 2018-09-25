<template>
  <section class="order-vote">
    <Gallery classes="pull-up large"/>
    <main>

      <div class="container justify-content-center text-center">
        <v-avatar size="60" color="grey lighten-3" class="order-vote-type">
          <v-icon color="grey">work</v-icon>
        </v-avatar>
        <h2>Serviço de reforma</h2>
        <div class="text-xs-center">
          <v-rating small
            :dense="true"
            :readonly="true"
            color="green accent-3"
            background-color="green accent-3"
            v-model="rating"></v-rating> <span>06 votos</span>
        </div>
      </div>

      <div class="order-vote-overview d-flex justify-content-center mt-4 mb-4 text-center">
        <div class="mr-2 ml-2">
          <v-badge :bottom="true" :overlap="true" class="mb-3" color="green accent-3">
            <span slot="badge"><v-icon color="white">check</v-icon></span>
            <v-avatar size="60" color="grey lighten-3">
              <v-icon color="grey">thumb_up</v-icon>
            </v-avatar>
          </v-badge>
          <p class="pt-2 mb-0">Pedido<br/>aprovado</p>
        </div>
        <div class="mr-2 ml-2">
          <v-badge :bottom="true" :overlap="true" class="mb-3" color="green accent-3">
            <span slot="badge"><v-icon color="white">check</v-icon></span>
            <v-avatar size="60" color="grey lighten-3">
              <v-icon color="grey">assignment</v-icon>
            </v-avatar>
          </v-badge>
          <p class="pt-2 mb-0">Orçamento<br/>aprovado</p>
        </div>
        <div class="mr-2 ml-2">
          <v-badge :bottom="true" :overlap="true" class="mb-3" color="red">
            <span slot="badge"><v-icon color="white">close</v-icon></span>
            <v-avatar size="60" color="grey lighten-3">
              <v-icon color="grey">verified_user</v-icon>
            </v-avatar>
          </v-badge>
          <p class="pt-2 mb-0">Realizado<br/>no prazo</p>
        </div>
      </div>

      <div class="container justify-content-center text-center mb-5">
        <h6>A pedido de</h6>
        <h1>Carlos da Silva</h1>
      </div>

      <div class="justify-content-center text-center">
        <v-rating x-large
          color="green accent-3"
          background-color="green accent-3"
          v-model="ratingVote"></v-rating>
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
      menuBack: true,
      rating: 4,
      ratingVote: 3
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
