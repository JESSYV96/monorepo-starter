<script setup lang="ts">
import { AdviceCard } from '@jessy/shared'
import { getAdvice } from "@jessy/data"
import { useQuery } from '@tanstack/vue-query'

const { data: advice, refetch } = useQuery({
  queryKey: ['getAdvice'],
  queryFn:  async () => getAdvice(),
})

const refetchAdvice = async () => {
  await refetch();
}

</script>

<template>
  <div>
    <AdviceCard v-if="advice" :advice="advice" @click="refetchAdvice" />
  </div>
</template>

<style scoped>

</style>
