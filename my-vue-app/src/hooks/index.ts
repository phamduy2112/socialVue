import { useAttrs } from 'vue'

export function useEmit(eventName: string) {
  const attrs = useAttrs()

  return () => {
    if (attrs[eventName]) {
      (attrs[eventName] as Function)()
    }
  }
}
