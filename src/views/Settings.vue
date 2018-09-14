<template>
  <section id="settings">
    <main>
      <div class="container">

        <h1><b>Notificações</b></h1>
        <div class="form-row">
          <div class="form-group col-9">
            <p>Novo pedido</p>
          </div>
          <div class="form-group col-3">
            <div class="onoffswitch">
              <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" checked>
              <label class="onoffswitch-label" for="myonoffswitch"></label>
            </div>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-9">
            <p>Pedido recusado/aceito</p>
          </div>
          <div class="form-group col-3">
            <div class="onoffswitch">
              <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" checked>
              <label class="onoffswitch-label" for="myonoffswitch"></label>
            </div>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-9">
            <p>Orçamento escolhido</p>
          </div>
          <div class="form-group col-3">
            <div class="onoffswitch">
              <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" checked>
              <label class="onoffswitch-label" for="myonoffswitch"></label>
            </div>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-9">
            <p>Novas ressalvas</p>
          </div>
          <div class="form-group col-3">
            <div class="onoffswitch">
              <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" checked>
              <label class="onoffswitch-label" for="myonoffswitch"></label>
            </div>
          </div>
        </div>

      </div>
    </main>
  </section>
</template>

<script>
export default {
  name: 'settings',
  data: function () {
    return {
      title: 'Ajustes',
      classes: ['hide-notification']
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
