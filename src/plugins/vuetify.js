import Vue from 'vue'
import {
  Vuetify,
  VApp,
  VAvatar,
  VBadge,
  VBottomSheet,
  VBtn,
  VCarousel,
  VDatePicker,
  VIcon,
  VList,
  VNavigationDrawer,
  VProgressCircular,
  VTabs,
  VTooltip,
  transitions
} from 'vuetify'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    Vuetify,
    VApp,
    VAvatar,
    VBadge,
    VBottomSheet,
    VBtn,
    VCarousel,
    VDatePicker,
    VIcon,
    VList,
    VNavigationDrawer,
    VProgressCircular,
    VTabs,
    VTooltip,
    transitions
  },
  customProperties: true,
  iconfont: 'md'
})
