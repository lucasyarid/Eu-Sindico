<template>
  <section id="checkout">
    <header id="order-top" style="background-image: url(//picsum.photos/640/560)">
      <div class="info">
        <h4>Guarda-sóis</h4>
        <span class="order-reference align-text-top"><i class="fa fa-user-circle"></i> À pedido do Síndico</span>
        <a href="#" class="gallery"><i class="fa fa-picture-o"></i>02 fotos</a>
      </div>
    </header>

    <main>
      <div class="container" v-if="step == 0">
        <p>Em 3 meses, a licitação da empresa que cuida da segurança irá vencer. Precisamos de novas alternativas para manutenção ou renovação do serviço</p>

        <h4>Submetido por</h4>
        <p>Eduardo Fontenele</p>

        <ul>
          <li><i class="fa fa-check"></i> Houve vistoria prévia</li>
          <li><a href="#"><i class="fa fa-paperclip"></i> Laudo Empresa XYZ.pdf</a></li>
        </ul>

        <div class="container">
          <h4>Ressalvas</h4>
          <blockquote>
            <p>"Contanto que não seja do mesmo tecido que tínhamos antes, estou de acordo."</p>
            <cite><strong>Renan Altendorf</strong> (conselheiro)</cite>
          </blockquote>
        </div>

        <footer>
          <div class="container">
            <div class="d-flex justify-content-center">
              <button type="button" class="btn btn-outline-danger btn-lg btn-rounded mr-3">Declinar</button>
              <button type="button" class="btn btn-success btn-rounded btn-lg">Aceitar solicitação</button>
            </div>
          </div>
        </footer>

      </div>
      <transition name="fade" mode="in-out">
        <Loading v-if="step == 1"/>
      </transition>
    </main>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
import Loading from '@/components/Loading.vue'

export default {
  name: 'order-review',
  components: {
    Loading
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
      'setStep'
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
