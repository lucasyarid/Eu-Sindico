<template>
  <section id="signin">
    <img :src="logo" alt="Eu Síndico" style="margin: 0 auto; display:block;">
    <v-form @submit.prevent="onSubmit">
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 class="validate" :class="{invalid: $v.email.$error}">
            <div v-if="$v.email.$error" class="active"
                data-tooltip="Informe um e-mail válido"></div>
            <v-text-field
              type="email"
              label="E-Mail"
              @blur="$v.email.$touch()"
              v-model="email"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 class="validate" :class="{invalid: $v.password.$error}">
            <div v-if="$v.password.$error" class="active"
                data-tooltip="Senha inválida"></div>
            <v-text-field
              v-model="password"
              :append-icon="showPassword ? 'visibility_off' : 'visibility'"
              :type="showPassword ? 'text' : 'password'"
              label="Senha"
              @blur="$v.password.$touch()"
              @click:append="showPassword = !showPassword"
            ></v-text-field>
          </v-flex>
        </v-layout>
        {{ errorMessage }}
        <v-layout>
          <v-flex>
            <v-btn round block
              color="accent"
              :disabled="$v.$invalid"
              type="submit">Entrar</v-btn>
          </v-flex>
          <v-flex>
            <v-btn round block
              color="accent"
              to="/signup">Cadastre-se</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
  </section>
</template>

<script>
import logo from '@/assets/logo.png'
import { mapMutations, mapGetters } from 'vuex'
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'signin',
  data () {
    return {
      title: 'Login',
      classes: ['hide-menu', 'hide-notification'],
      email: '',
      password: '',
      showPassword: false,
      logo: logo
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
  computed: mapGetters([
    'errorMessage'
  ]),
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
