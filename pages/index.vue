<template>
  <div class="container">
    <combination-display
      v-if="selectedCombination"
      :combination="selectedCombination"
    />
    <related-combinations :combinations="relatedCombinations" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import CombinationDisplay from '~/components/combination-display.vue'
import RelatedCombinations from '~/components/related-combinations.vue'

import { data } from '~/constants/combinations'
import { Combination, CombinationResponse, RelatedCombination } from '~/types'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    CombinationDisplay,
    RelatedCombinations
  },
  data() {
    return {
      selectedIndex: 0
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
  mounted() {
    console.log(this.selectedCombination)
  }
})
</script>
