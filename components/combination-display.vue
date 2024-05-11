<template>
  <div class="combination" :data-id="combination.id">
    <like-badge :is-liked="combination.liked" :likes="combination.likes" />
    <div
      class="combination__background"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
      :title="combination.name"
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
        ></div>
        <h4 class="combination__colors__item__name">{{ color.name }}</h4>
        <span class="combination__colors__item__">{{ color.hex }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

import LikeBadge from './like-badge.vue'

import { Combination, CombinationColor } from '~/types'

export default Vue.extend({
  name: 'CombinationDisplayComponent',
  components: { LikeBadge },
  props: {
    combination: {
      type: Object as PropType<Combination>,
      required: true,
      default: () => ({} as Combination)
    }
  },
  computed: {
    backgroundImage(): string {
      return this.combination.featuredImage.url
    },
    colors(): CombinationColor[] {
      return this.combination.colors || []
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
        @apply w-full h-20 cursor-copy;
      }

      &__name {
        @apply font-semibold underline mt-[15px];
      }
    }
  }
}
</style>
