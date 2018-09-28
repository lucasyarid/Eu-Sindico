import Vue from 'vue'
import colors from 'vuetify/es5/util/colors'

import {
  Vuetify,
  VApp,
  VGrid,
  VMenu,
  VDivider,
  VAvatar,
  VBadge,
  VBottomSheet,
  VForm,
  VBtn,
  VSwitch,
  VCard,
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
    VGrid,
    VMenu,
    VDivider,
    VBadge,
    VBottomSheet,
    VForm,
    VBtn,
    VSwitch,
    VCard,
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
  iconfont: 'md',
  theme: {
    primary: colors.lightBlue.lighten2,
    secondary: colors.red.lighten1,
    accent: colors.green.accent3
  }
})
