import { createStore } from 'vuex'

import menuModule from '@/store/modules/menu/index';

export default createStore({
  modules: {
    menu: menuModule,
  }
})
