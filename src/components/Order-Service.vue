<template>
  <section id="order" class="service">
    <form>
      <main>

        <OrderServiceName
            :order="order"
            v-show="step == 1" />
        <OrderServiceInfo
          :order="order"
          v-show="step == 2" />
        <OrderPrice
          :order="order"
          @changeOrderPrice="order.price = $event"
          v-show="step == 3" />
        <OrderServicePriority
          :order="order"
          v-show="step == 4" />
        <OrderServiceOwner
          :order="order"
          v-show="step == 5" />
        <OrderConfirm
          :order="order"
          v-show="step == 6"/>
        <Loading
          v-if="step == 7"/>

      </main>
    </form>
  </section>
</template>

<script>
// @ is an alias to /src
import { mapMutations } from 'vuex'
import OrderServiceName from '@/components/Order-Service/Order-Service-Name.vue'
import OrderServiceInfo from '@/components/Order-Service/Order-Service-Info.vue'
import OrderPrice from '@/components/Order-Price.vue'
import OrderServicePriority from '@/components/Order-Service/Order-Service-Priority.vue'
import OrderServiceOwner from '@/components/Order-Service/Order-Service-Owner.vue'
import OrderConfirm from '@/components/Order-Confirm.vue'
import Loading from '@/components/Loading.vue'

export default {
  name: 'order-service',
  props: ['order'],
  components: {
    OrderServiceName,
    OrderServiceInfo,
    OrderPrice,
    OrderServicePriority,
    OrderServiceOwner,
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
