<template>
  <section id="order">
    <nav>
      <div class="box product">
        <i class="fa fa-shopping-cart mb-2"></i>
        <h2>Compra de produto</h2>
        <p>Escolha abaixo a categoria que melhor se encaixa com seu pedido de compra</p>
        <router-link type="button" class="btn btn-rounded btn-lg btn-outline-simple" tag="button" to="/order/product/">Começar ›</router-link>
      </div>
      <div class="box service">
        <i class="fa fa-handshake-o mb-2"></i>
        <h2>Contratação de serviço</h2>
        <p>Escolha abaixo a categoria que melhor se encaixa com seu pedido de compra</p>
        <router-link type="button" class="btn btn-rounded btn-lg btn-outline-simple" tag="button" to="/order/service/">Começar ›</router-link>
      </div>
    </nav>
  </section>
</template>

<script>
export default {
  name: 'order',
  props: ['childClasses'],
  data: function () {
    return {
      title: 'Criar Novo Pedido',
      classes: ['color-layout', 'hide-title', 'hide-notification'],
      menuBack: true
    }
  },
  methods: {
    setName () {
      this.$emit('getTitle', this.title)
    },
    setClasses () {
      this.$emit('getClasses', this.classes)
    },
    setMenu () {
      this.$emit('getMenu', this.menuBack)
    }
  },
  mounted () {
    this.setName()
    this.setClasses()
    this.setMenu()
  },
  destroyed () {
    this.classes = ['']
    this.menuBack = false
    this.setClasses()
    this.setMenu()
  }
}
</script>
