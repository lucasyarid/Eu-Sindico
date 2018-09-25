<template>
  <div class="gallery">
    <div class="gallery-box" @click="lightboxToggle"  :class="galeryClasses" style="background-image: url(//picsum.photos/640/560)">
      <div v-if="info" class="gallery-box-info">
        <h1>Guarda-sóis</h1>
        <span class="gallery-box-reference align-text-top">
          <v-icon :size="21" color="white">account_circle</v-icon>
          À pedido do Síndico
        </span>
      </div>
      <div class="gallery-box-count"><v-icon small color="white" class="gallery-close">collections</v-icon>02 fotos</div>
    </div>

    <div class="gallery-lightbox" v-if="lightboxOpen">
      <v-carousel hide-delimiters>
        <v-carousel-item
          v-for="(galleryItem,i) in galleryItems"
          :key="i"
          :src="galleryItem.src"
        ></v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Gallery',
  props: [
    'info',
    'galeryClasses'
  ],
  data () {
    return {
      galleryItems: [
        { src: '//picsum.photos/640/560' },
        { src: '//picsum.photos/640/560' },
        { src: '//picsum.photos/640/560' },
        { src: '//picsum.photos/640/560' }
      ]
    }
  },
  methods: {
    ...mapMutations([
      'lightboxToggle', 'setClasses'
    ])
  },
  computed: {
    lightboxOpen () {
      return this.$store.state.lightboxOpen
    }
  },
  watch: {
    lightboxOpen: function () {
      if (this.lightboxOpen === true) {
        this.setClasses('color-layout')
      } else {
        this.setClasses('')
      }
    }
  }
}
</script>
