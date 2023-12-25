<template>
<div>
    <q-carousel
      v-model="slide"
      swipeable
      animated
      arrows
      navigation
      navigation-icon="radio_button_unchecked"
      control-type="regular"
      control-color="orange"
      control-text-color="grey-8"
      height="100vh"
      class=""
    >
      <q-carousel-slide :name="group.name" class="q-pa-none" v-for="group in menu" :key="group.name">
        <q-scroll-area class="fit">
          <div class="column no-wrap flex-center q-carousel--padding">
            {{ group.name }}
            <div class="q-mt-md"  v-for="item in group.items" :key="item.name">
              {{ item.name }}
            </div>
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

const slide = ref('Heissgetränke')
const menu: Group[] = data;

</script>