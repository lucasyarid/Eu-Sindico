<template>
  <section id="signup">
    <div class="signup-form">
      <form @submit.prevent="onSubmit">
        <div class="input">
          <label for="email">Mail</label>
          <input
            type="email"
            id="email"
            v-model="email">
        </div>
        <div class="input">
          <label for="age">Your Age</label>
          <input
            type="number"
            id="age"
            v-model.number="age">
        </div>
        <div class="input">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="password">
        </div>
        <div class="input">
          <label for="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            v-model="confirmPassword">
        </div>
        <div class="input">
          <label for="country">Country</label>
          <select id="country" v-model="country">
            <option value="usa">USA</option>
            <option value="india">India</option>
            <option value="uk">UK</option>
            <option value="germany">Germany</option>
            <option value="brazil">Brazil</option>
          </select>
        </div>
        <div class="hobbies">
          <h3>Add some Hobbies</h3>
          <button @click="onAddHobby" type="button">Add Hobby</button>
          <div class="hobby-list">
            <div
              class="input"
              v-for="(hobbyInput, index) in hobbyInputs"
              :key="hobbyInput.id">
              <label :for="hobbyInput.id">Hobby #{{ index }}</label>
              <input
                type="text"
                :id="hobbyInput.id"
                v-model="hobbyInput.value">
              <button @click="onDeleteHobby(hobbyInput.id)" type="button">X</button>
            </div>
          </div>
        </div>
        <div class="input inline">
          <input type="checkbox" id="terms" v-model="terms">
          <label for="terms">Accept Terms of Use</label>
        </div>
        <div class="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'signup',
  props: ['childClasses'],
  data () {
    return {
      title: 'Cadastre-se',
      classes: ['hide-menu', 'hide-notification'],
      email: '',
      age: null,
      password: '',
      confirmPassword: '',
      country: 'usa',
      hobbyInputs: [],
      terms: false
    }
  },
  methods: {
    setName () {
      this.$emit('getTitle', this.title)
    },
    setClasses () {
      this.$emit('getClasses', this.classes)
    },
    onAddHobby () {
      const newHobby = {
        id: Math.random() * Math.random() * 1000,
        value: ''
      }
      this.hobbyInputs.push(newHobby)
    },
    onDeleteHobby (id) {
      this.hobbyInputs = this.hobbyInputs.filter(hobby => hobby.id !== id)
    },
    onSubmit () {
      const formData = {
        email: this.email,
        age: this.age,
        password: this.password,
        confirmPassword: this.confirmPassword,
        country: this.country,
        hobbies: this.hobbyInputs.map(hobby => hobby.value),
        terms: this.terms
      }
      console.log(formData)
      this.$store.dispatch('signup', formData)
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
