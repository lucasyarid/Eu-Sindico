<template>
  <section>
    <Gallery/>

    <main>
      <QuoteInfo :quote="quote" v-if="step == 0"/>
      <QuoteConfirm :quote="quote" v-if="step == 1"/>
      <transition name="fade" mode="in-out">
        <Loading v-if="step == 2"/>
      </transition>
    </main>

    <footer>
      <div class="container">
        <h2 style="display: none !important;">Deseja adicionar ressalvas?</h2>
        <textarea style="display: none !important;">Concordo com o conselheiro e não quero o mesmo tecido d os antigos guarda-sóis. Algo de melhor qualidade!</textarea>

        <div class="d-flex justify-content-center" style="display: none !important;">
          <button type="button" class="btn btn-outline-danger btn-lg btn-rounded mr-3">Declinar</button><button type="button" class="btn btn-success btn-rounded btn-lg">Aceitar solicitação</button>
        </div>

        <div class="d-flex justify-content-center" style="display: none !important;">
          <button type="button" class="btn btn-success btn-rounded btn-lg btn-block">Enviar Orçamento</button>
          <span id="timer" class="p60">
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
      </div>
    </footer>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
import QuoteInfo from '@/components/Quote/Quote-Info.vue'
import QuoteConfirm from '@/components/Quote/Quote-Confirm.vue'
import Loading from '@/components/Loading.vue'
import Gallery from '@/components/Gallery.vue'

export default {
  name: 'quote-create',
  components: {
    QuoteInfo,
    QuoteConfirm,
    Loading,
    Gallery
  },
  data: function () {
    return {
      title: 'Novo Orçamento',
      menuBack: true,
      quote: {
        status: 'a',
        order: '',
        companyName: '',
        companyPhone: '',
        companyWebsite: '',
        time: '',
        files: '',
        price: '',
        comments: []
      }
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
