<script setup lang="ts">
const links = [
  {
    title: 'Dashboard',
    to: '/',
    icon: 'lucide:house',
  },
  {
    title: 'Projects',
    to: '/projects',
    icon: 'lucide:building-2',
  },
  {
    title: 'My Tasks',
    to: '/tasks',
    icon: 'lucide:badge-check',
  },
]
const accountLinks = [
  {
    title: 'Profile',
    to: '/profile',
    icon: 'lucide:user',
  },
  {
    title: 'Settings',
    to: '/settings',
    icon: 'lucide:settings',
  },
  {
    title: 'Sign out',
    to: '/signout',
    icon: 'lucide:log-out',
  },
]
</script>

<template>
  <aside
    class="bg-muted/40 fixed flex h-screen w-16 flex-col gap-2 border-r transition-[width] lg:w-52"
  >
    <div class="flex h-16 shrink-0 items-center justify-between gap-1 border-b px-2 lg:px-4">
      <Button variant="outline" size="icon" class="h-8 w-8">
        <iconify-icon icon="lucide:menu"></iconify-icon>
      </Button>

      <Button variant="outline" size="icon" class="h-8 w-8">
        <iconify-icon icon="lucide:plus"></iconify-icon>
      </Button>
    </div>
    <nav class="relative flex h-full flex-col justify-between gap-2">
      <div>
        <SidebarLinks :links="links" />
      </div>
      <div class="bg-background border-y py-3 text-center">
        <SidebarLinks :links="accountLinks" />
      </div>
    </nav>
  </aside>
</template>
