<template>
  <section id="confirmation">
    <header>
      <div class="container mt-3">
        <h2>Confirme as informações</h2>
      </div>
    </header>
    <main>
      <div class="container">
        <div class="form-row">
          <div class="col-md-4">
            <h4>EMPRESA</h4>
            <p>Nascer do Sol Pintura</p>
          </div>
        </div>

        <div class="form-row">
          <div class="col-md-4">
            <h4>TELEFONE</h4>
            <p>(11) 3664-1000</p>
          </div>
        </div>

        <div class="form-row">
          <div class="col-md-4">
            <h4>SITE DA EMPRESA</h4>
            <p>www.nascerdosolpintura.com.br</p>
          </div>
        </div>

        <div class="form-row">
          <div class="col-6">
            <h4>TEMPO ESTIMADO</h4>
            <p>14 dias</p>
          </div>
          <div class="col-6">
            <h4>CUSTO TOTAL</h4>
            <p>R$750.00</p>
          </div>
        </div>

        <div class="form-row">
          <div class="col-md-4">
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
          <div class="col-md-4 attachment">
            <h4>ANEXOS</h4>
            <p><i class="fa fa-camera"></i> Orçamento empresa XYZ.pdf</p>
            <p><i class="fa fa-paperclip"></i> Orçamento empresa XYZ.pdf</p>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <div class="container">
        <div class="d-flex justify-content-center">
          <button type="button" @click="setStep(0)" class="btn btn-outline-primary btn-lg btn-rounded mr-3">Alterar</button>
          <button type="button" @click="changeStep(1)" class="btn btn-success btn-rounded btn-lg">Submeter solicitação</button>
        </div>
      </div>
    </footer>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'quote-confirm',
  props: ['quote'],
  methods: {
    ...mapMutations([
      'setStep', 'changeStep'
    ])
  }
}
</script>
