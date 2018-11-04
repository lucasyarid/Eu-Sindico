<template>
  <section class="order-review">
    <Gallery info="true" :title="order.title"/>
    <main class="scrollable gallery">
      <v-container v-if="step == 0">
        <p class="order-review-description mb-4">
          {{ order.description }}
        </p>

        <h6 class="text-uppercase pb-2">Submetido por</h6>
        <p class="order-review-reference">Eduardo Fontenele</p>

        <ul class="order-review-files">
          <!-- <li class="order-review-file mb-1">
            <v-icon color="black" class="pr-2">check</v-icon>
            <p class="d-inline-block mb-0">Houve vistoria prévia</p>
          </li> -->
          <li class="order-review-file mb-1">
            <v-icon color="primary" class="pr-2">attachment</v-icon>
            <p class="d-inline-block mb-0">Laudo Empresa XYZ.pdf</p>
          </li>
        </ul>

        <!-- <h6 class="text-uppercase mt-4 pb-2">Ressalvas</h6>
        <blockquote>
          <p>
            "Contanto que não seja do mesmo tecido que tínhamos antes, estou de acordo."
          </p>
          <cite class="mt-4"><strong>Renan Altendorf </strong> (conselheiro)</cite>
        </blockquote>

        <div class="text-xs-center">
          <v-bottom-sheet hide-overlay v-model="sheet">
            <v-btn text-xs-center round large
              slot="activator"
              color="light-blue lighten-2"
              dark>
              Adicionar ressalva
            </v-btn>

            <v-form>
              <v-container>
                <h1>Suas ressalvas</h1>
                <v-textarea no-resize
                  rows="3"
                  v-model="comment"
                ></v-textarea>
                <v-layout justify-center class="footer-button">
                  <v-flex xs4>
                    <v-btn round large dark depressed outline block
                      class="text-sm-left"
                      color="red">Cancelar</v-btn>
                  </v-flex>
                  <v-flex xs8>
                    <v-btn round large dark depressed block
                      class="text-sm-left"
                      color="accent">Enviar</v-btn>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-form>
          </v-bottom-sheet>
        </div> -->

        <div class="footer-button mt-5">
          <v-form>
            <v-container pa-0>
              <v-layout justify-center class="footer-button">
                <v-flex xs4>
                  <v-btn round large dark depressed outline block
                    class="text-sm-left"
                    color="red">Declinar</v-btn>
                </v-flex>
                <v-flex xs8>
                  <v-btn round large dark depressed block
                    class="text-sm-left"
                    color="accent">Aceitar Solicitação</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </div>

      </v-container>
      <transition name="fade" mode="in-out">
        <Loading v-if="step == 1"/>
      </transition>
    </main>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
import axios from '../axios-auth'
import Gallery from '@/components/Gallery.vue'
import FooterButton from '@/components/FooterButton.vue'
import Loading from '@/components/Loading.vue'

export default {
  name: 'order-review',
  components: {
    Loading,
    Gallery,
    FooterButton
  },
  data: function () {
    return {
      title: 'Aprovar Pedido',
      menuBack: true,
      sheet: false,
      comment: '',
      order: {}
    }
  },
  computed: {
    step () {
      return this.$store.state.step
    }
  },
  methods: {
    ...mapMutations([
      'setStep', 'changeStep'
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
    this.setMenu()
    this.setStep(0)
    axios
      .get('/orders/' + this.$route.params.id)
      .then(res => {
        this.order = res.data
      })
      .catch(error => {
        console.log(error)
      })
    this.setName()
  },
  destroyed () {
    this.menuBack = false
    this.setMenu()
  }
}
</script>
