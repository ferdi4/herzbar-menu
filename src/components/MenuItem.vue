<template>
    <div v-if="drinkGroup">
        <h4>{{ drinkGroup.name }}</h4>
        <p v-if="drinkGroup?.description">{{ drinkGroup.description }}</p>

        <q-list separator>
            <q-item v-for="item in drinkGroup?.items" :key="item.uuid" class="q-px-none">
                <q-item-section>
                    <q-item-label>
                        {{ item.name }}
                    </q-item-label>
                    <q-item-label caption>{{ item?.description }}</q-item-label>
                </q-item-section>
                <q-item-section side>
                    <div class="row">
                        <div v-if="item?.price">{{ moneyFormatter.format(item.price) }}</div>
                    </div>
                </q-item-section>
            </q-item>
        </q-list>
    </div>
</template>

<script setup lang="ts">
import {Group} from './models'
import {moneyFormatter} from './helpers'

defineProps<{
    drinkGroup?: Group
}>()
</script>
