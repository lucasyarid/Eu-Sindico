<template>
  <div id="app" :class="childClasses">
    <div class="swiper-container" id="app-container">
      <div class="swiper-wrapper" :class="{ open: menuOpen }">
        <Menu
          :menuOpen="menuOpen"
          @menuToggle="menuOpen = !menuOpen"/>
        <div class="swiper-slide content" id="content">
          <Notification
            :notificationOpen="notificationOpen"/>
          <AppHeader
            :menuOpen="menuOpen"
            :menuBack="menuBack"
            :notificationOpen="notificationOpen"
            :title="title"
            @goBack="goBack"
            @notificationToggle="notificationOpen = !notificationOpen"
            @menuToggle="menuOpen = !menuOpen" />
          <router-view
            @getMenu="menuBack = $event"
            @getTitle="title = $event"
            @getClasses="childClasses = $event"
            :childClasses="childClasses"/>
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
      notificationOpen: false,
      title: String,
      childClasses: Array,
      menuBack: false
    }
  },
  methods: {
    goBack () {
      window.history.back()
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
