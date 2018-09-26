<template>
  <section id="signin">
    <v-form @submit.prevent="onSubmit">
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 sm6 md3 class="validate" :class="{invalid: $v.email.$error}">
            <div v-if="$v.email.$error" class="active"
                data-tooltip="Informe um e-mail válido"></div>
            <v-text-field
              type="email"
              label="E-Mail"
              @blur="$v.email.$touch()"
              v-model="email"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6 md3 class="validate" :class="{invalid: $v.password.$error}">
            <div v-if="$v.password.$error" class="active"
                data-tooltip="Senha inválida"></div>
            <v-text-field
              label="Senha"
              @blur="$v.password.$touch()"
              v-model="password"
            ></v-text-field>
          </v-flex>
        </v-layout>
        {{ this.$store.state.httpErrorMessage }}
        <v-layout>
          <v-flex>
            <v-btn round block
              color="green accent-3"
              :disabled="$v.$invalid"
              type="submit">Entrar</v-btn>
          </v-flex>
          <v-flex>
            <v-btn round block
              color="green accent-3"
              to="/signup">Cadastre-se</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'signin',
  data () {
    return {
      title: 'Login',
      classes: ['hide-menu', 'hide-notification'],
      email: '',
      password: ''
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required
    }
  },
  methods: {
    ...mapMutations([
      'setClasses'
    ]),
    setName () {
      this.$emit('getTitle', this.title)
    },
    onSubmit () {
      const formData = {
        email: this.email,
        password: this.password
      }
      console.log(formData)
      this.$store.dispatch('signin', {
        email: formData.email, password: formData.password
      })
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
