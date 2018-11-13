<template>
  <section>
    <Gallery info
      :images="images"
      :order="order"
      :name="order.type.name"
      :title="order.title"/>

    <v-form>
      <QuoteInfo :quote="quote" v-if="step == 0"/>
      <QuoteConfirm :quote="quote" v-if="step == 1"/>
      <transition name="fade" mode="in-out">
        <Loading v-if="step == 2"/>
      </transition>
    </v-form>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
import QuoteInfo from '@/components/Quote/Quote-Info.vue'
import QuoteConfirm from '@/components/Quote/Quote-Confirm.vue'
import Loading from '@/components/Loading.vue'
import Gallery from '@/components/Gallery.vue'
import axios from '@/axios-auth'

export default {
  name: 'quote-create',
  components: {
    QuoteInfo,
    QuoteConfirm,
    Loading,
    Gallery
  },
  data () {
    return {
      title: 'Novo Orçamento',
      menuBack: true,
      order: {
        title: '',
        attachments: [],
        type: {
          name: ''
        }
      },
      quote: {
        status: 'a',
        companyName: '',
        companyPhone: '',
        companyWebsite: '',
        time: '',
        files: [],
        price: '',
        comments: []
      }
    }
  },
  computed: {
    step () {
      return this.$store.state.step
    },
    images () {
      return this.order.attachments.filter((attachment) => {
        if (attachment.fileType === 'jpg' || attachment.fileType === 'jpeg' || attachment.fileType === 'png') {
          return attachment
        }
      })
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
    },
    getOrder () {
      axios
        .get('/orders/' + this.$route.params.id)
        .then(res => {
          this.order = res.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  mounted () {
    this.setName()
    this.setMenu()
    this.setStep(0)
    this.getOrder()
  },
  destroyed () {
    this.menuBack = false
    this.setMenu()
  }
}
</script>
