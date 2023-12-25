<template>
<div>
    <q-carousel
      v-model="slide"
      swipeable
      animated
      arrows
      control-type="regular"
      control-text-color="grey-8"
      fullscreen
    >
      <q-carousel-slide :name="group.name" class="q-pa-none" v-for="group in menu" :key="group.name">
        <q-scroll-area class="fit">
          <div class="column no-wrap q-carousel--padding">
           <menu-item :group="group" />
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

const slide = ref('Heissgetränke')
const menu: Group[] = data;

</script>