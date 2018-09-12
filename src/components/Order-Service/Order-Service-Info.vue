<template>
  <div class="container">

    <p>step 2</p>
    <footer>
      <div class="container">
        <div class="d-flex justify-content-center">
          <button
            type="button"
            class="btn btn-success btn-rounded btn-lg btn-block"
            @click="incrementStep">Prosseguir ›</button>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'order-service-info',
  props: ['step'],
  data: function () {
    return {
      otherType: false
    }
  },
  methods: {
    incrementStep () {
      this.$store.commit('incrementStep')
    }
  }
}
</script>
