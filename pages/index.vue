<template>
  <div class="page home">
    <page-breadcrumb :links="breadcrumbs" />
    <h1 class="page__title">
      Pastel blonde <br />
      color combination
    </h1>
    <div class="page__section">
      <div class="container">
        <combination-display
          v-if="selectedCombination"
          :combination="selectedCombination"
        />
        <related-combinations
          :combinations="relatedCombinations"
          @selected="handleSelectedCombination"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import CombinationDisplay from '~/components/combination-display.vue'
import PageBreadcrumb from '~/components/page-breadcrumb.vue'
import RelatedCombinations from '~/components/related-combinations.vue'

import { data } from '~/constants/combinations'

import {
  Combination,
  CombinationResponse,
  RelatedCombination,
  Breadcrumb
} from '~/types'

import { detechMode } from '~/utils/helper'

export default Vue.extend({
  name: 'HomePage',
  components: {
    CombinationDisplay,
    RelatedCombinations,
    PageBreadcrumb
  },
  data() {
    const breadcrumbs: Breadcrumb[] = [
      { label: 'Colors', href: '/' },
      { label: 'Color Palettes', href: '/' },
      { label: 'Pastel Blonde', href: '' }
    ]

    return {
      selectedIndex: 0,
      breadcrumbs
    }
  },
  computed: {
    conbinations(): CombinationResponse[] {
      return data.combinations || []
    },
    selectedCombination(): Combination {
      return (
        this.conbinations[this.selectedIndex].combination || ({} as Combination)
      )
    },
    relatedCombinations(): RelatedCombination[] {
      return (
        this.conbinations[this.selectedIndex].relatedCombinations ||
        ([] as RelatedCombination[])
      )
    }
  },
  watch: {
    selectedCombination() {
      this.setTheme()
    }
  },
  mounted() {
    this.setTheme()
  },
  methods: {
    handleSelectedCombination(id: number) {
      const selectedIndex = this.conbinations.findIndex(
        (item) => item.combination.id === id
      )

      this.selectedIndex = selectedIndex > 0 ? selectedIndex : 0
    },
    setTheme() {
      // set body background color
      document.body.style.backgroundColor = this.selectedCombination.color.hex

      // update mode
      const mode = detechMode(this.selectedCombination.color.hex)
      this.$store.commit('update', mode)
    }
  }
})
</script>

<style lang="scss" scoped>
.page {
  @apply pt-[22px];

  &__title {
    @apply text-center text-[27px] mt-[10px] leading-[31px] mb-[60px] text-brand;
  }

  &__section {
    @apply relative overflow-hidden min-h-screen;

    .container {
      @apply z-50;
    }

    &::before {
      @apply content-[''] w-full h-[200px] absolute top-0 bg-[url(/images/foreground.png)] bg-no-repeat;
      background-size: 100% 100%;
    }

    &::after {
      @apply content-[''] w-full h-full bg-white absolute top-[199px] z-[-1];
    }
  }
}
</style>
