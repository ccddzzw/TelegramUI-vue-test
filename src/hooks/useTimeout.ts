import { ref, watch, onUnmounted } from 'vue'

export function useTimeout(callbackFunction: () => void, duration: number) {
  const timeoutId = ref<number | null>(null)

  const clear = () => {
    if (timeoutId.value !== null) {
      clearTimeout(timeoutId.value)
      timeoutId.value = null
    }
  }

  const set = () => {
    clear()
    timeoutId.value = setTimeout(callbackFunction, duration) as unknown as number
  }

  watch([() => callbackFunction, () => duration], () => {
    if (timeoutId.value !== null) {
      set()
    }
  })

  onUnmounted(clear)

  return { set, clear }
}