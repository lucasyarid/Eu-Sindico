<template>
  <div class="swiper-slide menu" id="nav">
    <header style="background-image: url(//picsum.photos/640/480)">
      <div class="container">
        <div class="avatar" style="background-image: url(//api.adorable.io/avatars/64)"></div>
        <p class="house-number">Apartamento 101</p>
    </div>
    </header>
    <nav>
      <div class="container">
        <ul>
          <li @click="$emit('menuToggle')"><router-link to="/"><i class="fa fa-home"></i> Inicio</router-link></li>
          <li @click="$emit('menuToggle')"><a href="#"><i class="fa fa-folder"></i> Pedidos</a></li>
          <li @click="$emit('menuToggle')"><a href="#"><i class="fa fa-wpforms"></i> Orçamentos</a></li>
          <li @click="$emit('menuToggle')"><a href="#"><i class="fa fa-play"></i> Em Progresso</a></li>
          <li @click="$emit('menuToggle')"><a href="#"><i class="fa fa-check"></i> Concluidos</a></li>
          <li @click="$emit('menuToggle')"><a href="#"><i class="fa fa-cog"></i> Ajustes</a></li>
          <li @click="$emit('menuToggle')"><router-link to="/about"><i class="fa fa-info-circle"></i> Sobre nós</router-link></li>
          <li @click="$emit('menuToggle')"><a href="#"><i class="fa fa-sign-out"></i> Sair</a></li>
          <br>
          <li @click="$emit('menuToggle')"><router-link to="/timeline"><i class="fa fa-info-circle"></i> Timeline</router-link></li>
        </ul>
        <div class="new-order"><a href="#" class="btn btn-success btn-lg btn-rounded"><strong>Criar novo pedido</strong></a></div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: ['notificationOpen', 'menuOpen']
}
</script>
