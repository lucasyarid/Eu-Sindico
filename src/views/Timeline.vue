<template>
  <section class="timeline">
    <Gallery info="true"/>
    <main>

      <div class="order-vote-overview d-flex justify-content-center mt-4 mb-4 text-center">
        <div class="mr-2 ml-2">
          <v-badge :bottom="true" :overlap="true" class="mb-3" color="green accent-3">
            <span slot="badge"><v-icon color="white">check</v-icon></span>
            <v-avatar size="60" color="grey lighten-3">
              <v-icon color="grey">thumb_up</v-icon>
            </v-avatar>
          </v-badge>
          <p class="pt-2 mb-0">Pedido<br/>aprovado</p>
        </div>
        <div class="mr-2 ml-2">
          <v-badge :bottom="true" :overlap="true" class="mb-3" color="green accent-3">
            <span slot="badge"><v-icon color="white">check</v-icon></span>
            <v-avatar size="60" color="grey lighten-3">
              <v-icon color="grey">assignment</v-icon>
            </v-avatar>
          </v-badge>
          <p class="pt-2 mb-0">Orçamento<br/>aprovado</p>
        </div>
        <div class="mr-2 ml-2">
          <v-badge :bottom="true" :overlap="true" class="mb-3" color="red">
            <span slot="badge"><v-icon color="white">close</v-icon></span>
            <v-avatar size="60" color="grey lighten-3">
              <v-icon color="grey">verified_user</v-icon>
            </v-avatar>
          </v-badge>
          <p class="pt-2 mb-0">Realizado<br/>no prazo</p>
        </div>
      </div>

      <h5 class="container">LINHA DO TEMPO COMPLETA</h5>

      <div class="list-wrapper">
        <v-list three-line>
          <v-list-tile
            v-for="timelineItem in timeline"
            :key="timelineItem.id"
            active-class="active">

            <v-list-tile-action class="col-2">
              <div class="caption">{{ timelineItem.date }}</div>
            </v-list-tile-action>

            <v-list-tile-avatar class="col-2 offset-1">
              <v-badge :bottom="true" :overlap="true" color="green accent-3" class="mx-auto">
                <span slot="badge"><v-icon color="white">check</v-icon></span>
                <v-avatar size="60" color="grey lighten-3" >
                  <v-icon color="grey">assignment</v-icon>
                </v-avatar>
              </v-badge>
            </v-list-tile-avatar>

            <v-list-tile-content class="col-6  offset-1">
              <h5>{{timelineItem.title}}</h5>
              <h5><i class="fa fa-chevron-down"></i> Visualizar</h5>
            </v-list-tile-content>

          </v-list-tile>
        </v-list>
        <div class="list-line"></div>
      </div>
    </main>
  </section>
</template>

<script>
import Gallery from '@/components/Gallery.vue'

export default {
  name: 'timeline',
  components: {
    Gallery
  },
  data: function () {
    return {
      title: 'Aprovar Pedido',
      timeline: [
        { id: 1, date: '10/08/2018', title: 'Pedido Criado' },
        { id: 2, date: '10/08/2018', title: 'Pedido Aprovado' },
        { id: 3, date: '10/08/2018', title: 'Orçamento Aprovado' },
        { id: 4, date: '10/08/2018', title: 'Início do serviço' },
        { id: 5, date: '10/08/2018', title: 'Pedido Criado' }
      ]
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
