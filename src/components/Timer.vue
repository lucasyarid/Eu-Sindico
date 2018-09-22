<template>
  <div class="timer">
    <div class="timer-content">
      <small>Expira em</small>
      <time>2 dias</time>
    </div>
    <svg
      class="progress-ring"
      :height="radius * 2"
      :width="radius * 2"
      >
      <circle
        :stroke-dasharray="circumference + ' ' + circumference"
        :style="{ strokeDashoffset: strokeDashoffset }"
        :stroke-width="stroke"
        fill="transparent"
        :r="normalizedRadius"
        :cx="radius"
        :cy="radius"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'timer',
  props: ['progress'],
  data () {
    return {
      radius: 46,
      stroke: 4,
      normalizedRadius: 0,
      circumference: 0
    }
  },
  methods: {
    setNormalizedRadius () {
      this.normalizedRadius = this.radius - this.stroke * 2
    },
    setCircumference () {
      this.circumference = this.normalizedRadius * 2 * Math.PI
    }
  },
  computed: {
    strokeDashoffset () {
      return this.circumference - this.progress / 100 * this.circumference
    }
  },
  created () {
    this.setNormalizedRadius()
    this.setCircumference()
  }
}
</script>
