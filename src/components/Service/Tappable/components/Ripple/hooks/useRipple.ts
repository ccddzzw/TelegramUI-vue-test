import { ref, reactive, onUnmounted } from 'vue'
import { useTimeout } from '../../../../../../hooks/useTimeout'
import { Wave } from '../Wave'



const RIPPLE_DELAY = 70
const WAVE_LIVE = 225

export function useRipple() {
  const clicks = ref<Wave[]>([])
  const pointerDelayTimers = reactive(new Map<number, number>())

  const { set: clearClicks } = useTimeout(() => {
    clicks.value = []
  }, WAVE_LIVE)

  function addClick(x: number, y: number, pointerId: number) {
    const dateNow = Date.now()
    clicks.value = [
      ...clicks.value.filter((click) => click.date + WAVE_LIVE > dateNow),
      { x, y, date: dateNow, pointerId },
    ]

    clearClicks()
    pointerDelayTimers.delete(pointerId)
  }

  const onPointerDown = (e: PointerEvent) => {
    const target = e.currentTarget as HTMLElement
    const { top, left } = target.getBoundingClientRect()
    const x = e.clientX - (left ?? 0)
    const y = e.clientY - (top ?? 0)

    const timerId = window.setTimeout(() => addClick(x, y, e.pointerId), RIPPLE_DELAY)
    pointerDelayTimers.set(e.pointerId, timerId)
  }

  const onPointerCancel = (e: PointerEvent) => {
    const timerId = pointerDelayTimers.get(e.pointerId)
    if (timerId) {
      clearTimeout(timerId)
      pointerDelayTimers.delete(e.pointerId)
    }
  }

  onUnmounted(() => {
    pointerDelayTimers.forEach((timerId) => clearTimeout(timerId))
    pointerDelayTimers.clear()
  })

  return {
    clicks,
    onPointerDown,
    onPointerCancel,
  }
}