<template>
  <div class="home">
    <div id="gallery" style="display: none;">
      <header>
        <div class="container-fluid d-flex align-items-center">
          <h3>Guarda-sóis</h3>
          <i class="ml-auto fa fa-close gallery-close"></i>
        </div>
      </header>
      <main class="h-100">
        <div class="swiper-container h-100">
          <div class="swiper-wrapper h-100">
            <div class="swiper-slide">
              <img data-src="//picsum.photos/640/560" class="swiper-lazy">
              <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </div>
            <div class="swiper-slide">
              <img data-src="//picsum.photos/320/560" class="swiper-lazy">
              <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </div>
            <div class="swiper-slide">
              <img data-src="//picsum.photos/600/560" class="swiper-lazy">
              <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </main>
    </div>

    <div id="loading" style="display: none;">
      <div class="sending">
        <div class="box">
          <div class="spinner">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
          </div>
          <h5>Enviando...</h5>
        </div>
      </div>
      <div class="sended">
        <div class="box">
          <i class="fa fa-check"></i>
          <h5>Enviado!</h5>
        </div>
      </div>
    </div>

    <div class="swiper-container" id="app-container" @click="menuOpen = !menuOpen">
      <div class="swiper-wrapper" :class="{ open: menuOpen }">
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
                <li><a href="#"><i class="fa fa-home"></i> Inicio</a></li>
                <li><a href="#"><i class="fa fa-folder"></i> Pedidos</a></li>
                <li><a href="#"><i class="fa fa-wpforms"></i> Orçamentos</a></li>
                <li><a href="#"><i class="fa fa-play"></i> Em Progresso</a></li>
                <li><a href="#"><i class="fa fa-check"></i> Concluidos</a></li>
                <li><a href="#"><i class="fa fa-cog"></i> Ajustes</a></li>
                <li><a href="#"><i class="fa fa-info-circle"></i> Sobre nós</a></li>
                <li><a href="#"><i class="fa fa-sign-out"></i> Sair</a></li>
              </ul>
              <div class="new-order"><a href="#" class="btn btn-success btn-lg btn-rounded"><strong>Criar novo pedido</strong></a></div>
            </div>
          </nav>
        </div>
        <HelloWorld/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data: function () {
    return {
      menuOpen: false
    }
  }
}
</script>
