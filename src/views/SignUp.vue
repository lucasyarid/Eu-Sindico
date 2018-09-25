<template>
  <section id="signup">
    <div class="signup-form">
      <form @submit.prevent="onSubmit">
        <div class="input validate" :class="{invalid: $v.email.$error}">
          <label for="email">E-Mail</label>
          <div v-if="$v.email.$error" class="active"
            data-tooltip="Informe um e-mail válido"></div>
          <input
            type="email"
            id="email"
            @blur="$v.email.$touch()"
            v-model="email">
        </div>
        <div class="input validate" :class="{invalid: $v.password.$error}">
          <label for="password">Senha</label>
          <div v-if="$v.password.$error" class="active"
            data-tooltip="Sua senha é muito curta"></div>
          <input
            type="password"
            id="password"
            @blur="$v.password.$touch()"
            v-model="password">
        </div>
        <div class="input validate" :class="{invalid: $v.confirmPassword.$error}">
          <label for="confirm-password">Confirme a senha</label>
          <div v-if="$v.confirmPassword.$error" class="active"
            data-tooltip="As senhas não são iguais"></div>
          <input
            type="password"
            id="confirm-password"
            @blur="$v.confirmPassword.$touch()"
            v-model="confirmPassword">
        </div>
        <div class="input inline">
          <input type="checkbox" id="terms" v-model="terms">
          <label for="terms"> Aceito os termos de uso</label>
        </div>
        <div class="row">
          <div class="col submit">
            <button type="submit" :disabled="$v.$invalid">Enviar</button>
          </div>
          <div class="col submit">
            <router-link to="/signin" tag="button">Login</router-link>
          </div>
        </div>
      </form>
    </div>
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
      terms: false
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
