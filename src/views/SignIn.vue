<template>
  <section id="signin">
    <div class="signin-form">
      <form @submit.prevent="onSubmit">
        <div class="input">
          <label for="email">Mail</label>
          <input
            type="email"
            id="email"
            v-model="email">
        </div>
        <div class="input">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="password">
        </div>
        <div class="row">
          <div class="col submit">
            <button type="submit">Submit</button>
          </div>
          <div class="col signup">
            <router-link to="/signup" type="submit" tag="button">SignUp</router-link>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
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
