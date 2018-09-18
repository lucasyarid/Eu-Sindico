<template>
  <section id="cards-swipe">
    <nav class="d-flex justify-content-center">
      <a href="#">Em aberto</a>
      <a href="#">Em votação</a>
    </nav>
    <main>
      <div class="swiper-container" id="app-cards-swipe">
        <div class="swiper-wrapper">
          <router-link to="/quote/review" class="swiper-slide box" style="background-image: url(//picsum.photos/300/400)">
            <div class="info">
              <h4><span>Compra de</span> Guarda-sóis</h4>

              <span class="order-reference align-text-top"><i class="fa fa-user-circle"></i> À pedido do Síndico</span>

              <router-link to="/quote/review">
                <span class="button">Mais informações</span>
                <span id="timer" class="p60">
                  <span class="bird">
                    <small>EXPIRA EM</small>
                    <time>1 dias</time>
                  </span>
                  <span class="slice">
                    <span class="bar"></span>
                    <span class="fill"></span>
                  </span>
                </span>
              </router-link>
            </div>
          </router-link>
          <router-link to="/quote/review" class="swiper-slide box" style="background-image: url(//picsum.photos/300/399)">
            <div class="info">
              <h4><span>Compra de</span> Guarda-sóis</h4>

              <span class="order-reference align-text-top"><i class="fa fa-user-circle"></i> À pedido do Síndico</span>

              <router-link to="/quote/review">
                <span class="button">Mais informações</span>
                <span id="timer" class="p35">
                  <span class="bird">
                    <small>EXPIRA EM</small>
                    <time>2 dias</time>
                  </span>
                  <span class="slice">
                    <span class="bar"></span>
                    <span class="fill"></span>
                  </span>
                </span>
              </router-link>
            </div>
          </router-link>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
export default {
  name: 'quote',
  data: function () {
    return {
      title: 'Orçamentos'
    }
  },
  methods: {
    setName () {
      this.$emit('getTitle', this.title)
    }
  },
  mounted () {
    this.setName()
  }
}
</script>
