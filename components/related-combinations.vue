<template>
  <div class="related-combination">
    <h2 class="related-combination__title">Realted Combinations</h2>
    <div class="related-combination__grid">
      <div
        v-for="item in displayCombination"
        :key="item.id"
        :title="item.name"
        class="related-combination__grid__item"
        @click="handleSelectCombination(item)"
      >
        <div
          v-for="(color, index) in item.colors"
          :key="index"
          :style="{ backgroundColor: color }"
          class="related-combination__grid__item__color"
        />
      </div>
      <div
        v-if="isShowSeeMore"
        class="related-combination__button"
        @click="handleClickSeeMore"
      >
        See more combinations
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

import { RelatedCombination } from '~/types'

export default Vue.extend({
  name: 'RelatedCombinationComponent',
  props: {
    combinations: {
      type: Array as PropType<RelatedCombination[]>,
      required: true,
      default: () => [] as RelatedCombination[]
    }
  },
  data() {
    return {
      itemPerPage: 5,
      currentPage: 1
    }
  },
  computed: {
    displayCombination(): RelatedCombination[] {
      return this.combinations.slice(0, this.currentPage * this.itemPerPage)
    },
    totalPage(): number {
      return Math.ceil(this.combinations.length / this.itemPerPage)
    },
    isShowSeeMore(): boolean {
      return this.currentPage < this.totalPage
    }
  },
  methods: {
    handleClickSeeMore() {
      this.currentPage++
    },
    handleSelectCombination(combination: RelatedCombination) {
      this.$emit('selected', combination.id)
    }
  }
})
</script>

<style lang="scss" scoped>
.related-combination {
  @apply mt-12;

  &__title {
    @apply text-center text-[20px] leading-none text-brand;
  }

  &__grid {
    @apply grid grid-cols-2 grid-flow-row gap-5 mt-[22px];

    &__item {
      @apply h-[45px] flex rounded-[4px] overflow-hidden cursor-pointer;

      &__color {
        @apply flex-1;
      }
    }
  }

  &__button {
    @apply text-[8px] text-center flex justify-center items-center w-full text-black bg-gray-50 rounded-[4px] cursor-pointer h-[45px];
  }
}
</style>
