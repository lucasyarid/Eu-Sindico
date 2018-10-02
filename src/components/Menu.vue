<template>
  <div class="menu">
    <header class="bottom" style="background-image: url(//picsum.photos/640/480)">
      <v-container>
        <v-avatar size="64px" class="mb-3">
          <img src="//api.adorable.io/avatars/64" alt="Avatar">
        </v-avatar>
        <p class="house-number">{{userName}}</p>
      </v-container>
    </header>
    <nav class="mt-1">
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
            <h5><v-list-tile-title v-text="menuItem.title"></v-list-tile-title></h5>
          </v-list-tile-content>

        </v-list-tile>
      </v-list>
      <div class="text-xs-center">
        <v-btn round large dark depressed
          tag="button"
          color="accent"
          @click="menuToggle"
          to="/order/create">Criar novo pedido</v-btn>
      </div>
      <!-- <div class="text-xs-center">
        <v-btn round large dark depressed
          tag="button"
          color="accent"
          @click="menuToggle"
          to="/quote/create">Criar novo orçamento</v-btn>
      </div> -->
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
        // { icon: 'play_arrow', title: 'Em progresso', link: '/timeline' },
        { icon: 'check', title: 'Concluídos', link: '/order/complete' },
        // { icon: 'settings', title: 'Ajustes', link: '/settings' },
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
    },
    userName () {
      return this.$store.state.auth.userName
    }
  }
}
</script>
