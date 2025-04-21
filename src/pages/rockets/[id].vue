<template>
    <v-container>
        <v-btn @click="$router.back()" class="mb-4">Back</v-btn>

        <v-skeleton-loader v-if="store.loading" type="image, heading, paragraph" class="mx-auto" max-width="600" />

        <v-alert v-else-if="store.error" type="error" class="my-4">
            Failed to load rocket. <v-btn @click="store.fetchRockets()">Retry</v-btn>
        </v-alert>

        <v-card v-else class="mx-auto" max-width="600">
            <v-img :src="rocket.flickr_images?.[0] || 'https://via.placeholder.com/600x400'" height="300px" cover />
            <v-card-title>{{ rocket.name }}</v-card-title>
            <v-card-text>
                <p><strong>Description:</strong> {{ rocket.description }}</p>
                <div class="mb-2"></div>
                <p><strong>Cost per launch:</strong> ${{ rocket.cost_per_launch.toLocaleString() }}</p>
                <div class="mb-2"></div>
                <p><strong>Country:</strong> {{ rocket.country }}</p>
                <div class="mb-2"></div>
                <p><strong>First Flight:</strong> {{ rocket.first_flight }}</p>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useRocketStore } from '@/stores/rockets'

const route = useRoute()
const store = useRocketStore()
const rocket = computed(() => store.getRocketById(route.params.id as string))

onMounted(async () => {
    if (!rocket.value) {
        await store.fetchRockets() // fallback if page is refreshed directly
    }
})
</script>
