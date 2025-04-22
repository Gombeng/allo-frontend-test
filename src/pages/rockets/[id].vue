<template>
  <v-container>
    <v-btn
      class="mb-4"
      @click="$router.back()"
    >
      Back
    </v-btn>

    <v-skeleton-loader
      v-if="store.loading"
      type="image, heading, paragraph"
      class="mx-auto"
      max-width="600"
    />

    <v-alert
      v-else-if="store.error"
      type="error"
      class="my-4"
    >
      Failed to load rocket. <v-btn @click="store.fetchRockets()">
        Retry
      </v-btn>
    </v-alert>

    <v-row
      justify="center"
      class="mt-3"
    >
      <v-col>
        <v-row class="align-center">
          <v-col
            cols="12"
            md="6"
          >
            <v-img
              :src="rocket?.flickr_images?.[0] || 'https://via.placeholder.com/600x400'"
              alt="Rocket Image"
              height="300"
              cover
              class="rounded"
            />
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <h2 class="text-h5 text-md-h4 mb-4">
              {{ rocket?.name }}
            </h2>

            <p><strong>Description:</strong> {{ rocket?.description }}</p>
            <div class="my-2" />
            <p><strong>Cost per launch:</strong> ${{ rocket?.cost_per_launch.toLocaleString() }}</p>
            <div class="my-2" />
            <p><strong>Country:</strong> {{ rocket?.country }}</p>
            <div class="my-2" />
            <p><strong>First Flight:</strong> {{ rocket?.first_flight }}</p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useRocketStore } from '@/stores/rockets'

const route = useRoute()
const router = useRouter()
const store = useRocketStore()
const rocket = computed(() => store.getRocketById(route.params.id as string))

onMounted(async () => {
  if (!store.rockets.length) {
    await store.fetchRockets()
  }
})

if (!rocket.value) {
  router.replace('/error')
}
</script>
