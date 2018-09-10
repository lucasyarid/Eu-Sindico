<template>
  <div id="gallery" style="display: none;">
    <header>
      <div class="container-fluid d-flex align-items-center">
        <h3>Guarda-sóis</h3>
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
</template>

<script>
export default {
  name: 'Gallery'
}
</script>
