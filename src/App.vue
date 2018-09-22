<template>
  <div id="app" class="app-container"
    :class="[childClasses, { 'open-menu': menuOpen }]">
    <Menu/>
    <div class="content" id="content">
      <Notification/>
      <Navigation
        :menuBack="menuBack"
        :title="title"
        @goBack="goBack"/>
      <router-view
        :childClasses="childClasses"
        @getMenu="menuBack = $event"
        @getTitle="title = $event"
        @getClasses="childClasses = $event"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Notification from '@/components/Notification.vue'
import Navigation from '@/components/Navigation.vue'
import Menu from '@/components/Menu.vue'

export default {
  name: 'app',
  components: {
    Navigation,
    Notification,
    Menu
  },
  data: function () {
    return {
      title: String,
      childClasses: Array,
      menuBack: false
    }
  },
  methods: {
    goBack () {
      window.history.back()
    },
    goForwardStep () {
      this.step++
    },
    goBackStep () {
      this.step--
    }
  },
  computed: {
    menuOpen () {
      return this.$store.state.menuOpen
    },
    notificationOpen () {
      return this.$store.state.notificationOpen
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
