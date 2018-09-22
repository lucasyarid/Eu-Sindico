<template>
  <section class="order">
    <nav class="selector d-flex justify-content-center">
      <a href="#" class="selector-option active">Novos<span class="badge badge-pill badge-danger">1</span></a>
      <a href="#" class="selector-option">Aceitos</a>
      <a href="#" class="selector-option">Negados</a>
    </nav>
    <main>
      <router-link to="/order/review" class="order-item" style="background-image: url(//picsum.photos/300/400)">
        <div class="order-item-info">
          <div class="row">
            <div class="col-8 order-item-title">
              <h5>Compra de</h5>
              <h4> Guarda-sóis</h4>
            </div>
            <div class="col-4">
              <Timer progress="50"/>
            </div>
          </div>
        </div>
      </router-link>
    </main>
  </section>
</template>

<script>
import Timer from '@/components/Timer.vue'

export default {
  name: 'order',
  components: {
    Timer
  },
  data: function () {
    return {
      title: 'Pedidos'
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
