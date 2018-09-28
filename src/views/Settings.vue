<template>
  <section id="settings">
    <main>
      <v-container fluid grid-list-xs>

        <h1 class="mb-5"><b>Notificações</b></h1>

        <v-layout v-for="notifications in userSettingsNotifications" :key="notifications.length">
          <v-flex xs10>
            <p class="mb-0">{{notifications['name']}}</p>
          </v-flex>
          <v-flex xs2>
            <v-switch
              height="10"
              class="mt-0 ml-3"
              v-model="notifications['value']"
            ></v-switch>
          </v-flex>
        </v-layout>

      </v-container>
    </main>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'settings',
  data: function () {
    return {
      title: 'Ajustes',
      classes: ['hide-notification']
    }
  },
  methods: {
    ...mapMutations([
      'setClasses'
    ]),
    setName () {
      this.$emit('getTitle', this.title)
    }
  },
  computed: {
    userSettingsNotifications () {
      return this.$store.state.user.settings.notifications
    }
  },
  mounted () {
    this.setName()
    this.setClasses(this.classes)
  },
  destroyed () {
    this.setClasses('')
  }
}
</script>
