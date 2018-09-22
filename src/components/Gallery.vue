<template>
  <div class="gallery">
    <a href="#" class="gallery-box" :class="classes" style="background-image: url(//picsum.photos/640/560)">
      <div v-if="info" class="gallery-box-info">
        <h1>Guarda-sóis</h1>
        <span class="gallery-box-reference align-text-top"><i class="fa fa-user-circle"></i> À pedido do Síndico</span>
      </div>
      <div class="gallery-box-count"><i class="fa fa-picture-o"></i>02 fotos</div>
    </a>
    <div class="gallery-lightbox" style="display: none;">
      <header>
        <div class="container-fluid d-flex align-items-center">
          <h4 class="gallery-title">Guarda-sóis</h4>
          <i class="ml-auto fa fa-close gallery-close"></i>
        </div>
      </header>
      <main class="h-100">
        <div class="swiper-container h-100">
          <div class="swiper-wrapper h-100">
            <div class="swiper-slide">
              <img data-src="//picsum.photos/640/560" class="swiper-lazy">
              <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </div>
            <div class="swiper-slide">
              <img data-src="//picsum.photos/320/560" class="swiper-lazy">
              <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </div>
            <div class="swiper-slide">
              <img data-src="//picsum.photos/600/560" class="swiper-lazy">
              <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  props: [
    'info',
    'classes'
  ]
}
</script>
