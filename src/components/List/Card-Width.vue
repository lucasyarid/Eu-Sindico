<template>
  <router-link :to="to">
    <div class="card card-image card-md mb-3" :style="backgroundImage">
      <span class="order-list-info">
        <h4 class="font-weight-bold">{{ name }} {{ title }}</h4>
        <v-rating small
          v-if="showStars"
          :dense="true"
          :readonly="true"
          color="accent"
          background-color="accent"
          v-model="ratingAverage"></v-rating>
      </span>
    </div>
  </router-link>
</template>

<script>
import { dateCalc } from '@/mixins/dateCalc'

export default {
  name: 'CardWidth',
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
    showStars: {
      type: Boolean,
      default: false,
      required: false
    },
    stars: {
      type: Array,
      default: () => [],
      required: false
    }
  },
  computed: {
    ratingAverage () {
      var stars = this.stars
      var sum = 0
      for (var i = 0; i < stars.length; i++) {
        sum += stars[i]
      }
      return Math.floor(sum / stars.length)
    }
  }
}
</script>
