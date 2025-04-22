<template>
  <v-container class="text-center h-100 d-flex justify-center align-center flex-column">
    <h1 class="text-h4 mb-4">
      Something went wrong
    </h1>
    <p class="mb-4">
      An unexpected error occurred.
    </p>
    <v-btn
      color="primary"
      @click="$router.push('/')"
    >
      Go Back Home
    </v-btn>
  </v-container>
</template>
