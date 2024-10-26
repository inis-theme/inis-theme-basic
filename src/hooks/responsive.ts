import { onMounted, onBeforeMount, onBeforeUnmount } from 'vue'
import { useDebounceFn } from '@vueuse/core'
import { addEventListen, removeEventListen } from '@/utils/common/listener'

const WIDTH = 992

function queryDevice() {
  const rect = document.body.getBoundingClientRect()
  return rect.width - 1 < WIDTH
}

export default function useResponsive(immediate?: boolean) {
  const appStore = useAppStore()
  function resizeHandler() {
    if (!document.hidden) {
      const isMobile = queryDevice()
      appStore.toggleDevice(isMobile ? 'mobile' : 'pc')
    }
  }
  const debounceFn = useDebounceFn(resizeHandler, 200)
  onMounted(() => {
    if (immediate) debounceFn()
  })
  onBeforeMount(() => {
    addEventListen(window, 'resize', debounceFn)
  })
  onBeforeUnmount(() => {
    removeEventListen(window, 'resize', debounceFn)
  })
}
