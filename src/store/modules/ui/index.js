export default {
  namespaced: true,

  state() {
    return {
      isLoading: false,
      preloadedRoutes: []
    }
  },

  mutations: {
    SET_LOADING(state, isLoading) {
      state.isLoading = isLoading;
    },
    ADD_PRELOADED_ROUTE(state, routeName) {
      if (!state.preloadedRoutes.includes(routeName)) {
        state.preloadedRoutes.push(routeName);
      }
    }
  },

  getters: {
    isLoading: state => state.isLoading,
    isRoutePreloaded: state => routeName => state.preloadedRoutes.includes(routeName)
  },

  actions: {
    startLoading({ commit }) {
      commit('SET_LOADING', true);
    },
    stopLoading({ commit }) {
      commit('SET_LOADING', false);
    },
    markRoutePreloaded({ commit }, routeName) {
      commit('ADD_PRELOADED_ROUTE', routeName);
    }
  }
}
