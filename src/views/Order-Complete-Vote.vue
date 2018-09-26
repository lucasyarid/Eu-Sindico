<template>
  <section class="order-vote">
    <Gallery galeryClasses="pull-up large"/>
    <main>

      <v-container text-xs-center>
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
      </v-container>

      <v-layout row justify-center mt-4 mb-4 text-xs-center class="order-vote-overview">
        <v-flex xs3>
          <v-badge :bottom="true" :overlap="true" class="mb-3" color="green accent-3">
            <span slot="badge"><v-icon color="white">check</v-icon></span>
            <v-avatar size="60" color="grey lighten-3">
              <v-icon color="grey">thumb_up</v-icon>
            </v-avatar>
          </v-badge>
          <p class="pt-2 mb-0">Pedido<br/>aprovado</p>
        </v-flex>
        <v-flex xs3>
          <v-badge :bottom="true" :overlap="true" class="mb-3" color="green accent-3">
            <span slot="badge"><v-icon color="white">check</v-icon></span>
            <v-avatar size="60" color="grey lighten-3">
              <v-icon color="grey">assignment</v-icon>
            </v-avatar>
          </v-badge>
          <p class="pt-2 mb-0">Orçamento<br/>aprovado</p>
        </v-flex>
        <v-flex xs3>
          <v-badge :bottom="true" :overlap="true" class="mb-3" color="red">
            <span slot="badge"><v-icon color="white">close</v-icon></span>
            <v-avatar size="60" color="grey lighten-3">
              <v-icon color="grey">verified_user</v-icon>
            </v-avatar>
          </v-badge>
          <p class="pt-2 mb-0">Realizado<br/>no prazo</p>
        </v-flex>
      </v-layout>

      <div class="container justify-content-center text-xs-center mb-5">
        <h6>A pedido de</h6>
        <h1>Carlos da Silva</h1>
      </div>

      <div class="justify-content-center text-xs-center">
        <v-rating x-large
          color="green accent-3"
          background-color="green accent-3"
          v-model="ratingVote"></v-rating>
      </div>

      <v-container>
        <div class="footer-button">
          <v-btn round large dark depressed block
            tag="button"
            color="green accent-3"
            @click.native="changeStep(+1)">Enviar Orçamento</v-btn>
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
