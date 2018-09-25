import Vue from 'vue'
import {
  Vuetify,
  VApp,
  // VGrid,
  VMenu,
  VDivider,
  VAvatar,
  VBadge,
  VBottomSheet,
  VBtn,
  VCarousel,
  VDialog,
  VDatePicker,
  VIcon,
  VList,
  VNavigationDrawer,
  VProgressCircular,
  VTabs,
  VTooltip,
  VRating,
  VTextField,
  VTextarea,
  transitions
} from 'vuetify'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    Vuetify,
    VApp,
    VAvatar,
    // VGrid,
    VMenu,
    VDivider,
    VBadge,
    VBottomSheet,
    VBtn,
    VCarousel,
    VDialog,
    VDatePicker,
    VIcon,
    VList,
    VNavigationDrawer,
    VProgressCircular,
    VTabs,
    VTooltip,
    VRating,
    VTextField,
    VTextarea,
    transitions
  },
  customProperties: true,
  iconfont: 'md'
})
