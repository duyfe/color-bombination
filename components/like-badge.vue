<template>
  <div class="like">
    <heart-icon :active="isLiked" />
    {{ likes }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import HeartIcon from '~/icons/heart.vue'

export default Vue.extend({
  name: 'LikeBadgeComponent',
  components: { HeartIcon },
  props: {
    isLiked: {
      type: Boolean,
      default: false
    },
    likes: {
      type: Number,
      default: 0
    }
  }
})
</script>

<style lang="scss" scoped>
.like {
  @apply rounded-sm bg-white shadow-md absolute top-[8px] right-3 flex items-center flex-nowrap text-[8px] text-black tracking-tighter w-[50px] h-[25px] px-[5px] cursor-pointer transition-all duration-300;

  @apply hover:text-pink-50;

  svg {
    @apply mr-1 w-[16px];
  }
}
</style>
