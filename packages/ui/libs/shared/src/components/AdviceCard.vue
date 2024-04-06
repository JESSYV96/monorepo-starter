<template>
  <div class="advice">
    <small class="advice__id">Advice #{{ advice.id }}</small>
    <blockquote class="advice__text">{{ advice.advice }}</blockquote>
    <div>


    </div>
    <button class="advice__button" @click="$emit('click')">Button</button>
  </div>
</template>

<script setup lang="ts">
import type { Advice } from "@jessy/core";
const { advice } = defineProps<{advice: Advice}>()
defineEmits(['click'])
</script>

<style scoped>
.advice {
  height: 150px;
  max-width: 550px;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.3rem;
  background-color: hsl(217, 19%, 24%);
  border-radius: 1rem;
  position: relative;
}
.advice__id {
  color: hsl(150, 100%, 66%);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
}
.advice__text {
  text-align: center;
  font-size: 24px;
  font-weight: 800;
  color:hsl(193, 38%, 86%);
}
.advice__button {
  background-color: #52ffa8;
  width: 66px;
  border-radius: 33px;
  position: absolute;
  bottom: -33px;
  height: 66px;
  border: 0;
  cursor: pointer;
}
</style>
