import { createStore } from 'vuex'

import menuModule from '@/store/modules/menu/index';
import uiModule from '@/store/modules/ui/index';

export default createStore({
  modules: {
    menu: menuModule,
    ui: uiModule
  }
})
