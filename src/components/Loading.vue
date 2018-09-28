<template>
  <div id="loading">
    <div class="sended">
      <div class="box">
        <v-icon color="white">check</v-icon>
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
