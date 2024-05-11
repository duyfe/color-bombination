<template>
  <div>Hi</div>
</template>

<script lang="ts">
import Vue from 'vue'
import conbinations from '@/constants/combinations.json'

export default Vue.extend({
  name: 'IndexPage',
  mounted() {
    console.log(conbinations)
  },
})
</script>
