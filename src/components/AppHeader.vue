<template>
  <header id="content-header">
    <div class="container d-flex justify-content-between align-items-center">

      <template v-if="step != 0">
        <div id="menu-control" @click="decrementStep" :class="{ 'open-menu-control': menuOpen }" class="open-menu-control">
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

      <h2>{{ title }}</h2>
      <div id="notification-trigger" class="notification" @click="notificationToggle" :class="{ open: notificationOpen }">
        <i class="fa fa-bell"></i><span class="badge badge-pill badge-danger">1</span>
        <div class="notification-circle"></div>
        <div class="notification-close"><i class="fa fa-close"></i></div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  props: ['title', 'menuBack'],
  methods: {
    menuToggle () {
      this.$store.commit('menuToggle')
    },
    notificationToggle () {
      this.$store.commit('notificationToggle')
    },
    decrementStep () {
      this.$store.commit('decrementStep')
    }
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
