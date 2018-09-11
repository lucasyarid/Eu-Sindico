<template>
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
</template>

<script>
export default {
  name: 'home',
  data: function () {
    return {
      title: 'Eu Síndico'
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
