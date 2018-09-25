<template>
  <v-app id="app"
    :class="[childClasses, { 'open-menu': menuOpen }]">
    <Menu/>
    <div class="content" id="content">
      <Notification/>
      <Navigation
        :menuBack="menuBack"
        :title="title"
        @goBack="goBack"/>
      <router-view
        @click.native="menuClose"
        @getMenu="menuBack = $event"
        @getTitle="title = $event"
        @getClasses="childClasses = $event"/>
    </div>
  </v-app>
</template>

<script>
import { mapMutations } from 'vuex'
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
    ...mapMutations([
      'menuClose'
    ]),
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
</style>

<style lang="scss">
  @import 'main.scss';
</style>
