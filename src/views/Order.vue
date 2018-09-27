<template>
  <section class="order">
    <v-tabs centered icons-and-text
      slot="extension"
      v-model="tabs"
      slider-color="accent">
      <v-tab href="#tab-1">
        <v-badge color="accent">
          <span slot="badge">2</span>
          <span>
            Novos
          </span>
        </v-badge>
      </v-tab>
      <v-tab href="#tab-2">
        Aceitos
      </v-tab>
      <v-tab href="#tab-3">
          Negados
      </v-tab>
    </v-tabs>
    <main class="mt-3">
      <router-link to="/order/review" class="order-item" style="background-image: url(//picsum.photos/300/400)">
        <v-layout pl-4 mt-5 class="order-item-info">
          <v-flex xs9 pt-4>
            <h5>Compra de</h5>
            <h4 class="font-weight-bold pt-1"> Guarda-sóis</h4>
          </v-flex>
          <v-flex xs3>
            <v-progress-circular
              :rotate="-90"
              :size="80"
              :width="4"
              :value="25"
              color="accent">
              <div class="timer">
                <div class="timer-content">
                  <small>Expira em</small>
                  <time>2 dias</time>
                </div>
              </div>
            </v-progress-circular>
          </v-flex>
        </v-layout>
      </router-link>
    </main>
  </section>
</template>

<script>
export default {
  name: 'order',
  data: function () {
    return {
      title: 'Pedidos',
      tabs: null
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
