<template>
  <section id="order" class="product">
    <form>
      <main>

        <OrderProductType
          :orderProduct="orderProduct"
          v-show="step == 0" />
        <OrderProductInfo
          :orderProduct="orderProduct"
          v-show="step == 1" />

      </main>
    </form>
  </section>
</template>

<script>
// @ is an alias to /src
import { mapMutations } from 'vuex'
import OrderProductType from '@/components/Order-Product/Order-Product-Type.vue'
import OrderProductInfo from '@/components/Order-Product/Order-Product-Info.vue'

export default {
  name: 'order-product',
  components: {
    OrderProductType,
    OrderProductInfo
  },
  data: function () {
    return {
      title: 'Criar Novo Produto',
      classes: ['color-layout', 'hide-notification'],
      menuBack: true,
      orderProduct: {
        type: '',
        reason: '',
        quantity: '',
        deadline: '',
        files: '',
        price: '',
        scope: ''
      }
    }
  },
  methods: {
    ...mapMutations([
      'resetStep'
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
  computed: {
    step () {
      return this.$store.state.step
    }
  },
  mounted () {
    this.setName()
    this.setClasses()
    this.setMenu()
  },
  created () {
    this.resetStep()
  },
  destroyed () {
    this.classes = ['']
    this.menuBack = false
    this.setClasses()
    this.setMenu()
  }
}
</script>
