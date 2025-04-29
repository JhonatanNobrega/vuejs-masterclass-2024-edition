<script setup lang="ts"></script>

<template>
  <nav class="bg-muted/40 flex h-16 items-center justify-between gap-2 border-b px-6">
    <form class="relative h-fit w-full max-w-96">
      <iconify-icon
        class="text-muted-foreground absolute top-[50%] left-2.5 translate-y-[-50%]"
        icon="lucide:search"
      ></iconify-icon>
      <Input class="bg-background w-full pl-8" type="text" placeholder="Search ..." />
    </form>
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@radix-vue" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </nav>
</template>
