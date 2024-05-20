
export const state = {
    selectedEtablissement: JSON.parse(localStorage.getItem('selectedEtablissement')),

}

export const mutations = {
    SET_SELECTED_ETABLISSEMENT(state, newValue) {
        state.selectedEtablissement = newValue
        saveState('selectedEtablissement', newValue)
    }
}

export const getters = {

}

export const actions = {
    // This is automatically run in `src/state/store.js` when the app
    // starts, along with any other actions named `init` in other modules.
    // eslint-disable-next-line no-unused-vars


    // Logs in the current user.
    setSelectedEtablissement({ commit }, etablissement= {}) {

        commit('SET_SELECTED_ETABLISSEMENT', etablissement)
    },




}

// ===
// Private helpers
// ===

function saveState(key, state) {
    localStorage.setItem(key, JSON.stringify(state))
}
