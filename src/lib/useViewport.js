import { onMounted, onBeforeUnmount, ref } from 'vue'

/**
 * Composable that observes when an element enters the viewport.
 * Returns a template ref and a `visible` boolean.
 * Respects prefers-reduced-motion by immediately showing content.
 *
 * @param {Object} options
 * @param {number} options.threshold - Intersection ratio threshold (default 0.15)
 * @param {string} options.rootMargin - Root margin (default '0px 0px -60px 0px')
 */
export function useViewport({ threshold = 0.15, rootMargin = '0px 0px -60px 0px' } = {}) {
  const el = ref(null)
  const visible = ref(false)
  let observer = null

  const reducedMotion = typeof window !== 'undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  onMounted(() => {
    if (reducedMotion || !el.value) {
      visible.value = true
      return
    }

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visible.value = true
          observer?.disconnect()
        }
      },
      { threshold, rootMargin }
    )
    observer.observe(el.value)
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
  })

  return { el, visible }
}
