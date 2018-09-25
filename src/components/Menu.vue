<template>
  <div class="menu">
    <header style="background-image: url(//picsum.photos/640/480)">
      <div class="container">
        <div class="avatar" style="background-image: url(//api.adorable.io/avatars/64)"></div>
        <p class="house-number">Apartamento 101</p>
    </div>
    </header>
    <nav>
      <v-list dense>
        <v-list-tile
          v-for="menuItem in menu"
          :key="menuItem.title"
          :to="menuItem.link"
          @click="!menuItem.logout ? menuToggle() : menuToggleQuit()"
          active-class="active"
          :exact="menuItem.exact"
        >
          <v-list-tile-action>
            <v-icon color="black">{{ menuItem.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title v-text="menuItem.title"></v-list-tile-title>
          </v-list-tile-content>

        </v-list-tile>
      </v-list>
      <div class="new-order" @click="menuToggle"><router-link class="btn btn-success btn-lg btn-rounded" to="/order/create"><strong>Criar novo pedido</strong></router-link></div>
    </nav>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Menu',
  data () {
    return {
      menu: [
        { icon: 'chrome_reader_mode', title: 'Início', link: '/', exact: true },
        { icon: 'mail', title: 'Pedidos', link: '/order', exact: true },
        { icon: 'event_note', title: 'Orçamentos', link: '/quote' },
        { icon: 'play_arrow', title: 'Em progresso', link: '/timeline' },
        { icon: 'check', title: 'Concluídos', link: '/order/complete' },
        { icon: 'settings', title: 'Ajustes', link: '/settings' },
        { icon: 'info', title: 'Sobre nós', link: '/about' },
        { icon: 'input', title: 'Sair', logout: true }
      ]
    }
  },
  methods: {
    ...mapMutations([
      'menuToggle'
    ]),
    menuToggleQuit () {
      this.menuToggle()
      this.$store.dispatch('logout')
    }
  },
  computed: {
    menuOpen () {
      return this.$store.state.menuOpen
    }
  }
}
</script>
