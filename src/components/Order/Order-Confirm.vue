<template>
  <section id="confirmation">
    <header>
      <div class="container mt-3">
        <h2>Confirme as informações</h2>
      </div>
    </header>
    <div class="main">
      <div class="container">
        <div class="form-row">
          <div class="col">
            <h4>{{ order.type }}</h4>
            <p>{{ order.name }}</p>
          </div>
          <div v-if="order.type == 'produto'" class="col">
            <h4>Quantidade</h4>
            <p>{{ order.quantity }}</p>
          </div>
          <div v-if="order.type == 'serviço'" class="col">
            <h4>Prioridade</h4>
            <p>{{ order.priority }}</p>
          </div>
        </div>

        <div class="form-row">
          <div class="col">
            <h4>Detalhes sobre a situação</h4>
            <p>{{ order.details }}</p>
          </div>
        </div>

        <div class="form-row">
          <div class="col">
            <h4>FOTOS</h4>
            <div class="swiper-container mb-3" id="app-confirmation">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img src="//picsum.photos/68/68" />
                </div>
                <div class="swiper-slide">
                  <img src="//picsum.photos/68/68" />
                </div>
                <div class="swiper-slide">
                  <img src="//picsum.photos/68/68" />
                </div>
                <div class="swiper-slide">
                  <img src="//picsum.photos/68/68" />
                </div>
                <div class="swiper-slide">
                  <img src="//picsum.photos/68/68" />
                </div>
                <div class="swiper-slide">
                  <img src="//picsum.photos/68/68" />
                </div>
                <div class="swiper-slide">
                  <img src="//picsum.photos/68/68" />
                </div>
                <div class="swiper-slide">
                  <img src="//picsum.photos/68/68" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="form-row">
          <div class="col attachment">
            <h4>ANEXOS</h4>
            <p><i class="fa fa-camera"></i> Orçamento empresa XYZ.pdf</p>
            <p><i class="fa fa-paperclip"></i> Orçamento empresa XYZ.pdf</p>
          </div>
        </div>

        <div class="form-row">
          <div class="col-6">
            <h4>Prazo</h4>
            <p>{{ order.deadline }}</p>
          </div>
          <div class="col-6">
            <h4>Custo Máx.</h4>
            <p>{{ order.price }}</p>
          </div>
        </div>

      </div>
    </div>
    <footer>
      <div class="container">
        <div class="d-flex justify-content-center">
          <button type="button" @click="setStep(1)" class="btn btn-outline-primary btn-lg btn-rounded mr-3">Alterar</button>
          <button type="button" @click="changeStep(1)" class="btn btn-success btn-rounded btn-lg">Submeter solicitação</button>
        </div>
      </div>
    </footer>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'order-confirm',
  props: ['order'],
  methods: {
    ...mapMutations([
      'setStep', 'changeStep'
    ])
  }
}
</script>
