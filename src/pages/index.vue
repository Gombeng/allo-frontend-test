<template>
  <v-container>
    <h2 class="mb-4">🚀 Rocket List</h2>

    <!-- Filter Input -->
    <v-text-field v-model="search" label="Filter by rocket name" prepend-icon="mdi-magnify" />

    <!-- Add New Rocket Button -->
    <v-btn color="neutral" @click="store.addRocket()" class="mb-4">Add Rocket</v-btn>

    <!-- Loading -->
    <v-alert type="info" v-if="store.loading">Loading rockets...</v-alert>

    <!-- Error -->
    <v-alert type="error" v-if="store.error">
      Failed to load rockets.
      <v-btn size="small" @click="store.fetchRockets()" class="ml-2">Retry</v-btn>
    </v-alert>

    <!-- Rocket List -->
    <RocketCard v-for="rocket in filteredRockets" :key="rocket.id" :rocket="rocket" />

  </v-container>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import RocketCard from '@/components/RocketCard.vue'
import { useRocketStore } from '@/stores/rockets'

const store = useRocketStore()

onMounted(() => {
  if (store.rockets.length === 0) store.fetchRockets()
})

const search = ref('')

const filteredRockets = computed(() =>
  store.rockets.filter(r =>
    r.name.toLowerCase().includes(search.value.toLowerCase())
  )
)


</script>
