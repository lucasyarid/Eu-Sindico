<template>
  <nav class="navigation">
    <v-container fluid grid-list-xl>
      <v-layout wrap row justify-space-between>

        <v-flex v-if="step != 0">
          <div id="menu-control" @click="changeStep(-1)" :class="{ 'open-menu-control': menuOpen }" class="open-menu-control">
            <span></span>
          </div>
        </v-flex>
        <v-flex v-else-if="lightboxOpen">
          <div id="menu-control" @click="lightboxToggle" :class="{ 'open-menu-control': menuOpen }" class="open-menu-control">
            <span></span>
          </div>
        </v-flex>
        <v-flex v-else-if="menuBack">
          <div id="menu-control" @click="$emit('goBack')" :class="{ 'open-menu-control': menuOpen }" class="open-menu-control">
            <span></span>
          </div>
        </v-flex>
        <v-flex v-else>
          <div id="menu-control" @click="menuToggle" :class="{ 'open-menu-control': menuOpen }">
            <span></span>
          </div>
        </v-flex>

        <v-flex>
          <h5 class="page-title text-xs-center text-uppercase font-weight-bold pt-1">{{ title }}</h5>
        </v-flex>
        <v-flex layout justify-end pr-4>
          <div id="notification-trigger" style="visibility: hidden" class="notification" @click="notificationToggle" :class="{ open: notificationOpen }">
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
        </v-flex>
      </v-layout>
    </v-container>
  </nav>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'navigation',
  props: ['title', 'menuBack'],
  methods: {
    ...mapMutations([
      'menuToggle', 'notificationToggle', 'changeStep', 'lightboxToggle'
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
    },
    lightboxOpen () {
      return this.$store.state.lightboxOpen
    }
  }
}
</script>
