<template>
  <section class="order-review">
    <Gallery info="true"
      :order="order"
      :name="order.type.name"
      :title="order.title"/>
    <main class="scrollable gallery">
      <v-container v-if="step == 0">
        <p class="order-review-description mb-4">
          {{ order.description }}
        </p>

        <!-- <h6 class="text-uppercase pb-2">Submetido por</h6>
        <p class="order-review-reference">Eduardo Fontenele</p> -->

        <ul class="order-review-files">
          <!-- <li class="order-review-file mb-1">
            <v-icon color="black" class="pr-2">check</v-icon>
            <p class="d-inline-block mb-0">Houve vistoria prévia</p>
          </li> -->
          <li
            class="order-review-attachment attachment-list-item mb-1"
            v-for="(attachment, key) in order.attachments"
            :key="key">
            <template v-if="attachment.fileType === 'pdf'">
              <v-icon color="primary" class="pr-2">attachment</v-icon>
              <p class="d-inline-block attachment-list-item-title mb-0">
                <a :href="attachment.url">
                  Nome do Arquivo.{{ attachment.fileType }}
                </a>
              </p>
            </template>
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
                <v-flex xs8>
                  <v-btn round large dark depressed block
                    class="text-sm-left"
                    color="accent"
                    @click="orderApprove">
                    Aceitar Solicitação</v-btn>
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
import axios from '@/axios-auth'
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
      order: {
        title: '',
        type: {
          name: ''
        }
      }
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
    },
    getOrder () {
      axios
        .get('/orders/' + this.$route.params.id)
        .then(res => {
          console.log(res.data)
          this.order = res.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    orderApprove () {
      axios
        .post('/orders/' + this.order.id + '/approve', (data) => {
          console.log(data)
        })
        .then(res => {
          this.$router.push({ path: '/order' })
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  mounted () {
    this.getOrder()
    this.setName()
    this.setMenu()
    this.setStep(0)
  },
  destroyed () {
    this.menuBack = false
    this.setMenu()
  }
}
</script>
