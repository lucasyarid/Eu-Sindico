<template>
  <div class="home">

    <Gallery/>
    <Loading/>

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
import Loading from '@/components/Loading.vue'
import Gallery from '@/components/Gallery.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import Notification from '@/components/Notification.vue'
import AppHeader from '@/components/AppHeader.vue'
import Menu from '@/components/Menu.vue'

export default {
  name: 'home',
  components: {
    Loading,
    Gallery,
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
