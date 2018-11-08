export const dateCalc = {
  methods: {
    setName () {
      this.$emit('getTitle', this.title)
    },
    getDaysLeft (date) {
      var today = new Date()
      var givenDay = new Date(date)
      var oneDay = 24 * 60 * 60 * 1000

      return Math.round(Math.abs((givenDay.getTime() - today.getTime()) / (oneDay)))
    },
    getDatePercentage (dateCreated, deadline) {
      var today = new Date()
      var setDateCreated = new Date(dateCreated)
      var setDeadline = new Date(deadline)
      var todayTime = today.getTime() - setDateCreated
      var totalLength = setDeadline - setDateCreated
      var percentage = todayTime * 100 / totalLength

      return Math.floor(percentage)
    }
  }
}
