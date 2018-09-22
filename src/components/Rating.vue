<template>
  <span class="rating" v-if="!vote">
    <span v-for="n in stars" v-bind:key="n" class="fa fa-star star active"></span>
    <span v-for="n in inactiveStars" v-bind:key="n" class="fa fa-star star"></span>
  </span>
  <span class="rating vote" v-else>
    <a href="#" v-for="n in stars" v-bind:key="n" class="fa fa-star star active"></a>
    <a href="#" v-for="n in inactiveStars" v-bind:key="n" class="fa fa-star star"></a>
  </span>
</template>

<script>
export default {
  name: 'Rating',
  props: [
    'stars',
    'vote'
  ],
  data: function () {
    return {
      inactiveStars: 0
    }
  },
  methods: {
    subtractStars () {
      this.inactiveStars = 5 - this.stars
    }
  },
  created () {
    this.subtractStars()
  }
}
</script>
