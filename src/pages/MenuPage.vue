<template>
    <div>
        <q-carousel
                v-model="slide"
                swipeable
                animated
                arrows
                infinite
                control-type="regular"
                control-text-color="grey-8"
                height="100vh"
        >
            <q-carousel-slide name="greeting" class="q-pa-none">
                <q-scroll-area class="fit">
                    <div class="column no-wrap q-carousel--padding">
                        <greeting-item/>
                    </div>
                </q-scroll-area>
            </q-carousel-slide>
            <q-carousel-slide :name="group.uuid" class="q-pa-none" v-for="group in menu" :key="group.uuid">
                <q-scroll-area class="fit">
                    <div class="column no-wrap q-carousel--padding">
                        <menu-item :group="group"/>
                    </div>
                </q-scroll-area>
            </q-carousel-slide>
        </q-carousel>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Group } from 'src/components/models';
import data from '../assets/menu.json'
import MenuItem from 'src/components/MenuItem.vue';
import GreetingItem from 'src/components/GreetingItem.vue';

const slide = ref('greeting')
const menu: Group[] = data;

</script>