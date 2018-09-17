<template>
  <div>
    <section id="order" class="product">
      <form>
        <main>

          <transition :name="slideDirection" mode="out-in">
            <OrderProductName
              :order="order"
              key="step"
              v-if="step == 1" />
            <OrderProductInfo
              :order="order"
              key="step"
              v-if="step == 2" />
            <OrderPrice
              :order="order"
              key="step"
              @changeOrderPrice="order.price = $event"
              v-if="step == 3" />
            <OrderProductScope
              :order="order"
              key="step"
              v-if="step == 4" />
            <OrderConfirm
              :order="order"
              key="step"
              v-if="step == 5"/>
          </transition>
          <transition name="fade" mode="in-out">
            <Loading v-if="step == 6"/>
          </transition>

        </main>
      </form>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapMutations } from 'vuex'
import OrderProductName from '@/components/Order-Product/Order-Product-Name.vue'
import OrderProductInfo from '@/components/Order-Product/Order-Product-Info.vue'
import OrderPrice from '@/components/Order-Price.vue'
import OrderProductScope from '@/components/Order-Product/Order-Product-Scope.vue'
import OrderConfirm from '@/components/Order-Confirm.vue'
import Loading from '@/components/Loading.vue'

export default {
  name: 'order-product',
  props: ['order'],
  components: {
    OrderProductName,
    OrderProductInfo,
    OrderPrice,
    OrderProductScope,
    OrderConfirm,
    Loading
  },
  data: function () {
    return {
      title: 'Criar Novo Produto',
      classes: ['color-layout', 'hide-notification'],
      menuBack: true
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
    },
    slideDirection () {
      return this.$store.state.slideDirection
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
