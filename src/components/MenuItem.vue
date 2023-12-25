<template>
  <div v-if="group">
    <h2>{{ group.name }}</h2>
    <div class="q-mt-md" v-for="item in group.items" :key="item.name">
      {{ item.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { Group } from './models'

defineProps<{
  group?: Group
}>()
</script>
