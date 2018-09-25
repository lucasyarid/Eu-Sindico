<template>
  <section class="order">
    <nav class="selector d-flex justify-content-center">
      <v-badge class="selector-option active" color="green accent-3">
        <span slot="badge">2</span>
        <span>
          Novos
        </span>
      </v-badge>
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
              <v-progress-circular
                :rotate="-90"
                :size="80"
                :width="4"
                :value="25"
                color="green accent-3">
                <div class="timer">
                  <div class="timer-content">
                    <small>Expira em</small>
                    <time>2 dias</time>
                  </div>
                </div>
              </v-progress-circular>
            </div>
          </div>
        </div>
      </router-link>
    </main>
  </section>
</template>

<script>
export default {
  name: 'order',
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
