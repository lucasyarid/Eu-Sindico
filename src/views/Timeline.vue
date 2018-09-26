<template>
  <section class="timeline">
    <Gallery info="true"/>
    <main>

      <v-layout row justify-center mt-4 mb-4 text-center class="order-vote-overview">
        <v-flex xs3>
          <v-badge :bottom="true" :overlap="true" class="mb-3" color="green accent-3">
            <span slot="badge"><v-icon color="white">check</v-icon></span>
            <v-avatar size="60" color="grey lighten-3">
              <v-icon color="grey">thumb_up</v-icon>
            </v-avatar>
          </v-badge>
          <p class="pt-2 mb-0">Pedido<br/>aprovado</p>
        </v-flex>
        <v-flex xs3>
          <v-badge :bottom="true" :overlap="true" class="mb-3" color="green accent-3">
            <span slot="badge"><v-icon color="white">check</v-icon></span>
            <v-avatar size="60" color="grey lighten-3">
              <v-icon color="grey">assignment</v-icon>
            </v-avatar>
          </v-badge>
          <p class="pt-2 mb-0">Orçamento<br/>aprovado</p>
        </v-flex>
        <v-flex xs3>
          <v-badge :bottom="true" :overlap="true" class="mb-3" color="red">
            <span slot="badge"><v-icon color="white">close</v-icon></span>
            <v-avatar size="60" color="grey lighten-3">
              <v-icon color="grey">verified_user</v-icon>
            </v-avatar>
          </v-badge>
          <p class="pt-2 mb-0">Realizado<br/>no prazo</p>
        </v-flex>
      </v-layout>

      <v-container class="timeline-progress">
        <h5 class="mb-5">LINHA DO TEMPO COMPLETA</h5>
        <v-layout mb-2
          v-for="timelineItem in timeline"
          :key="timelineItem.id">
          <v-flex xs3>
            <div class="mt-3 caption">{{timelineItem.date}}</div>
          </v-flex>
          <v-flex xs3>
            <v-badge :bottom="true" :overlap="true" color="green accent-3" class="mx-auto">
              <span slot="badge"><v-icon color="white">check</v-icon></span>
              <v-avatar size="60" color="grey lighten-3" >
                <v-icon color="grey">assignment</v-icon>
              </v-avatar>
            </v-badge>
          </v-flex>
          <v-flex xs6>
            <h5 class="mt-3">{{timelineItem.title}}</h5>
            <h5><i class="fa fa-chevron-down"></i> Visualizar</h5>
          </v-flex>
        </v-layout>
        <div class="list-line"></div>
      </v-container>
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
