<template>
  <v-card class="h-100">
    <v-img
      :src="rocket.flickr_images[0]"
      height="300"
      cover
      alt="image"
    />
    <v-card-title>{{ rocket.name }}</v-card-title>
    <v-card-text>
      <p class="clamp-text">
        {{ rocket.description }}
      </p>
    </v-card-text>
    <v-card-actions>
      <v-btn
        :to="`/rockets/${rocket.id}`"
        color="primary"
      >
        View Details
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import type { IRocket } from '@/utils/type';

defineProps<{
  rocket: IRocket
}>()
</script>

<style scoped>
.clamp-text {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
