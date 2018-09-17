<template>
  <section id="order">
    <div v-if="step == 0">
      <nav>
        <div class="box product-option">
          <i class="fa fa-shopping-cart mb-2"></i>
          <h2>Compra de produto</h2>
          <p>Escolha abaixo a categoria que melhor se encaixa com seu pedido de compra</p>
          <button @click.prevent="setStep(1); order.type = 'produto';" type="button" class="btn btn-rounded btn-lg btn-outline-simple" tag="button">Começar ›</button>
        </div>
        <div class="box service-option">
          <i class="fa fa-handshake-o mb-2"></i>
          <h2>Contratação de serviço</h2>
          <p>Escolha abaixo a categoria que melhor se encaixa com seu pedido de compra</p>
          <button @click.prevent="setStep(1); order.type = 'serviço';" type="button" class="btn btn-rounded btn-lg btn-outline-simple" tag="button">Começar ›</button>
        </div>
      </nav>
    </div>
    <div v-if="step != 0" key="2">
      <OrderProduct v-if="order.type == 'produto'" :order="order"/>
      <OrderService v-if="order.type == 'serviço'" :order="order"/>
    </div>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
import OrderProduct from '@/components/Order-Product.vue'
import OrderService from '@/components/Order-Service.vue'

export default {
  name: 'order',
  props: ['childClasses'],
  components: {
    OrderProduct,
    OrderService
  },
  data: function () {
    return {
      title: 'Criar Novo Pedido',
      classes: ['color-layout', 'hide-notification'],
      menuBack: true,
      order: {
        type: '',
        name: '',
        details: '',
        quantity: 1,
        deadline: '',
        files: '',
        price: null,
        priority: '',
        scope: '',
        owner: ''
      }
    }
  },
  computed: {
    step () {
      return this.$store.state.step
    }
  },
  methods: {
    ...mapMutations([
      'setStep'
    ]),
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
    this.setStep(0)
  },
  destroyed () {
    this.classes = ['']
    this.menuBack = false
    this.setClasses()
    this.setMenu()
  }
}
</script>
