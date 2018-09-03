<template>
  <div>
    <nav id="notifications">
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
    <header id="content-header">
      <div class="container d-flex justify-content-between align-items-center">
        <div id="menu-control">
          <span></span>
        </div>
        <h2>Eu Síndico</h2>
        <div id="notification-trigger" class="notification">
          <i class="fa fa-bell"></i><span class="badge badge-pill badge-danger">1</span>
          <div class="notification-circle"></div>
          <div class="notification-close"><i class="fa fa-close"></i></div>
        </div>
      </div>
    </header>
    <section id="home">
      <header style="background-image: url(//picsum.photos/640/560)"></header>
      <main>
        <div class="container">
          <h3>
            <span>Condomínio</span>
            Quatro Estações Alto da Lapa
          </h3>
          <nav>
            <div class="row">
              <div class="option col col-4"><a href="#"><span class="bubble orders"><i class="fa fa-folder"></i><i class="badge badge-pill">3</i></span>Pedidos</a></div>
              <div class="option col col-4"><a href="#"><span class="bubble finished"><i class="fa fa-check"></i><i class="badge badge-pill">3</i></span>Concluidos</a></div>
              <div class="option col col-4"><a href="#"><span class="bubble budgeting"><i class="fa fa-wpforms"></i><i class="badge badge-pill">3</i></span>Orçamentos</a></div>
              <div class="option col col-4"><a href="#"><span class="bubble configuration"><i class="fa fa-cog"></i></span>Ajustes</a></div>
              <div class="option col col-4"><a href="#"><span class="bubble in-progress"><i class="fa fa-play"></i><i class="badge badge-pill">3</i></span>Em Progresso</a></div>
              <div class="option col col-4"><a href="#"><span class="bubble new-order"><i class="fa fa-plus"></i></span>Novo Pedido</a></div>
            </div>
          </nav>
        </div>
      </main>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
