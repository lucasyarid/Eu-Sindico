<template>
  <nav id="notifications" :class="{ open: notificationOpen }">
    <h3>Notificações</h3>
    <ul>
      <li class="active">
        <a href="#" class="d-flex">
          <i class="align-self-center fa fa-exclamation-triangle"></i>
          <span>
            <strong>Nova proposta para analisar</strong>
            <i>Prazo de 5 dias</i>
          </span>
          <time class="ml-auto">1 min</time>
        </a>
      </li>
      <li class="active">
        <a href="#" class="d-flex">
          <i class="align-self-center fa fa-gavel"></i>
          <span>
            <strong>Nova proposta para analisar</strong>
            <i>Prazo de 5 dias</i>
          </span>
          <time class="ml-auto">2d</time>
        </a>
      </li>
      <li class="active">
        <a href="#" class="d-flex">
          <i class="align-self-center fa fa-check"></i>
          <span>
            <strong>Nova proposta para analisar</strong>
            <i>Prazo de 5 dias</i>
          </span>
          <time class="ml-auto">2d</time>
        </a>
      </li>
      <li class="disable">
        <a href="#" class="d-flex">
          <i class="align-self-center fa fa-times-circle-o"></i>
          <span>
            <strong>Nova proposta para analisar</strong>
            <i>Prazo de 5 dias</i>
          </span>
          <time class="ml-auto">2d</time>
        </a>
      </li>
      <li class="expired">
        <a href="#" class="d-flex">
          <i class="align-self-center fa fa-exclamation-triangle"></i>
          <span>
            <strong>Nova proposta para analisar</strong>
            <i>Prazo de 5 dias</i>
          </span>
          <time class="ml-auto">1 sem</time>
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
