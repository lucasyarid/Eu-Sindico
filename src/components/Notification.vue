<template>
  <nav id="notifications" class="notifications" :class="{ open: notificationOpen }">
    <h1>Notificações</h1>
    <ul class="notification-list">
      <li class="notification-item">
        <a href="#" class="d-flex">
          <i class="notification-item-icon active align-self-center fa fa-exclamation-triangle"></i>
          <h5 class="notification-info">
            <b class="notification-info-title">Nova proposta para analisar</b>
            <i class="notification-info-deadline">Prazo de <b>5 dias</b></i>
          </h5>
          <time class="notification-time ml-auto">1 min</time>
        </a>
      </li>
      <li class="notification-item">
        <a href="#" class="d-flex">
          <i class="notification-item-icon active align-self-center fa fa-gavel"></i>
          <h5 class="notification-info">
            <b class="notification-info-title">Nova proposta para analisar</b>
            <i class="notification-info-deadline">Prazo de <b>5 dias</b></i>
          </h5>
          <time class="notification-time ml-auto">2d</time>
        </a>
      </li>
      <li class="notification-item">
        <a href="#" class="d-flex">
          <i class="notification-item-icon active align-self-center fa fa-check"></i>
          <h5 class="notification-info">
            <b class="notification-info-title">Nova proposta para analisar</b>
            <i class="notification-info-deadline">Prazo de <b>5 dias</b></i>
          </h5>
          <time class="notification-time ml-auto">2d</time>
        </a>
      </li>
      <li class="notification-item">
        <a href="#" class="d-flex">
          <i class="notification-item-icon danger align-self-center fa fa-times-circle-o"></i>
          <h5 class="notification-info">
            <b class="notification-info-title">Nova proposta para analisar</b>
            <i class="notification-info-deadline">Prazo de <b>5 dias</b></i>
          </h5>
          <time class="notification-time ml-auto">2d</time>
        </a>
      </li>
      <li class="notification-item">
        <a href="#" class="d-flex">
          <i class="notification-item-icon expired align-self-center fa fa-exclamation-triangle"></i>
          <h5 class="notification-info">
            <b class="notification-info-title">Nova proposta para analisar</b>
            <i class="notification-info-deadline">Prazo de <b>5 dias</b></i>
          </h5>
          <time class="notification-time ml-auto">1 sem</time>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Notification',
  computed: {
    notificationOpen () {
      return this.$store.state.notificationOpen
    }
  }
}
</script>
