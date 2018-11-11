<template>
  <div class="gallery">
    <div class="gallery-box"
      @click="lightboxToggle"
      :class="galeryClasses"
      :style="'background-image: url(' + this.images[0].url + ')'">
      <div v-if="info" class="gallery-box-info">
        <h5 class="font-weight-bold">{{ name }}</h5>
        <h1 class="font-weight-bold">{{ title }}</h1>
        <span class="gallery-box-reference align-text-top">
          <v-icon :size="21" color="white">account_circle</v-icon>
          À pedido do Síndico
        </span>
      </div>
      <div class="gallery-box-count"><v-icon small color="white" class="gallery-close">collections</v-icon>
        {{ images.length }} fotos
      </div>
    </div>

    <div class="gallery-lightbox" v-if="lightboxOpen">
      <v-carousel hide-delimiters>
        <v-carousel-item
          v-for="(image, i) in images"
          :key="i"
          :src="image.url"
        ></v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Gallery',
  props: {
    info: {
      type: Boolean,
      required: false,
      default: false
    },
    classes: {
      type: String,
      required: false,
      default: ''
    },
    galeryClasses: {
      type: String,
      required: false,
      default: ''
    },
    name: {
      type: String,
      required: false,
      default: 'Tipo de pedido'
    },
    title: {
      type: String,
      required: false,
      default: 'Título do pedido'
    },
    images: {
      type: Array,
      required: false,
      default: () => []
    }
  },
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
        this.setClasses(this.classes)
      }
    }
  }
}
</script>
