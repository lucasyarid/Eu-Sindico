<template>
  <section class="order-complete">
    <header class="container">
      <div class="row">
        <h5 class="col-5 mt-2">
          <strong>2017</strong> / NOVEMBRO
        </h5>
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
      <router-link to="/order/complete/vote">
        <div class="card card-image card-md mb-3" style="background-image: url(//picsum.photos/310/135)">
          <span class="order-complete-info">
            <h4>Serviço de reforma</h4>
            <Rating :stars="3"/>
          </span>
        </div>
      </router-link>
    </main>
  </section>
</template>

<script>
import Rating from '@/components/Rating'

export default {
  name: 'order-complete',
  components: {
    Rating
  },
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
