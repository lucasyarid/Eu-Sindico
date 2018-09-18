<template>
  <section id="orders">
    <nav class="d-flex justify-content-center">
      <a href="#" class="select">Novos<span class="badge badge-pill badge-danger">1</span></a>
      <a href="#">Aceitos</a>
      <a href="#">Negados</a>
    </nav>
    <main>
      <div>
        <router-link to="/order/review" class="box" style="background-image: url(//picsum.photos/300/400)">
          <div class="info">

            <router-link to="/order/review">
              <div class="row">
                <h4 class="col-6"><span>Compra de</span> Guarda-sóis</h4>
                <span id="timer" class="col-6 p60">
                  <span class="bird">
                    <small>EXPIRA EM</small>
                    <time>1 dias</time>
                  </span>
                  <span class="slice">
                    <span class="bar"></span>
                    <span class="fill"></span>
                  </span>
                </span>
              </div>
            </router-link>
          </div>
        </router-link>
      </div>
    </main>
  </section>
</template>

<script>
export default {
  name: 'quotes',
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
