<template>
  <header id="content-header">
    <div class="container d-flex justify-content-between align-items-center">
      <div id="menu-control" @click="$emit('menuToggle')">
        <span></span>
      </div>
      <h2>Eu Síndico</h2>
      <div id="notification-trigger" class="notification" @click="$emit('notificationToggle')" :class="{ open: notificationOpen }">
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
  props: ['notificationOpen'],
  methods: {
    checkNotification () {
      console.log(this.notificationOpen)
    }
  }
}
</script>
