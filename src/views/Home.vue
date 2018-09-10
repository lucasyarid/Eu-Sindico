<template>
  <div class="home">

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
