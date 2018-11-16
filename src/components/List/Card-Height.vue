<template>
  <router-link
    :to="to"
    class="quote-item card card-image card-lg"
    :style="backgroundImage">
    <div class="quote-item-info">
      <div class="quote-item-title">
        <h5>{{ name }}</h5>
        <h2 class="font-weight-bold"> {{ title }}</h2>
      </div>

      <span class="quote-item-reference align-text-top mt-2">
        <v-icon :size="21" color="white">account_circle</v-icon>
        À pedido do Síndico
      </span>

      <div class="footer-button mt-4">
        <v-btn round large dark depressed block outline
          color="white" class="align-left">Mais informações</v-btn>
        <v-progress-circular
          :rotate="-90"
          :size="80"
          :width="4"
          :value="getDatePercentage(date1, date2)"
          color="accent">
          <div class="timer">
            <div class="timer-content">
              <small class="text-xs-center">Expira em</small>
              <time class="text-xs-center">{{ getDaysLeft(date1) }} dias</time>
            </div>
          </div>
        </v-progress-circular>
      </div>
    </div>
  </router-link>
</template>

<script>
import { dateCalc } from '@/mixins/dateCalc'

export default {
  name: 'CardHeight',
  mixins: [dateCalc],
  props: {
    to: {
      type: String,
      default: '#',
      required: false
    },
    backgroundImage: {
      type: String,
      default: 'background-image: url(//picsum.photos/640/560)',
      required: false
    },
    name: {
      type: String,
      default: '#',
      required: false
    },
    title: {
      type: String,
      default: '#',
      required: false
    },
    date1: {
      type: String,
      default: '',
      required: false
    },
    date2: {
      type: String,
      default: '',
      required: false
    }
  }
}
</script>
