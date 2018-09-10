<template>
  <section id="timeline">
    <header id="order-top" style="background-image: url(//picsum.photos/640/560)">
      <div class="info">
        <time>10/11/2017</time>
        <h4>Guarda-sóis</h4>
        <span class="order-reference align-text-top"><i class="fa fa-user-circle"></i> À pedido do Síndico</span>
        <a href="#" class="gallery"><i class="fa fa-picture-o"></i>02 fotos</a>
      </div>
    </header>
    <main class="container">
      <div class="status d-flex justify-content-center mt-4 mb-4 text-center">
        <div class="box mr-2 ml-2">
          <div class="icon">
            <i class="fa fa-inbox mt-3"></i>
            <span class="badge badge-pill badge-success"><i class="fa fa-check"></i></span>
          </div>
          <p class="pt-2 mb-0">Pedido<br/>aprovado</p>
        </div>
        <div class="box mr-2 ml-2">
          <div class="icon">
            <i class="fa fa-newspaper-o mt-3"></i>
            <span class="badge badge-pill badge-success"><i class="fa fa-check"></i></span>
          </div>
          <p class="pt-2 mb-0">Orçamento<br/>aprovado</p>
        </div>
        <div class="box mr-2 ml-2">
          <div class="icon">
            <i class="fa fa-shield mt-3"></i>
            <span class="badge badge-pill badge-danger"><i class="fa fa-close"></i></span>
          </div>
          <p class="pt-2 mb-0">Realizado<br/>do prazo</p>
        </div>
      </div>
      <h4>LINHA DO TEMPO COMPLETA</h4>
      <ul class="mt-3">
        <li class="row pb-3">
          <time class="col-3 pr-0 pl-0 pt-3">10/11/2017</time>
          <div class="col-2 pr-0 pl-0 text-center">
            <div class="icon">
              <i class="fa fa-info-circle mt-3"></i>
              <span class="badge badge-pill badge-success"><i class="fa fa-check"></i></span>
            </div>
          </div>
          <div class="box col-7 pt-2">
            <h2 class="mt-0 mb-1">Pedido criado</h2>
            <div class="content">
              <h3 class="mt-0 mb-0"><i class="fa fa-chevron-down"></i> Visualizar</h3>
            </div>
          </div>
        </li>
        <li class="row pb-3">
          <time class="col-3 pr-0 pl-0 pt-3">10/11/2017</time>
          <div class="col-2 pr-0 pl-0 text-center">
            <div class="icon">
              <i class="fa fa-inbox mt-3"></i>
              <span class="badge badge-pill badge-success"><i class="fa fa-check"></i></span>
            </div>
          </div>
          <div class="box col-7 pt-2">
            <h2 class="mt-0 mb-1">Pedido aprovado</h2>
            <div class="content">
              <h3 class="mt-0 mb-0"><i class="fa fa-chevron-down"></i> Visualizar</h3>
            </div>
          </div>
        </li>
        <li class="row pb-3">
          <time class="col-3 pr-0 pl-0 pt-3">10/11/2017</time>
          <div class="col-2 pr-0 pl-0 text-center">
            <div class="icon">
              <i class="fa fa-newspaper-o mt-3"></i>
              <span class="badge badge-pill badge-success"><i class="fa fa-check"></i></span>
            </div>
          </div>
          <div class="box col-7 pt-2">
            <h2 class="mt-0 mb-1">Orçamento aprovado</h2>
            <div class="content">
              <h3 class="mt-0 mb-0"><i class="fa fa-chevron-down"></i> Visualizar</h3>
            </div>
          </div>
        </li>
        <li class="row pb-3">
          <time class="col-3 pr-0 pl-0 pt-3">10/11/2017</time>
          <div class="col-2 pr-0 pl-0 text-center">
            <div class="icon">
              <i class="fa fa-cog mt-3"></i>
              <span class="badge badge-pill badge-success"><i class="fa fa-check"></i></span>
            </div>
          </div>
          <div class="box col-7 pt-2">
            <h2 class="mt-0 mb-1">Inicio do serviço</h2>
            <div class="content">
              <h3 class="mt-0 mb-0"><i class="fa fa-chevron-down"></i> Visualizar</h3>
            </div>
          </div>
        </li>
        <li class="row pb-3">
          <time class="col-3 pr-0 pl-0 pt-3">10/11/2017</time>
          <div class="col-2 pr-0 pl-0 text-center">
            <div class="icon">
              <i class="fa fa-shield mt-3"></i>
              <span class="badge badge-pill badge-danger"><i class="fa fa-close"></i></span>
            </div>
          </div>
          <div class="box col-7 pt-2">
            <h2 class="mt-0 mb-1">Pedido criado</h2>
            <div class="content">
              <h3 class="mt-0 mb-0"><i class="fa fa-chevron-down"></i> Visualizar</h3>
            </div>
          </div>
        </li>
      </ul>
    </main>
  </section>
</template>

<script>
export default {
  name: 'timeline'
}
</script>
