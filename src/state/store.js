import { createStore } from 'vuex'

import modules from './modules'

const store = createStore({
  modules,
  state : {
    currentUser: JSON.parse(localStorage.getItem('currentUser')),
    selectedEtablissement: JSON.parse(localStorage.getItem('selectedEtablissement')),

  },
  mutations : {
    SET_CURRENT_USER(state, newValue) {
      state.currentUser = newValue
      saveState('currentUser', newValue)
    },
    SET_SELECTED_ETABLISSEMENT(state, newValue) {
      state.selectedEtablissement = newValue
      saveState('selectedEtablissement', newValue)
    }
  },
  getters : {
    // Whether the user is currently logged in.
    loggedIn(state) {
      return !!state.currentUser
    }
  },
  actions : {
    // This is automatically run in `src/state/store.js` when the app
    // starts, along with any other actions named `init` in other modules.
    // eslint-disable-next-line no-unused-vars


      // Logs in the current user.
      logIn({ commit }, user= {}) {

        commit('SET_CURRENT_USER', user)
      },
    setSelectedEtablissement({ commit }, etablissement= {}) {

      commit('SET_SELECTED_ETABLISSEMENT', etablissement)
    },
  },
  // Enable strict mode in development to get a warning
  // when mutating state outside of a mutation.
  // https://vuex.vuejs.org/guide/strict.html
  strict: process.env.NODE_ENV !== 'production',
})

export default store

function saveState(key, state) {
  window.sessionStorage.setItem(key, JSON.stringify(state))
}

