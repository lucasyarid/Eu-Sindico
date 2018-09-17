<template>
  <div class="container">
    <p>Em 3 meses, a licitação da empresa que cuida da segurança irá vencer. Precisamos de novas alternativas para manutenção ou renovação do serviço</p>

    <h4>Submetido por</h4>
    <p>Eduardo Fontenele</p>

    <ul>
      <li><i class="fa fa-check"></i> Houve vistoria prévia</li>
      <li><a href="#"><i class="fa fa-paperclip"></i> Laudo Empresa XYZ.pdf</a></li>
    </ul>

    <footer>
      <div class="container">
        <div v-if="quote.status == ''" class="d-flex justify-content-center">
          <button
            type="button"
            class="btn btn-success btn-rounded btn-lg btn-block"
            @click.prevent="changeStep(+1)">Enviar Orçamento ›</button>
        </div>
        <div v-else class="d-flex justify-content-center">
          <button type="button" class="btn btn-outline-danger btn-lg btn-rounded mr-3">Declinar</button>
          <button type="button" class="btn btn-success btn-rounded btn-lg">Aceitar solicitação</button>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'quote-confirm',
  props: ['quote'],
  methods: {
    ...mapMutations([
      'changeStep'
    ])
  }
}
</script>
