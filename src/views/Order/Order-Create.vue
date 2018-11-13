<template>
  <section class="order-create">
    <div v-if="step == 0">
      <nav class="pull-up order-select">
        <div class="box product-option pt-3">
          <v-icon :size="50" color="white">shopping_cart</v-icon>
          <h2 class="font-weight-bold my-2">Compra de produto</h2>
          <p class="px-2">Escolha abaixo a categoria que melhor se encaixa com seu pedido de compra</p>
          <v-btn round large dark depressed outline
            tag="button"
            color="white"
            @click.prevent="setStep(1); order.type = 1;">
            Começar ›
          </v-btn>
        </div>
        <div class="box service-option pt-3">
          <v-icon :size="50" color="white">work</v-icon>
          <h2 class="font-weight-bold my-2">Contratação de serviço</h2>
          <p>Escolha abaixo a categoria que melhor se encaixa com a contratação de serviço</p>
          <v-btn round large dark depressed outline
            tag="button"
            color="white"
            @click.prevent="setStep(1); order.type = 2;">
            Começar ›
          </v-btn>
        </div>
      </nav>
    </div>
    <div v-if="step != 0" key="2">
      <OrderProduct v-if="order.type === 1" :order="order"/>
      <OrderService v-if="order.type === 2" :order="order"/>
    </div>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
import OrderProduct from '@/components/Order/Order-Product/Order-Product.vue'
import OrderService from '@/components/Order/Order-Service/Order-Service.vue'

export default {
  name: 'order-create',
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
        title: '',
        description: '',
        quantity: 1,
        estimatedDays: '',
        files: [],
        maxValue: null,
        priority: 0,
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
      'setStep', 'setClasses'
    ]),
    setName () {
      this.$emit('getTitle', this.title)
    },
    setMenu () {
      this.$emit('getMenu', this.menuBack)
    }
  },
  mounted () {
    this.setName()
    this.setClasses(this.classes)
    this.setMenu()
    this.setStep(0)
  },
  destroyed () {
    this.menuBack = false
    this.setClasses('')
    this.setMenu()
  }
}
</script>
