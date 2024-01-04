<template>
    <div v-if="group">
        <h4 class="text-primary">{{ group.name }}</h4>
        <p>{{ group.description }}</p>

        <q-list separator>
            <q-item v-for="item in group.items" :key="item.name" class="q-pl-none">
                <q-item-section>
                    <q-item-label>
                      <span class="text-primary">{{ item.name }}</span>
                    </q-item-label>
                    <q-item-label caption v-if="item?.description">
                      <span class="text-secondary">{{ item.description }}</span>
                    </q-item-label>
                </q-item-section>
                <q-item-section side>
                  <table>
                    <tbody>
                      <tr v-for="variant in item.variants" :key="variant.name">
                        <td class="text-right q-pr-md text-secondary">{{variant.name}}</td>
                        <td v-if="variant?.price" class="text-right text-primary">{{ moneyFormatter.format(variant.price) }}</td>
                      </tr>
                    </tbody>
                  </table>
                </q-item-section>
            </q-item>
        </q-list>
    </div>
</template>

<script setup lang="ts">
import {Group} from './models'
import {moneyFormatter} from './helpers'

defineProps<{
    group?: Group
}>()
</script>
