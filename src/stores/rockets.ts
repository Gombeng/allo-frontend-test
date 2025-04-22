import {
  generateCostPerLaunch,
  generateFirstFlight,
  generateRocketName,
  getRandomDescription,
} from "@/utils";
import type { IRocket } from "@/utils/type";
import { defineStore } from "pinia";
import { useRouter } from "vue-router";

const router = useRouter();

export const useRocketStore = defineStore("rockets", {
  state: () => ({
    rockets: [] as IRocket[],
    loading: false,
    error: false,
  }),

  actions: {
    async fetchRockets() {
      this.loading = true;
      this.error = false;
      try {
        const res = await fetch("https://api.spacexdata.com/v4/rockets");
        if (!res.ok) throw new Error();
        this.rockets = await res.json();
      } catch {
        this.error = true;
        router.push({
          path: "/error",
          query: { message: "Failed to load rocket data." },
        });
      } finally {
        this.loading = false;
      }
    },

    addRocket() {
      const addMockRocket = {
        id: Math.random().toString(36).substring(7),
        name: `(dummy) ${generateRocketName()}`,
        description: getRandomDescription(),
        flickr_images: ["https://picsum.photos/600/400"],
        cost_per_launch: generateCostPerLaunch(),
        country: "Republic of the Marshall Islands",
        first_flight: generateFirstFlight(),
      };
      this.rockets.unshift(addMockRocket);
    },

    getRocketById(id: string) {
      return this.rockets.find((r) => r.id === id);
    },
  },
});
