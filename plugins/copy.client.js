import Vue from 'vue'
import copy from 'copy-to-clipboard'

function copyToClipboard(element, value) {
  element.addEventListener('click', () => copy(value))
}

Vue.directive('copy', {
  bind(el, binding) {
    copyToClipboard(el, binding.value)
  },
  update(el, binding) {
    copyToClipboard(el, binding.value)
  }
})
