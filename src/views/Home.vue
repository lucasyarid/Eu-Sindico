<template>
  <section id="home" class="home">
    <header class="header pull-up" style="background-image: url(//picsum.photos/640/560)"></header>
    <main>
      <div class="container">
        <h6 class="home-title-description">Condomínio</h6>
        <h2 class="home-title">Quatro Estações Alto da Lapa</h2>
        <nav>
          <div class="row">
            <div class="option col col-4 mb-5">
              <router-link to="/order/">
                <v-badge :bottom="true" :overlap="true" class="mb-3" color="green accent-3">
                  <span slot="badge">3</span>
                  <v-avatar size="50" color="green accent-3">
                    <v-icon dark>email</v-icon>
                  </v-avatar>
                </v-badge>
                <label>Pedidos</label>
              </router-link>
            </div>
            <div class="option col col-4 mb-5">
              <router-link to="/quote/">
                <v-badge :bottom="true" :overlap="true" class="mb-3" color="indigo darken-4">
                  <span slot="badge">3</span>
                  <v-avatar size="50" color="indigo darken-4">
                    <v-icon dark>event_note</v-icon>
                  </v-avatar>
                </v-badge>
                <label>Orçamentos</label>
              </router-link>
            </div>
            <div class="option col col-4 mb-5">
              <router-link to="/timeline">
                <v-badge :bottom="true" :overlap="true" class="mb-3" color="red accent-2">
                  <span slot="badge">3</span>
                  <v-avatar size="50" color="red accent-2">
                    <v-icon dark>play_arrow</v-icon>
                  </v-avatar>
                </v-badge>
                <label>Em Progresso</label>
              </router-link>
            </div>
            <div class="option col col-4 mb-5">
              <router-link to="/order/complete">
                <v-badge :bottom="true" :overlap="true" class="mb-3" color="deep-purple accent-2">
                  <span slot="badge">3</span>
                  <v-avatar size="50" color="deep-purple accent-2">
                    <v-icon dark>check</v-icon>
                  </v-avatar>
                </v-badge>
                <label>Concluidos</label>
              </router-link>
            </div>
            <div class="option col col-4 mb-5">
              <router-link to="/settings">
                <v-badge :bottom="true" :overlap="true" class="mb-3" color="light-blue lighten-2">
                  <span slot="badge">3</span>
                  <v-avatar size="50" color="light-blue lighten-2">
                    <v-icon dark>settings</v-icon>
                  </v-avatar>
                </v-badge>
                <label>Ajustes</label>
              </router-link>
            </div>
            <div class="option col col-4 mb-5">
              <router-link to="/order/create">
                <span slot="badge">3</span>
                <v-avatar size="50" class="mb-3" color="grey">
                  <v-icon dark>add</v-icon>
                </v-avatar>
                <label>Novo Pedido</label>
              </router-link>
            </div>
          </div>
        </nav>
      </div>
    </main>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'home',
  data: function () {
    return {
      title: 'Eu Síndico'
    }
  },
  methods: {
    ...mapMutations([
      'setStep', 'changeStep'
    ]),
    setName () {
      this.$emit('getTitle', this.title)
    }
  },
  mounted () {
    this.setName()
    this.setStep(0)
  }
}
</script>
