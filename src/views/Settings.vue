<template>
  <section id="settings">
    <main>
      <v-container fluid grid-list-xs>

        <h1><b>Notificações</b></h1>
        <v-layout row justify-end mt-5>
          <v-flex xs10>
            <p>Novo pedido</p>
          </v-flex>
          <v-flex xs2>
            <div class="onoffswitch">
              <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" checked>
              <label class="onoffswitch-label" for="myonoffswitch"></label>
            </div>
          </v-flex>
        </v-layout>

      </v-container>
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
