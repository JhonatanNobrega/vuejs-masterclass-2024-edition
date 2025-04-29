<script setup lang="ts"></script>

<template>
  <AuthLayout>
    <RouterView #="{ Component, route }">
      <Suspense v-if="Component" :timeout="0">
        <Component :is="Component" :key="route.name"></Component>
        <template #fallback>
          <span>Loading..</span>
        </template>
      </Suspense>
    </RouterView>
  </AuthLayout>
</template>
