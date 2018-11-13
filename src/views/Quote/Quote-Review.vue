<template>
  <section class="quote-review">
    <Gallery info
      :images="images"
      :order="order"
      :name="order.type.name"
      :title="order.title"/>
    <v-container class="scrollable gallery pb-3 mb-4">
      <p>
         {{ order.description }}
      </p>

      <div v-if="order.currentStatus === 'Em Orçamento'">
        <ul class="order-review-files">
          <!-- <li class="order-review-file mb-1">
            <v-icon color="black" class="pr-2">check</v-icon>
            <p class="d-inline-block mb-0">Houve vistoria prévia</p>
          </li> -->
          <li
            class="order-review-attachment attachment-list-item mb-1"
            v-for="(attachment, key) in pdfs"
            :key="key">
            <v-icon color="primary" class="pr-2">attachment</v-icon>
            <p class="d-inline-block attachment-list-item-title mb-0">
              <a :href="attachment.url" target="_blank">
                Anexo {{ key + 1 }}.{{ attachment.fileType }}
              </a>
            </p>
          </li>
        </ul>

        <v-container fluid grid-list-xl>
          <v-layout row justify-center class="footer-button">
            <v-flex>
              <v-btn round large dark depressed block
                :to="'/order/' + order.id +'/quote/create'"
                tag="button"
                class="text-sm-left"
                color="accent">Enviar orçamento</v-btn>
              <v-progress-circular
                class="mt-3"
                :rotate="-90"
                :size="80"
                :width="4"
                :value="getDatePercentage(order.approvalDeadline, order.created)"
                color="accent">
                <div class="timer">
                  <div class="timer-content">
                    <small class="text-xs-center">Expira em</small>
                    <time class="text-xs-center">{{ getDaysLeft(order.approvalDeadline) }} dias</time>
                  </div>
                </div>
              </v-progress-circular>
            </v-flex>
          </v-layout>
        </v-container>
      </div>

      <div v-if="order.currentStatus === 'Em Votação'" class="app-cards horizontal-scroll">
        <div class="quote-review-item card card-full card-grey card-disabled">
          <div class="quote-review-info card-inner-card">
            <h4 class="quote-review-info-title mb-3">Jardim do Sul Alvenaria</h4>

            <ul class="quote-review-list">
              <li class="quote-review-list-item">
                <v-icon :size="21" color="primary">web</v-icon>
                <p class="d-inline-block pl-2 primary--text mb-2">Visitar website</p>
              </li>
              <li class="quote-review-list-item">
                <v-icon :size="21" color="primary">settings_phone</v-icon>
                <p class="d-inline-block pl-2 primary--text">(11) 3666-1000</p>
              </li>
            </ul>

            <h6 class="text-uppercase pb-1 mt-2">Tempo estimado</h6>
            <p>12 dias</p>

            <h6 class="text-uppercase mt-4">Anexos</h6>
            <ul class="quote-review-list">
              <li class="quote-review-list-item">
                <a href="#">
                  <v-icon :size="21" color="primary">attachment</v-icon>
                  <p class="d-inline-block pl-2 primary--text">Laudo para Cond...pdf</p>
                </a>
              </li>
            </ul>

            <h6 class="text-uppercase pb-1 mt-2">Custo</h6>
            <p>R$700,00</p>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script>
import { dateCalc } from '@/mixins/dateCalc'
import Gallery from '@/components/Gallery.vue'
import axios from '@/axios-auth'
import FooterButton from '@/components/FooterButton.vue'

export default {
  name: 'quote-review',
  mixins: [dateCalc],
  components: {
    Gallery,
    FooterButton
  },
  data: function () {
    return {
      title: 'Aprovar Orçamentos',
      menuBack: true,
      order: {
        title: '',
        attachments: [],
        type: {
          name: ''
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
    pdfs () {
      return this.order.attachments.filter((attachment) => {
        if (attachment.fileType === 'pdf') {
          return attachment
        }
      })
    }
  },
  methods: {
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
    }
  },
  mounted () {
    this.setName()
    this.setMenu()
    this.getOrder()
  },
  destroyed () {
    this.menuBack = false
    this.setMenu()
  }
}
</script>
