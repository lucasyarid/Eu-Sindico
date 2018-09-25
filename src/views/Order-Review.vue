<template>
  <section class="order-review">
    <Gallery info="true"/>
    <main>
      <div class="container" v-if="step == 0">
        <p class="order-review-description">Em 3 meses, a licitação da empresa que cuida da segurança irá vencer. Precisamos de novas alternativas para manutenção ou renovação do serviço</p>

        <h6>Submetido por</h6>
        <p class="order-review-reference">Eduardo Fontenele</p>

        <ul class="order-review-files">
          <li class="order-review-file">
            <v-icon color="black">check</v-icon>
            Houve vistoria prévia</li>
          <li class="order-review-file">
            <a href="#">
              <v-icon color="primary">attachment</v-icon> Laudo Empresa XYZ.pdf
            </a>
          </li>
        </ul>

        <h6>Ressalvas</h6>
        <blockquote>
          <p>
            "Contanto que não seja do mesmo tecido que tínhamos antes, estou de acordo."
          </p>
          <cite><strong>Renan Altendorf</strong> (conselheiro)</cite>
        </blockquote>

        <FooterButton
          @click.native="changeStep(+1)"
          title="Enviar Orçamento"
          classes="btn-success btn-rounded btn-lg center-btn center-text"
          showTimer="true"
          timerProgress="25"
        />

      </div>
      <transition name="fade" mode="in-out">
        <Loading v-if="step == 1"/>
      </transition>
    </main>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
import Gallery from '@/components/Gallery.vue'
import FooterButton from '@/components/FooterButton.vue'
import Loading from '@/components/Loading.vue'

export default {
  name: 'order-review',
  components: {
    Loading,
    Gallery,
    FooterButton
  },
  data: function () {
    return {
      title: 'Aprovar Pedido',
      menuBack: true
    }
  },
  computed: {
    step () {
      return this.$store.state.step
    }
  },
  methods: {
    ...mapMutations([
      'setStep', 'changeStep'
    ]),
    setName () {
      this.$emit('getTitle', this.title)
    },
    setMenu () {
      this.$emit('getMenu', this.menuBack)
    }
  },
  mounted () {
    this.setName()
    this.setMenu()
    this.setStep(0)
  },
  destroyed () {
    this.menuBack = false
    this.setMenu()
  }
}
</script>
