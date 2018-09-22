<template>
  <footer class="footer-button">
    <div class="container" v-if="!secondaryButton">
      <button
        type="button"
        class="btn"
        :class="classes">
        {{ title }}
      </button>
      <Timer
        v-if="showTimer"
        :progress="timerProgress"/>
    </div>
    <div class="container" v-else>
      <div class="row justify-content-center">
        <div class="col-4 control-gutter">
          <button
            type="button"
            class="btn"
            :class="secondaryClasses">
              {{ secondaryTitle }}
        </button>
        </div>
        <div class="col-8 control-gutter">
          <button
            type="button"
            class="btn"
            :class="classes">
              {{ title }}
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Timer from '@/components/Timer.vue'

export default {
  name: 'footer-button',
  props: [
    'title',
    'classes',
    'click',
    'showTimer',
    'timerProgress',
    'secondaryButton',
    'secondaryTitle',
    'secondaryClasses',
    'secondaryClick'
  ],
  components: {
    Timer
  }
}
</script>
