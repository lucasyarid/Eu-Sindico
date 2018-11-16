<template>
  <router-link
    :to="to"
    :style="backgroundImage"
    class="square order-item">
    <v-layout class="order-item-info">
      <v-flex xs9 pt-4>
        <h5>{{ name }}</h5>
        <h4 class="font-weight-bold pt-1"> {{ title }}</h4>
      </v-flex>
      <v-flex xs3>
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
      </v-flex>
    </v-layout>
  </router-link>
</template>

<script>
import { dateCalc } from '@/mixins/dateCalc'

export default {
  name: 'FullWidth',
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
