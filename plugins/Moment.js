import Vue from 'vue'

import VueMoment from 'vue-moment'
import moment from 'moment-timezone'
import 'moment/locale/is';

Vue.use(VueMoment, {
  moment,
})