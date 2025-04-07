<script setup lang="ts"></script>

<template>
  <div>
    <h1>Page HomeView</h1>
    <RouterLink :to="{ name: '/projects/[id]', params: { id: 12 } }">Go to project</RouterLink>
  </div>
</template>
