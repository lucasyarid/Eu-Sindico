<template>
  <div class="home">
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

    <div id="loading" style="display: none;">
      <div class="sending">
        <div class="box">
          <div class="spinner">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
          </div>
          <h5>Enviando...</h5>
        </div>
      </div>
      <div class="sended">
        <div class="box">
          <i class="fa fa-check"></i>
          <h5>Enviado!</h5>
        </div>
      </div>
    </div>
    <div class="swiper-container" id="app-container">
      <div class="swiper-wrapper" :class="{ open: menuOpen }">
        <Menu/>
        <div class="swiper-slide content" id="content">
          <Notification
            :notificationOpen="notificationOpen"/>
          <AppHeader
            :notificationOpen="notificationOpen"
            @notificationToggle="notificationOpen = !notificationOpen"
            @menuToggle="menuOpen = !menuOpen" />
          <HelloWorld/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Notification from '@/components/Notification.vue'
import AppHeader from '@/components/AppHeader.vue'
import Menu from '@/components/Menu.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    AppHeader,
    Notification,
    Menu
  },
  data: function () {
    return {
      menuOpen: false,
      notificationOpen: false
    }
  }
}
</script>
