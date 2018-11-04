<template>
  <section id="home" class="home">
    <header class="dark up pull-up" style="background-image: url(//picsum.photos/640/560)"></header>
    <main>
      <v-container grid-list-xs text-xs-center>
        <v-layout row wrap align-center justify-center text-xs-center mb-3>
          <div>
            <h6 class="home-title-description text-uppercase font-weight-regular">
              Condomínio
            </h6>
            <h2 class="home-title text-uppercase font-weight-bold mt-1 d-block">
              {{userCompany}}
            </h2>
          </div>
        </v-layout>
        <v-layout row wrap align-center justify-center text-xs-center my-4>
          <v-flex xs4>
            <router-link to="/order/">
              <!-- <v-badge bottom overlap class="mb-3 outline" color="accent">
                <span slot="badge" class="black--text">
                  {{userNotifications.order}}
                </span> -->
                <v-avatar size="50" class="mb-3" color="accent">
                  <v-icon dark>email</v-icon>
                </v-avatar>
              <!-- </v-badge> -->
              <div>Pedidos</div>
            </router-link>
          </v-flex>
          <v-flex xs4>
            <router-link to="/quote/">
              <!-- <v-badge bottom overlap class="mb-3 outline" color="indigo darken-4">
                <span slot="badge" class="black--text">
                  {{userNotifications.quote}}
                </span> -->
                <v-avatar size="50" class="mb-3" color="indigo darken-4">
                  <v-icon dark>event_note</v-icon>
                </v-avatar>
              <!-- </v-badge> -->
              <div>Orçamentos</div>
            </router-link>
          </v-flex>
          <v-flex xs4>
            <router-link to="/timeline">
              <!-- <v-badge bottom overlap class="mb-3 outline" color="red accent-2">
                <span slot="badge" class="black--text">
                  {{userNotifications.inProgress}}
                </span> -->
                <v-avatar size="50" class="mb-3" color="red accent-2">
                  <v-icon dark>play_arrow</v-icon>
                </v-avatar>
              <!-- </v-badge> -->
              <div>Em Progresso</div>
            </router-link>
          </v-flex>
        </v-layout>
        <v-layout row wrap align-center justify-center text-xs-center my-4>
          <v-flex xs4>
            <router-link to="/order/complete">
              <!-- <v-badge bottom overlap class="mb-3 outline" color="deep-purple accent-2">
                <span slot="badge" class="black--text">
                  {{userNotifications.completed}}
                </span> -->
                <v-avatar size="50" class="mb-3" color="deep-purple accent-2">
                  <v-icon dark>check</v-icon>
                </v-avatar>
              <!-- </v-badge> -->
              <div>Concluidos</div>
            </router-link>
          </v-flex>
          <v-flex xs4>
            <router-link to="/settings">
              <v-avatar size="50" class="mb-3 outline" color="light-blue lighten-2">
                <v-icon dark>settings</v-icon>
              </v-avatar>
              <div>Ajustes</div>
            </router-link>
          </v-flex>
          <v-flex xs4>
            <router-link to="/order/create">
              <span slot="badge" class="black--text">3</span>
              <v-avatar size="50" class="mb-3 outline" color="grey">
                <v-icon dark>add</v-icon>
              </v-avatar>
              <div>Novo Pedido</div>
            </router-link>
          </v-flex>
        </v-layout>
      </v-container>
    </main>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'home',
  data: function () {
    return {
      title: 'Eu Síndico',
      classes: ['color-layout']
    }
  },
  methods: {
    ...mapMutations([
      'setStep', 'changeStep', 'setClasses'
    ]),
    setName () {
      this.$emit('getTitle', this.title)
    }
  },
  computed: {
    userNotifications () {
      return this.$store.state.user.notifications
    },
    userCompany () {
      return this.$store.state.auth.userCompany
    }
  },
  mounted () {
    this.setName()
    this.setStep(0)
    this.setClasses(this.classes)
  },
  destroyed () {
    this.setClasses('')
  }
}
</script>
