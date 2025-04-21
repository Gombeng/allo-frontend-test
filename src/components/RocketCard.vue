<!-- src/components/RocketCard.vue -->
<template>
    <v-card class="mb-4" elevation="2">
        <v-img :src="rocket.flickr_images[0]" height="200px" cover alt="image"/>
        <v-card-title>{{ rocket.name }}</v-card-title>
        <v-card-text>
            {{ rocket.description }}
        </v-card-text>
        <v-card-actions>
            <v-btn :to="`/rockets/${rocket.id}`" color="primary">View Details</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup lang="ts">
defineProps<{
    rocket: any
}>()
</script>
