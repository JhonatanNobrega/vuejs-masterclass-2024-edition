<script setup lang="ts">
interface LinkProp {
  title: string
  to: string
  icon: string
}
defineProps<{
  links: LinkProp[]
}>()
</script>

<template>
  <RouterLink
    exact-active-class="text-primary bg-muted"
    v-for="link in links"
    :key="link.title"
    :to="link.to"
    class="hover:text-primary text-muted-foreground mx-2 flex items-center justify-center gap-3 rounded-lg px-4 py-2 transition-colors lg:justify-normal"
  >
    <iconify-icon :icon="link.icon"></iconify-icon>
    <span class="hidden text-nowrap lg:block">{{ link.title }}</span>
  </RouterLink>
</template>
