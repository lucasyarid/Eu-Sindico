<template>
  <div class="container">
    <h3>Envie seu orçamento</h3>

    <h4>PREENCHA OS DADOS</h4>

    <div class="form-row">
      <div class="col mb-1 mt-1">
        <label for="company-name" class="mb-0">Nome da Empresa</label>
        <input type="text" class="form-control" v-model="quote.companyName" id="company-name" value="">
      </div>
      <div class="col mb-1 mt-1">
        <label for="company-phone" class="mb-0">Telefone</label>
        <input type="number" class="form-control" v-model.number="quote.companyPhone" id="company-phone" value="">
      </div>
    </div>
    <div class="form-row">
      <div class="col mb-1 mt-1">
        <label for="company-site" class="mb-0">Site da Empresa</label>
        <input type="text" class="form-control" v-model="quote.companyWebsite" id="company-site">
      </div>
    </div>
    <div class="form-row">
      <div class="col mb-1 mt-1">
        <label for="order-time" class="mb-0">Tempo Estimado</label>
        <input type="text" class="form-control" v-model="quote.time" id="order-time" value="">
      </div>
      <div class="col mb-1 mt-1">
        <label for="order-cost" class="mb-0">Custo</label>
        <input type="number" class="form-control" v-model.number="quote.price" id="order-cost" value="">
      </div>
    </div>
    <div class="form-row">
      <div class="col-md-4 mb-1 mt-3 fileupload">
        <div class="row no-gutters">
          <div class="col-auto p-0 m-0">
            <h4 class="pr-3">Adicione Anexos</h4>
          </div>
          <div class="col">
            <div id="progress-bar" class="progress">
              <div class="progress-bar progress-bar-striped bg-success" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%"></div>
            </div>
          </div>
        </div>
        <span class="btn btn-camera fileinput-button">
          <i class="fa fa-camera"></i>
          <input type="file" name="files[]" multiple="">
        </span>
        <span class="btn btn-attachment fileinput-button">
          <i class="fa fa-paperclip"></i>
          <input type="file" name="files[]" multiple="">
        </span>
      </div>
    </div>
    <footer>
      <div class="d-flex justify-content-center">
        <button
          type="button"
          class="btn btn-success btn-rounded btn-lg btn-block"
          :disabled="$v.$invalid"
          @click.prevent="changeStep(+1)">Prosseguir ›</button>
      </div>
    </footer>
  </div>
</template>

<script>
import { required, numeric } from 'vuelidate/lib/validators'
import { mapMutations } from 'vuex'

export default {
  name: 'quote-info',
  props: ['quote'],
  validations: {
    quote: {
      companyName: { required },
      companyPhone: { required },
      time: { required },
      price: {
        required,
        numeric
      }
    }
  },
  methods: {
    ...mapMutations([
      'changeStep'
    ])
  }
}
</script>
