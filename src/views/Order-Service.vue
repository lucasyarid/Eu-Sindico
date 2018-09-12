<template>
  <section id="order" class="service">
    <form>
      <main>

        <OrderServiceType
        :step="step"
        v-show="step == 0" />

        <OrderServiceInfo
        :step="step"
        v-show="step == 1" />

      </main>
    </form>
  </section>
</template>

<script>
// @ is an alias to /src
import OrderServiceType from '@/components/Order-Service/Order-Service-Type.vue'
import OrderServiceInfo from '@/components/Order-Service/Order-Service-Info.vue'

export default {
  name: 'order-service',
  props: ['step'],
  components: {
    OrderServiceType,
    OrderServiceInfo
  },
  data: function () {
    return {
      title: 'Criar Novo Serviço',
      classes: ['color-layout', 'hide-notification'],
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
