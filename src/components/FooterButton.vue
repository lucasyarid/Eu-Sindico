<template>
  <footer class="footer-button">
    <div class="container" v-if="!secondaryButton">
      <button
        type="button"
        class="btn"
        :class="classes">
        {{ title }}
      </button>
      <v-progress-circular
        :rotate="-90"
        :size="80"
        :width="4"
        :value="25"
        color="accent">
        <div class="timer">
          <div class="timer-content">
            <small>Expira em</small>
            <time>2 dias</time>
          </div>
        </div>
      </v-progress-circular>
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
  ]
}
</script>
