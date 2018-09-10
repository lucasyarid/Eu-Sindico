<template>
  <div id="app">
    <div class="home">
      <div class="swiper-container" id="app-container">
        <div class="swiper-wrapper" :class="{ open: menuOpen }">
          <Menu
            @menuToggle="menuOpen = !menuOpen"/>
          <div class="swiper-slide content" id="content">
            <Notification
              :notificationOpen="notificationOpen"/>
            <AppHeader
              :notificationOpen="notificationOpen"
              @notificationToggle="notificationOpen = !notificationOpen"
              @menuToggle="menuOpen = !menuOpen" />
            <router-view/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Notification from '@/components/Notification.vue'
import AppHeader from '@/components/AppHeader.vue'
import Menu from '@/components/Menu.vue'

export default {
  name: 'app',
  components: {
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

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700,800');
  @import '../assets/libraries/bootstrap/4.0.0/css/bootstrap.min.css';
  @import '../assets/libraries/font-awesome/4.7.0/css/font-awesome.min.css';
  @import '../assets/libraries/swiper/4.2.0/css/swiper.min.css';
  @import '../assets/libraries/blueimp-file-upload/9.21.0/css/jquery.fileupload.min.css';
</style>

<style lang="scss">
  @import 'main.scss';
</style>
