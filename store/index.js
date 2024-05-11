export const state = () => ({
  mode: 'light'
})

export const getters = {
  getMode(state) {
    return state.mode
  }
}

export const mutations = {
  update(state, mode) {
    document.documentElement.setAttribute('data-theme', mode)
    document.documentElement.style.colorScheme = mode
    state.mode = mode
  }
}
