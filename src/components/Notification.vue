<template>
  <nav id="notifications" class="notifications" :class="{ open: notificationOpen }">
    <v-container>
      <h1>Notificações</h1>
      <v-list dense two-line>
        <template v-for="i in 4">
          <v-list-tile :key="i">
            <v-list-tile-action>
              <v-icon color="green accent-3">sms_failed</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title class="font-weight-bold">Nova proposta para analisar</v-list-tile-title>
              <v-list-tile-sub-title>Prazo de <b>5 dias</b></v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              1 min
            </v-list-tile-action>
          </v-list-tile>
          <v-divider :key="i * 10"></v-divider>
        </template>
      </v-list>
    </v-container>
  </nav>
</template>

<script>
export default {
  name: 'Notification',
  computed: {
    notificationOpen () {
      return this.$store.state.notificationOpen
    }
  }
}
</script>
