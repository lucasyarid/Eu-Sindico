<template>
  <section id="signin">
    <div class="signin-form">
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
            data-tooltip="Senha inválida"></div>
          <input
            type="password"
            id="password"
            @blur="$v.password.$touch()"
            v-model="password">
        </div>
        {{ this.$store.state.httpErrorMessage }}
        <div class="row">
          <div class="col submit">
            <button type="submit" :disabled="$v.$invalid">Entrar</button>
          </div>
          <div class="col submit">
            <router-link to="/signup" tag="button">Cadastre-se</router-link>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'signin',
  props: ['childClasses'],
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
    setName () {
      this.$emit('getTitle', this.title)
    },
    setClasses () {
      this.$emit('getClasses', this.classes)
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
    this.setClasses()
  },
  destroyed () {
    this.classes = ['']
    this.setClasses()
  }
}
</script>
