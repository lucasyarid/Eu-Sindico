<template>
  <section class="order-vote">
    <Gallery :classes="classes" galeryClasses="pull-up large"/>
    <main>

      <v-container text-xs-center>
        <v-avatar size="60" color="grey lighten-3" class="order-vote-type">
          <v-icon color="grey">work</v-icon>
        </v-avatar>
        <h1 class="font-weight-bold mb-2">Serviço de reforma</h1>
        <div class="text-xs-center">
          <v-rating small
            class="d-inline-block pr-2"
            :dense="true"
            :readonly="true"
            color="accent"
            background-color="accent"
            v-model="rating"></v-rating> <span class="d-inline-block">06 votos</span>
        </div>
      </v-container>

      <v-layout row justify-center mt-1 mb-2 text-xs-center class="order-vote-overview">
        <v-flex xs3>
          <v-badge :bottom="true" :overlap="true" class="mb-3" color="accent">
            <span slot="badge"><v-icon color="white">check</v-icon></span>
            <v-avatar size="60" color="grey lighten-3">
              <v-icon color="grey">thumb_up</v-icon>
            </v-avatar>
          </v-badge>
          <p class="pt-1 mb-0">Pedido<br/>aprovado</p>
        </v-flex>
        <v-flex xs3>
          <v-badge :bottom="true" :overlap="true" class="mb-3" color="accent">
            <span slot="badge"><v-icon color="white">check</v-icon></span>
            <v-avatar size="60" color="grey lighten-3">
              <v-icon color="grey">assignment</v-icon>
            </v-avatar>
          </v-badge>
          <p class="pt-1 mb-0">Orçamento<br/>aprovado</p>
        </v-flex>
        <v-flex xs3>
          <v-badge :bottom="true" :overlap="true" class="mb-3" color="red">
            <span slot="badge"><v-icon color="white">close</v-icon></span>
            <v-avatar size="60" color="grey lighten-3">
              <v-icon color="grey">verified_user</v-icon>
            </v-avatar>
          </v-badge>
          <p class="pt-1 mb-0">Realizado<br/>no prazo</p>
        </v-flex>
      </v-layout>

      <div class="container justify-content-center text-xs-center mb-2">
        <h6>A pedido de</h6>
        <h1 class="mt-2">Carlos da Silva</h1>
      </div>

      <div class="justify-content-center text-xs-center">
        <v-rating x-large
          color="accent"
          background-color="accent"
          v-model="ratingVote"></v-rating>
      </div>

      <v-container>
        <div class="footer-button">
          <v-btn round large dark depressed block
            tag="button"
            color="accent">Confirmar voto</v-btn>
        </div>
      </v-container>

    </main>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
import Gallery from '@/components/Gallery'
import FooterButton from '@/components/FooterButton'

export default {
  name: 'order-complete-vote',
  components: {
    Gallery,
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
      'setStep', 'setClasses'
    ]),
    setName () {
      this.$emit('getTitle', this.title)
    },
    setMenu () {
      this.$emit('getMenu', this.menuBack)
    }
  },
  mounted () {
    this.setName()
    this.setClasses(this.classes)
    this.setMenu()
  },
  destroyed () {
    this.menuBack = false
    this.setClasses('')
    this.setMenu()
  }
}
</script>
