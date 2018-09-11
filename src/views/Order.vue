<template>
  <section id="order">
  <nav>
    <div class="box product">
      <i class="fa fa-shopping-cart mb-2"></i>
      <h2>Compra de produto</h2>
      <p>Escolha abaixo a categoria que melhor se encaixa com seu pedido de compra</p>
      <button type="button" class="btn btn-rounded btn-lg btn-outline-simple">Começar ›</button>
    </div>
    <div class="box service">
      <i class="fa fa-handshake-o mb-2"></i>
      <h2>Contratação de serviço</h2>
      <p>Escolha abaixo a categoria que melhor se encaixa com seu pedido de compra</p>
      <button type="button" class="btn btn-rounded btn-lg btn-outline-simple">Começar ›</button>
    </div>
  </nav>
</section>
</template>

<script>
export default {
  name: 'order',
  data: function () {
    return {
      title: 'Criar Novo Pedido'
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
