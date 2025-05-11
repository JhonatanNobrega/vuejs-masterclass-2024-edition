import type { PostgrestError } from '@supabase/supabase-js'

import type { CustomError, ExtendedPostgrestError } from '@/types/Error'

export const useErrorStore = defineStore('error-store', () => {
  const activeError = ref<null | CustomError | ExtendedPostgrestError>(null)
  const setError = ({
    error,
    customCode,
  }: {
    error: string | PostgrestError
    customCode: number
  }) => {
    if (typeof error === 'string') {
      activeError.value = Error(error)
      activeError.value.customCode = customCode
      return
    }
    activeError.value = error
    activeError.value.statusCode = customCode
  }
  const clearError = () => {
    activeError.value = null
  }
  return {
    activeError,
    setError,
    clearError,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useErrorStore, import.meta.hot))
}
