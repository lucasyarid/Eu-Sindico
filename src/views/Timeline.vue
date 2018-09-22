<template>
  <section class="timeline">
    <Gallery info="true"/>
    <main class="container">

      <div class="timeline-overview d-flex justify-content-center mt-4 mb-4 text-center">
        <div class="mr-2 ml-2">
          <div class="bubble">
            <i class="fa fa-thumbs-up mt-3"></i>
            <span class="badge badge-pill badge-success badge-bottom badge-right"><i class="fa fa-check"></i></span>
          </div>
          <p class="pt-2 mb-0">Pedido<br/>aprovado</p>
        </div>
        <div class="mr-2 ml-2">
          <div class="bubble">
            <i class="fa fa-newspaper-o mt-3"></i>
            <span class="badge badge-pill badge-success badge-bottom badge-right"><i class="fa fa-check"></i></span>
          </div>
          <p class="pt-2 mb-0">Orçamento<br/>aprovado</p>
        </div>
        <div class="mr-2 ml-2">
          <div class="bubble">
            <i class="fa fa-shield mt-3"></i>
            <span class="badge badge-pill badge-danger badge-bottom badge-right"><i class="fa fa-close"></i></span>
          </div>
          <p class="pt-2 mb-0">Realizado<br/>no prazo</p>
        </div>
      </div>

      <h5>LINHA DO TEMPO COMPLETA</h5>
      <ul class="timeline-complete mt-3">
        <li class="timeline-item row pb-3">
          <time class="col-3 pr-0 pl-0 pt-3">10/11/2017</time>
          <div class="col-2 pr-0 pl-0 text-center">
            <div class="bubble bubble-outline">
              <i class="fa fa-info-circle mt-3"></i>
              <span class="badge badge-pill badge-success badge-bottom badge-right"><i class="fa fa-check"></i></span>
            </div>
          </div>
          <div class="timeline-item-info col-7 pt-2">
            <h5 class="timeline-item-info-title mt-0 mb-1">Pedido criado</h5>
            <div class="timeline-item-info-view">
              <h5 class="timeline-item-info-link"><i class="fa fa-chevron-down"></i> Visualizar</h5>
            </div>
          </div>
        </li>
        <li class="timeline-item row pb-3">
          <time class="col-3 pr-0 pl-0 pt-3">10/11/2017</time>
          <div class="col-2 pr-0 pl-0 text-center">
            <div class="bubble bubble-outline">
              <i class="fa fa-inbox mt-3"></i>
              <span class="badge badge-pill badge-success badge-bottom badge-right"><i class="fa fa-check"></i></span>
            </div>
          </div>
          <div class="timeline-item-info col-7 pt-2">
            <h5 class="timeline-item-info-title mt-0 mb-1">Pedido aprovado</h5>
            <div class="timeline-item-info-view">
              <h5 class="timeline-item-info-link"><i class="fa fa-chevron-down"></i> Visualizar</h5>
            </div>
          </div>
        </li>
        <li class="timeline-item row pb-3">
          <time class="col-3 pr-0 pl-0 pt-3">10/11/2017</time>
          <div class="col-2 pr-0 pl-0 text-center">
            <div class="bubble bubble-outline">
              <i class="fa fa-newspaper-o mt-3"></i>
              <span class="badge badge-pill badge-success badge-bottom badge-right"><i class="fa fa-check"></i></span>
            </div>
          </div>
          <div class="timeline-item-info col-7 pt-2">
            <h5 class="timeline-item-info-title mt-0 mb-1">Orçamento aprovado</h5>
            <div class="timeline-item-info-view">
              <h5 class="timeline-item-info-link"><i class="fa fa-chevron-down"></i> Visualizar</h5>
            </div>
          </div>
        </li>
        <li class="timeline-item row pb-3">
          <time class="col-3 pr-0 pl-0 pt-3">10/11/2017</time>
          <div class="col-2 pr-0 pl-0 text-center">
            <div class="bubble bubble-outline">
              <i class="fa fa-cog mt-3"></i>
              <span class="badge badge-pill badge-success badge-bottom badge-right"><i class="fa fa-check"></i></span>
            </div>
          </div>
          <div class="timeline-item-info col-7 pt-2">
            <h5 class="timeline-item-info-title mt-0 mb-1">Inicio do serviço</h5>
            <div class="timeline-item-info-view">
              <h5 class="timeline-item-info-link"><i class="fa fa-chevron-down"></i> Visualizar</h5>
            </div>
          </div>
        </li>
        <li class="timeline-item row pb-3">
          <time class="col-3 pr-0 pl-0 pt-3">10/11/2017</time>
          <div class="col-2 pr-0 pl-0 text-center">
            <div class="bubble bubble-outline">
              <i class="fa fa-shield mt-3"></i>
              <span class="badge badge-pill badge-danger badge-bottom badge-right"><i class="fa fa-close"></i></span>
            </div>
          </div>
          <div class="timeline-item-info col-7 pt-2">
            <h5 class="timeline-item-info-title mt-0 mb-1">Pedido criado</h5>
            <div class="timeline-item-info-view">
              <h5 class="timeline-item-info-link"><i class="fa fa-chevron-down"></i> Visualizar</h5>
            </div>
          </div>
        </li>
      </ul>
    </main>
  </section>
</template>

<script>
import Gallery from '@/components/Gallery.vue'

export default {
  name: 'timeline',
  components: {
    Gallery
  },
  data: function () {
    return {
      title: 'Aprovar Pedido'
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
