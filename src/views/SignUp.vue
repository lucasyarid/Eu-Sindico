<template>
  <section id="signup">
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
              data-tooltip="Sua senha é muito curta"></div>
            <v-text-field
              v-model="password"
              :append-icon="showPassword ? 'visibility_off' : 'visibility'"
              :type="showPassword ? 'text' : 'password'"
              label="Senha"
              @blur="$v.password.$touch()"
              @click:append="showPassword = !showPassword"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6 md3 class="validate" :class="{invalid: $v.confirmPassword.$error}">
            <div v-if="$v.confirmPassword.$error" class="active"
              data-tooltip="As senhas não são iguais"></div>
            <v-text-field
              v-model="confirmPassword"
              :append-icon="showPassword ? 'visibility_off' : 'visibility'"
              :type="showPassword ? 'text' : 'password'"
              label="Confirme a Senha"
              @blur="$v.confirmPassword.$touch()"
              @click:append="showPassword = !showPassword"
            ></v-text-field>
          </v-flex>
          <v-flex>
            <div class="input inline">
              <input type="checkbox" id="terms" v-model="terms">
              <label for="terms"> Aceito os termos de uso</label>
            </div>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex>
            <v-btn round block
              color="green accent-3"
              :disabled="$v.$invalid"
              type="submit">Enviar</v-btn>
          </v-flex>
          <v-flex>
            <v-btn round block
              color="green accent-3"
              to="/signin">Login</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'

export default {
  name: 'signup',
  data () {
    return {
      title: 'Cadastre-se',
      classes: ['hide-menu', 'hide-notification'],
      email: '',
      password: '',
      confirmPassword: '',
      terms: '',
      showPassword: false
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    },
    confirmPassword: {
      sameAs: sameAs('password')
    },
    terms: {
      sameAs: sameAs(() => true)
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
      this.$store.dispatch('signup', formData)
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
