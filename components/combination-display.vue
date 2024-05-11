<template>
  <div class="combination" :data-id="displayedCombination.id">
    <like-badge
      :is-liked="displayedCombination.liked"
      :likes="displayedCombination.likes"
    />
    <div
      class="combination__background"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
      :title="displayedCombination.name"
    />
    <div class="combination__colors">
      <div
        v-for="(color, index) in colors"
        :key="index"
        class="combination__colors__item"
      >
        <div
          v-copy="color.hex"
          class="combination__colors__item__background"
          :style="{ backgroundColor: color.hex }"
          :title="color.name"
          @click="handleCopyValue"
        ></div>
        <h4 class="combination__colors__item__name">{{ color.name }}</h4>
        <color-picker
          :index="index"
          :label="color.hex"
          @update="handleUpdateColor"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

import LikeBadge from './like-badge.vue'
import ColorPicker from './color-picker.vue'

import { Combination, CombinationColor } from '~/types'

export default Vue.extend({
  name: 'CombinationDisplayComponent',
  components: { LikeBadge, ColorPicker },
  props: {
    combination: {
      type: Object as PropType<Combination>,
      required: true,
      default: () => ({} as Combination)
    }
  },
  data() {
    return {
      displayedCombination: this.combination
    }
  },
  computed: {
    backgroundImage(): string {
      return this.displayedCombination?.featuredImage?.url || ''
    },
    colors(): CombinationColor[] {
      return this.displayedCombination?.colors || []
    }
  },
  watch: {
    combination(value) {
      this.displayedCombination = value
    }
  },
  methods: {
    handleUpdateColor(value: { color: string; index: number }) {
      const colors = this.displayedCombination.colors
      colors[value.index].hex = value.color
    },
    handleCopyValue(ev: MouseEvent) {
      const el = ev.target as HTMLElement
      el.classList.add('copied')

      window.setTimeout(() => el.classList.remove('copied'), 2000)
    }
  }
})
</script>

<style lang="scss" scoped>
.combination {
  @apply w-full rounded-[4px] relative;

  &__background {
    @apply bg-cover bg-no-repeat h-[265px] w-full;
  }

  &__colors {
    @apply flex flex-row flex-nowrap;

    &__item {
      @apply flex-1 text-center text-[8px];

      &__background {
        @apply w-full h-20 relative;

        &::before {
          @apply content-['Copy'] absolute w-full h-full flex justify-center items-center text-white cursor-pointer opacity-0 transition-opacity duration-300;
        }

        &::after {
          @apply content-[''] w-[10px] h-[10px] flex justify-center items-center text-white cursor-pointer opacity-0 transition-opacity duration-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[url(/images/tick.svg)];
        }

        @apply hover:before:opacity-100;

        &.copied {
          @apply after:opacity-100;
          @apply before:opacity-0;
        }
      }

      &__name {
        @apply font-semibold underline mt-[15px];
      }
    }
  }
}
</style>
