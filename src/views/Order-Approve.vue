<template>
  <section id="flip">
    <header id="order-top" style="background-image: url(//picsum.photos/640/560)">
      <div class="info">
        <h4>Guarda-sóis</h4>
        <span class="order-reference align-text-top"><i class="fa fa-user-circle"></i> À pedido do Síndico</span>
        <a href="#" class="gallery"><i class="fa fa-picture-o"></i>02 fotos</a>
      </div>
    </header>
    <main class="pt-3 pb-3">
      <p class="container excerpt">O muro do fundo da garagem foi prejudicado pelas recentes fortes chuvas e precisa ser reforçado pois pode cair sob os carros.</p>
      <div class="swiper-container" id="app-cards">
        <div class="swiper-wrapper">
          <div class="swiper-slide box selected">
            <div class="info">
              <h3>Jardim do Sul Alvenaria</h3>

              <ul>
                <li><a href="#"><i class="fa fa-list-alt"></i> Visitar website</a></li>
                <li><a href="#"><i class="fa fa-phone"></i> (11) 3666-1000</a></li>
              </ul>

              <h4>TEMPO ESTIMADO</h4>
              <p>12 dias</p>

              <h4>ANEXOS</h4>
              <ul>
                <li><a href="#"><i class="fa fa-paperclip"></i> Laudo para Cond...Tintoreto.pdf</a></li>
              </ul>

              <h4>CUSTO</h4>
              <p>R$700,00</p>
            </div>
            <div class="p-3">
              <div class="d-flex justify-content-center">
                <button type="button" class="btn btn-success btn-rounded btn-md btn-block"><i class="fa fa-check"></i> Voto enviado!</button>
              </div>
            </div>
          </div>
          <div class="swiper-slide box">
            <div class="info">
              <h3>Jardim do Sul Alvenaria</h3>

              <ul>
                <li><a href="#"><i class="fa fa-list-alt"></i> Visitar website</a></li>
                <li><a href="#"><i class="fa fa-phone"></i> (11) 3666-1000</a></li>
              </ul>

              <h4>TEMPO ESTIMADO</h4>
              <p>12 dias</p>

              <h4>ANEXOS</h4>
              <ul>
                <li><a href="#"><i class="fa fa-paperclip"></i> Laudo para Cond...Tintoreto.pdf</a></li>
              </ul>

              <h4>CUSTO</h4>
              <p>R$700,00</p>
            </div>
            <div class="p-3">
              <div class="d-flex justify-content-center">
                <button type="button" class="btn btn-outline-danger btn-md btn-rounded mr-1">Declinar</button><button type="button" class="btn btn-success btn-rounded btn-md">Aceitar solicitação</button>
              </div>

              <div class="d-flex justify-content-center" style="display: none !important;">
                <button type="button" class="btn btn-success btn-rounded btn-md btn-block">Prosseguir ›</button>
              </div>
            </div>
          </div>
          <div class="swiper-slide box">
            <div class="info">
              <h3>Jardim do Sul Alvenaria</h3>

              <ul>
                <li><a href="#"><i class="fa fa-list-alt"></i> Visitar website</a></li>
                <li><a href="#"><i class="fa fa-phone"></i> (11) 3666-1000</a></li>
              </ul>

              <h4>TEMPO ESTIMADO</h4>
              <p>12 dias</p>

              <h4>ANEXOS</h4>
              <ul>
                <li><a href="#"><i class="fa fa-paperclip"></i> Laudo para Cond...Tintoreto.pdf</a></li>
              </ul>

              <h4>CUSTO</h4>
              <p>R$700,00</p>
            </div>
            <div class="p-3">
              <div class="d-flex justify-content-center">
                <button type="button" class="btn btn-outline-danger btn-md btn-rounded mr-1">Declinar</button><button type="button" class="btn btn-success btn-rounded btn-md">Aceitar solicitação</button>
              </div>

              <div class="d-flex justify-content-center" style="display: none !important;">
                <button type="button" class="btn btn-success btn-rounded btn-md btn-block">Prosseguir ›</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
export default {
  name: 'order-service',
  data: function () {
    return {
      title: 'Aprovar Pedidos'
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
