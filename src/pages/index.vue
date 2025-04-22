<template>
  <v-container>
    <v-text-field
      v-model="search"
      label="Filter by rocket name"
      prepend-icon="mdi-magnify"
    />
    <v-btn
      v-if="!store.loading && !store.error"
      color="neutral"
      class="mb-4"
      @click="store.addRocket()"
    >
      Add Rocket
    </v-btn>
    <v-alert
      v-if="store.loading"
      type="info"
    >
      Loading rockets...
    </v-alert>
    <v-alert
      v-if="store.error"
      type="error"
    >
      Failed to load rockets.
      <v-btn
        size="small"
        class="ml-2"
        @click="store.fetchRockets()"
      >
        Retry
      </v-btn>
    </v-alert>

    <v-row
      dense
      justify="center"
    >
      <v-col
        v-for="rocket in filteredRockets"
        :key="rocket.id"
        cols="12"
        sm="6"
        md="4"
      >
        <RocketCard :rocket="rocket" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useRocketStore } from '@/stores/rockets'
import RocketCard from '@/components/RocketCard.vue'

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
