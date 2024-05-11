<template>
  <ul class="breadcrumb">
    <li v-for="(link, index) in links" :key="index" class="breadcrumb__item">
      <nuxt-link :to="link.href">{{ link.label }}</nuxt-link>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

import { Breadcrumb } from '~/types'

export default Vue.extend({
  name: 'PageBreadcrumbComponent',
  props: {
    links: {
      type: Array as PropType<Breadcrumb[]>,
      default: () => [] as Breadcrumb[]
    }
  }
})
</script>

<style lang="scss" scoped>
.breadcrumb {
  @apply flex flex-row items-center justify-center gap-x-[10px];

  &__item {
    @apply relative text-[8px] text-brand;

    &::after {
      @apply content-[''] w-[8px] h-[8px] bg-[url(/images/arrow.svg)] absolute -right-[13px] top-1/2 -translate-y-1/2 -translate-x-1/2;
    }

    &:last-child {
      @apply text-gray;

      &::after {
        @apply content-none;
      }

      a {
        @apply cursor-default;
      }
    }
  }
}
</style>
