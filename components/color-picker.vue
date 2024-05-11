<template>
  <div class="color-picker">
    <label :for="`colorPicker${index}`" class="color-picker__label">
      {{ label }}
    </label>
    <input
      :id="`colorPicker${index}`"
      type="color"
      class="color-picker__input"
      @change="handleColorChange"
    />
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'ColorPickerComponent',
  props: {
    index: {
      type: Number,
      default: 0
    },
    label: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      selectedColorHex: ''
    }
  },
  methods: {
    handleColorChange(event) {
      this.$emit('update', { color: event.target.value, index: this.index })
    }
  }
})
</script>

<style lang="scss" scoped>
.color-picker {
  @apply cursor-pointer relative;

  &__label {
    @apply cursor-pointer;
  }

  &__input {
    @apply opacity-0 absolute visible pointer-events-none select-none;
  }
}
</style>
