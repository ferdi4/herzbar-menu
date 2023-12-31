<template>
  <div v-if="group">
    <h4>{{ group.name }}</h4>
      <p>{{group?.description}}</p>

    <q-list separator>
      <q-item v-for="item in group.items" :key="item.name" class="q-pl-none">
        <q-item-section>
          <q-item-label>
            {{ item.name }}
        </q-item-label>
          <q-item-label caption>{{ item?.description }}</q-item-label>
        </q-item-section>
        <q-item-section side>
            <div v-for="variant in item.variants" :key="variant.name">
                <span v-if="variant?.name">{{ variant.name }} | </span><span>{{ moneyFormatter.format(variant.price) }}</span>
            </div>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script setup lang="ts">
import { Group } from './models'
import { moneyFormatter } from './helpers'

defineProps<{
  group?: Group
}>()
</script>
