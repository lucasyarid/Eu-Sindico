<template>
  <v-layout mb-4>
    <v-flex xs3>
      <div class="mt-3 caption">{{ getDate }}</div>
    </v-flex>
    <v-flex xs3>

      <v-badge
        v-if="status"
        :bottom="true"
        :overlap="true"
        color="accent"
        class="mx-auto">
        <span slot="badge"><v-icon color="white">check</v-icon></span>
        <v-avatar size="60" color="grey lighten-3" >
          <v-icon color="grey">{{ icons[icon] }}</v-icon>
        </v-avatar>
      </v-badge>
      <v-badge
        v-else
        :bottom="true"
        :overlap="true"
        color="red"
        class="mx-auto">
        <span slot="badge"><v-icon color="white">close</v-icon></span>
        <v-avatar size="60" color="grey lighten-3" >
          <v-icon color="grey">{{ icons[icon] }}</v-icon>
        </v-avatar>
      </v-badge>

    </v-flex>
    <v-flex xs6>
      <h5 class="mt-3 font-weight-bold">{{ title }}</h5>
      <!-- <h5>
        <v-icon color="grey">keyboard_arrow_down</v-icon>
        Visualizar
      </h5> -->
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'TimelineStatus',
  props: {
    date: {
      type: String,
      default: '00/00/00',
      required: false
    },
    title: {
      type: String,
      default: '',
      required: false
    },
    status: {
      type: Boolean,
      default: true,
      required: false
    },
    icon: {
      type: Number,
      default: 0,
      required: false
    }
  },
  data () {
    return {
      icons: ['announcement', 'inbox', 'how_to_vote', 'gavel', 'work', 'thumb_up']
    }
  },
  computed: {
    getDate () {
      var date = new Date(this.date)
      var dd = date.getDate()
      var mm = date.getMonth() + 1
      var yyyy = date.getFullYear()
      if (dd < 10) {
        dd = '0' + dd
      }
      if (mm < 10) {
        mm = '0' + mm
      }
      return dd + '/' + mm + '/' + yyyy
    }
  }
}
</script>
