<template>
  <div
    :class="{ 'card-active': voted }"
    class="quote-review-item card card-full card-grey card-disabled">
    <div class="quote-review-info card-inner-card">
      <h4 class="quote-review-info-title mb-3">{{ companyName }}</h4>

      <ul class="quote-review-list">
        <li class="quote-review-list-item">
          <v-icon :size="21" color="primary">web</v-icon>
          <p class="d-inline-block pl-2 primary--text mb-2"><a :href="companyWebSite" target="_blank">Visitar website</a></p>
        </li>
        <li class="quote-review-list-item">
          <v-icon :size="21" color="primary">settings_phone</v-icon>
          <p class="d-inline-block pl-2 primary--text">{{ companyPhone }}</p>
        </li>
      </ul>

      <h6 class="text-uppercase pb-1 mt-2">Tempo estimado</h6>
      <p>{{ estimatedDays }} dias</p>

      <div class="quote-review-attachments scrollable">
        <h6 class="text-uppercase mt-4">Anexos</h6>
        <li
          class="quote-review-attachment attachment-list-item mb-1"
          v-for="(file, key) in files"
          :key="key">
          <v-icon color="primary" class="pr-2">attachment</v-icon>
          <p class="d-inline-block attachment-list-item-title mb-0">
            <a :href="file.url" target="_blank">
              Anexo {{ key + 1 }}.{{ file.fileType }}
            </a>
          </p>
        </li>
      </div>

      <h6 class="text-uppercase pb-1 mt-2">Custo</h6>
      <p>R${{ price }},00</p>
    </div>
    <v-layout justify-center>
      <v-flex xs10>
        <v-btn round large depressed block
          v-if="voted"
          tag="button"
          class="text-xs-center my-3 accent--text"
          color="white"><v-icon color="accent">check</v-icon> Voto enviado!</v-btn>
        <v-btn round large dark depressed block
          v-else
          tag="button"
          class="text-xs-center my-3"
          color="accent"
          @click="voteOnQuote">Votar nessa opção</v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import axios from '@/axios-auth'

export default {
  name: 'QuoteItem',
  props: {
    orderId: {
      type: Number,
      required: true
    },
    quoteId: {
      type: Number,
      required: true
    },
    companyName: {
      type: String,
      required: true
    },
    companyPhone: {
      type: String,
      required: true
    },
    companyWebSite: {
      type: String,
      required: true
    },
    estimatedDays: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    files: {
      type: Array,
      required: false
    },
    voted: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    voteOnQuote () {
      axios
        .post('/orders/' + this.orderId + '/options/' + this.quoteId + '/vote', (data) => {
          console.log(data)
        })
        .then(res => {
          console.log(res)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
