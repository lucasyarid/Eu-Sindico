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
            <div class="option col col-4"><router-link to="/order/"><span class="bubble orders"><i class="fa fa-folder"></i><i class="badge badge-pill">3</i></span>Pedidos</router-link></div>
            <div class="option col col-4"><router-link to="/order/complete"><span class="bubble finished"><i class="fa fa-check"></i><i class="badge badge-pill">3</i></span>Concluidos</router-link></div>
            <div class="option col col-4"><router-link to="/quote/"><span class="bubble budgeting"><i class="fa fa-wpforms"></i><i class="badge badge-pill">3</i></span>Orçamentos</router-link></div>
            <div class="option col col-4"><router-link to="/settings"><span class="bubble configuration"><i class="fa fa-cog"></i></span>Ajustes</router-link></div>
            <div class="option col col-4"><router-link active-class="active" to="/timeline"><span class="bubble in-progress"><i class="fa fa-play"></i><i class="badge badge-pill">3</i></span>Em Progresso</router-link></div>
            <div class="option col col-4"><router-link to="/order/create"><span class="bubble new-order"><i class="fa fa-plus"></i></span>Novo Pedido</router-link></div>
          </div>
        </nav>
      </div>
    </main>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'home',
  data: function () {
    return {
      title: 'Eu Síndico'
    }
  },
  methods: {
    ...mapMutations([
      'setStep', 'changeStep'
    ]),
    setName () {
      this.$emit('getTitle', this.title)
    }
  },
  mounted () {
    this.setName()
    this.setStep(0)
  }
}
</script>
