<template>
  <div id="loading">
    <div class="sending">
      <div class="box">
        <div class="spinner">
          <div class="bounce1"></div>
          <div class="bounce2"></div>
          <div class="bounce3"></div>
        </div>
        <h5>Enviando...</h5>
      </div>
    </div>
    <div class="sended">
      <div class="box">
        <i class="fa fa-check"></i>
        <h5>Enviado!</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loading',
  created () {
    setTimeout(() => this.$router.push({ path: '/' }), 2000)
  }
}
</script>
