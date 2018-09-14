<template>
  <div id="nav" class="swiper-slide menu" :class="{ open: menuOpen }">
    <header style="background-image: url(//picsum.photos/640/480)">
      <div class="container">
        <div class="avatar" style="background-image: url(//api.adorable.io/avatars/64)"></div>
        <p class="house-number">Apartamento 101</p>
    </div>
    </header>
    <nav>
      <div class="container">
        <ul>
          <li @click="menuToggle"><router-link active-class="active" exact to="/"><i class="fa fa-home"></i> Inicio</router-link></li>
          <li @click="menuToggle"><router-link active-class="active" exact to="/order/approve"><i class="fa fa-folder"></i> Pedidos</router-link></li>
          <li @click="menuToggle"><a href="#"><i class="fa fa-wpforms"></i> Orçamentos</a></li>
          <li @click="menuToggle"><a href="#"><i class="fa fa-play"></i> Em Progresso</a></li>
          <li @click="menuToggle"><a href="#"><i class="fa fa-check"></i> Concluidos</a></li>
          <li @click="menuToggle"><router-link active-class="active" to="/settings"><i class="fa fa-cog"></i> Ajustes</router-link></li>
          <li @click="menuToggle"><router-link active-class="active" to="/about"><i class="fa fa-info-circle"></i> Sobre nós</router-link></li>
          <li @click="menuToggle"><a href="#"><i class="fa fa-sign-out"></i> Sair</a></li>
          <br>
          <li @click="menuToggle"><router-link active-class="active" to="/timeline"><i class="fa fa-info-circle"></i> Timeline</router-link></li>
          <li @click="menuToggle"><router-link active-class="active" exact to="/order/approve"><i class="fa fa-folder"></i> Aprovar Pedidos</router-link></li>
          <li @click="menuToggle"><router-link active-class="active" exact to="/order/review"><i class="fa fa-folder"></i> Analisar Pedidos</router-link></li>
          <li @click="menuToggle"><router-link active-class="active" exact to="/order/complete"><i class="fa fa-folder"></i> Pedidos Concluídos</router-link></li>
          <li @click="menuToggle"><router-link active-class="active" exact to="/quote"><i class="fa fa-folder"></i> Novo Orçamento</router-link></li>
          <li @click="menuToggle"><router-link active-class="active" exact to="/quote/review"><i class="fa fa-folder"></i> Enviar Orçamento</router-link></li>
        </ul>
        <div class="new-order" @click="menuToggle"><router-link class="btn btn-success btn-lg btn-rounded" to="/order"><strong>Criar novo pedido</strong></router-link></div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Menu',
  methods: {
    ...mapMutations([
      'menuToggle'
    ])
  },
  computed: {
    menuOpen () {
      return this.$store.state.menuOpen
    }
  }
}
</script>
