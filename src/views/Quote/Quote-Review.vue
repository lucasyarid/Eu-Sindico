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

      <div v-else class="app-cards horizontal-scroll pb-1">
        <quote-item
          v-for="option in order.options"
          :key="option.id"
          :order-id="order.id"
          :quote-id="option.id"
          :company-name="option.companyName"
          :company-phone="option.companyPhone"
          :company-web-site="option.companyWebSite"
          :estimated-days="option.estimatedDays"
          :price="option.price"
          :voted="option.voted"
          :files="option.optionAttachments"/>
      </div>
    </v-container>
  </section>
</template>

<script>
import { dateCalc } from '@/mixins/dateCalc'
import Gallery from '@/components/Gallery.vue'
import axios from '@/axios-auth'
import FooterButton from '@/components/FooterButton.vue'
import QuoteItem from '@/components/Quote/Quote-Item.vue'

export default {
  name: 'quote-review',
  mixins: [dateCalc],
  components: {
    Gallery,
    FooterButton,
    QuoteItem
  },
  data: function () {
    return {
      title: 'Aprovar Orçamentos',
      menuBack: true,
      order: {
        id: 0,
        title: '',
        attachments: [],
        type: {
          name: ''
        },
        options: [{
          id: 0,
          companyName: '',
          companyPhone: '',
          companyWebSite: '',
          estimatedDays: 0,
          optionAttachments: [],
          price: 0,
          voted: true
        }]
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
        .get('/orders/' + this.$route.params.orderId)
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
