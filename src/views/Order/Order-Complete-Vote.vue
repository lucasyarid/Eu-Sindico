<template>
  <section class="order-vote">
    <Gallery
      galeryClasses="pull-up large"
      :images="images"/>
    <v-avatar size="60" color="grey lighten-3" class="order-vote-type">
      <v-icon color="grey">work</v-icon>
    </v-avatar>
    <main class="scrollable icon">

      <v-container text-xs-center>
        <h1 class="font-weight-bold mb-2">{{ order.type.name }} de {{ order.title }}</h1>
        <div class="text-xs-center">
          <v-rating small
            class="d-inline-block pr-2"
            :dense="true"
            :readonly="true"
            color="accent"
            background-color="accent"
            v-model="ratingAverage"></v-rating>
            <span v-if="order.rate.quantity === 0" class="d-inline-block">Nenhum voto</span>
            <span v-else-if="order.rate.quantity === 1" class="d-inline-block">1 voto</span>
            <span v-else class="d-inline-block">{{ order.rate.quantity }} votos</span>
        </div>
      </v-container>

      <v-layout row justify-center mt-2 mb-2 text-xs-center class="order-vote-overview">
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
          <v-badge :bottom="true" :overlap="true" class="mb-3" color="accent">
            <span slot="badge"><v-icon color="white">check</v-icon></span>
            <v-avatar size="60" color="grey lighten-3">
              <v-icon color="grey">verified_user</v-icon>
            </v-avatar>
          </v-badge>
          <p class="pt-1 mb-0">Realizado<br/>no prazo</p>
        </v-flex>
      </v-layout>

      <!-- <div class="container justify-content-center text-xs-center mb-2">
        <h6>A pedido de</h6>
        <h1 class="mt-2">Carlos da Silva</h1>
      </div> -->

      <div class="container justify-content-center text-xs-center mt-5">
        <h2>Faça sua avaliação</h2>
      </div>

      <div class="justify-content-center text-xs-center mb-3">
        <v-rating x-large
          color="accent"
          background-color="accent"
          v-model="ratingVote"></v-rating>
      </div>
      <v-container v-if="!order.rated">
        <div class="footer-button">
          <v-btn round large depressed block
            :disabled="order.rated"
            tag="button"
            color="accent"
            @click="rate">Confirmar voto</v-btn>
        </div>
      </v-container>
      <div v-else class="footer-button-voted">
        <h4 class="accent text-xs-center white--text py-3">
          <v-icon color="white">check</v-icon> Voto Enviado!
        </h4>
      </div>

    </main>
  </section>
</template>

<script>
import axios from '@/axios-auth'
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
      ratingVote: 3,
      order: {
        title: '',
        attachments: [],
        type: {
          name: ''
        },
        rate: {
          quantity: 0,
          stars: []
        }
      }
    }
  },
  computed: {
    images () {
      return this.order.attachments.filter((attachment) => {
        if (attachment.fileType === 'jpg' || attachment.fileType === 'jpeg' || attachment.fileType === 'png') {
          return attachment
        }
      })
    },
    ratingAverage () {
      var stars = this.order.rate.stars
      var sum = 0
      for (var i = 0; i < stars.length; i++) {
        sum += stars[i]
      }
      return Math.floor(sum / stars.length)
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
    },
    getOrder () {
      axios
        .get('/orders/' + this.$route.params.id)
        .then(res => {
          console.log(res.data)
          this.order = res.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    rate () {
      axios
        .post('/orders/' + this.order.id + '/rate', {
          stars: this.ratingVote
        })
        .then(res => {
          console.log(res)
          this.order.rated = true
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.setName()
    this.setClasses(this.classes)
    this.setMenu()
    this.getOrder()
  },
  destroyed () {
    this.menuBack = false
    this.setClasses('')
    this.setMenu()
  }
}
</script>
