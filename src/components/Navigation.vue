<template>
  <nav class="navigation">
    <div class="container d-flex justify-content-between align-items-center">

      <template v-if="step != 0">
        <div id="menu-control" @click="changeStep(-1)" :class="{ 'open-menu-control': menuOpen }" class="open-menu-control">
          <span></span>
        </div>
      </template>
      <template v-else-if="menuBack">
        <div id="menu-control" @click="$emit('goBack')" :class="{ 'open-menu-control': menuOpen }" class="open-menu-control">
          <span></span>
        </div>
      </template>
      <template v-else>
        <div id="menu-control" @click="menuToggle" :class="{ 'open-menu-control': menuOpen }">
          <span></span>
        </div>
      </template>

      <h4 class="page-title">{{ title }}</h4>
      <div id="notification-trigger" class="notification" @click="notificationToggle" :class="{ open: notificationOpen }">
        <v-badge overlap color="red accent-4">
          <span slot="badge" class="caption">2</span>
          <v-icon :size="28" color="black">
              notifications
          </v-icon>
        </v-badge>
        <div class="notification-circle"></div>
        <div class="notification-close">
          <i class="fa fa-close"></i>
          <v-icon :size="28" color="white">
              close
          </v-icon>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'navigation',
  props: ['title', 'menuBack'],
  methods: {
    ...mapMutations([
      'menuToggle', 'notificationToggle', 'changeStep'
    ])
  },
  computed: {
    menuOpen () {
      return this.$store.state.menuOpen
    },
    notificationOpen () {
      return this.$store.state.notificationOpen
    },
    step () {
      return this.$store.state.step
    }
  }
}
</script>
