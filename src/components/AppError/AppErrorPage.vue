<script setup lang="ts">
const errorStore = useErrorStore()
const error = ref(errorStore.activeError)
const message = ref('')
const customCode = ref(0)
const details = ref('')
const code = ref('')
const hint = ref('')
const statusCode = ref(0)

if (error.value && !('code' in error.value)) {
  message.value = error.value.message
  customCode.value = error.value.customCode ?? 0
}

if (error.value && 'code' in error.value) {
  message.value = error.value.message
  details.value = error.value.details
  hint.value = error.value.hint
  code.value = error.value.code
  statusCode.value = error.value.statusCode ?? 0
}

const router = useRouter()
const hook = router.afterEach(() => {
  useErrorStore().clearError()
})

onBeforeUnmount(() => {
  hook()
})
</script>

<template>
  <section class="error">
    <div>
      <iconify-icon icon="lucide:triangle-alert" class="error__icon" />
      <h1 class="error__code">{{ customCode || code }}</h1>
      <p class="error__code" v-if="statusCode">Status Code: {{ statusCode }}</p>
      <p class="error__msg">{{ message }}</p>
      <p v-if="hint">{{ hint }}</p>
      <p v-if="details">{{ details }}</p>
      <div class="error-footer">
        <p class="error-footer__text">You'll find lots to explore on the home page.</p>
        <RouterLink to="/">
          <Button class="max-w-36"> Back to homepage </Button>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
@reference "@/assets/index.css";
.error {
  @apply mx-auto -mt-20 flex min-h-[90vh] flex-1 items-center justify-center p-10 text-center;
}

.error__icon {
  @apply text-destructive text-7xl;
}

.error__code {
  @apply text-secondary text-7xl font-extrabold;
}

.error__msg {
  @apply text-primary text-3xl font-extrabold;
}

.error-footer {
  @apply mt-6 flex flex-col items-center justify-center gap-5 font-light;
}

.error-footer__text {
  @apply text-muted-foreground text-lg;
}

p {
  @apply my-2;
}
</style>
