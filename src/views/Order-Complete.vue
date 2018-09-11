<template>
  <section id="cards-wide">
    <header class="container">
      <div class="row">
        <h3 class="col-5 mt-2"><strong>2017</strong> / NOVEMBRO</h3>
        <div class="calendar col-7 form-group">
          <i class="fa fa-calendar mr-2"></i>
          <select class="custom-select form-control form-control-sm d-inline-block">
            <option disabled>Mês</option>
            <option value="janeiro">Janeiro</option>
          </select>
          <select class="custom-select form-control form-control-sm d-inline-block">
            <option disabled>Ano</option>
            <option value="2017">2017</option>
          </select>
        </div>
      </div>
    </header>
    <main class="container">
      <div class="box mb-3" style="background-image: url(//picsum.photos/310/135)">
        <a href="#">
          <span class="info">
            <span class="title">Serviço de reforma</span>
            <span class="star">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </span>
          </span>
        </a>
      </div>
      <div class="box mb-3" style="background-image: url(//picsum.photos/310/155)">
        <a href="#">
          <span class="info">
            <span class="title">Serviço de reforma</span>
            <span class="star">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </span>
          </span>
        </a>
      </div>
      <div class="box mb-3" style="background-image: url(//picsum.photos/310/160)">
        <a href="#">
          <span class="info">
            <span class="title">Serviço de reforma</span>
            <span class="star">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </span>
          </span>
        </a>
      </div>
    </main>
  </section>
</template>

<script>
export default {
  name: 'order-complete',
  data: function () {
    return {
      title: 'Pedidos Concluídos'
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
