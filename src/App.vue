<script setup lang="ts">
import { listenerAuthCode } from '@/utils/emitter/auth'

const systemStore = useSystemStore()
systemStore.init()

listenerAuthCode()

useDark({
  selector: 'html',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: 'light'
})
</script>

<template>
  <router-view v-if="systemStore.pass" />
  <div v-else class="flex-center wh-100">
    <a-result :status="null" title="系统异常" subtitle="请检查后端程序是否正常运行！">
      <template #icon> <icon-face-frown-fill /> </template>
    </a-result>
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: douyu;
  src:
    url(/static/fonts/douyu.woff) format('woff'),
    url(/static/fonts/douyu.ttf) format('truetype');
}

@font-face {
  font-family: iconfont;
  src: url(/static/fonts/iconfont.eot);
  src:
    url(/static/fonts/iconfont.eot#iefix) format('embedded-opentype'),
    url(/static/fonts/iconfont.woff2) format('woff2'),
    url(/static/fonts/iconfont.woff) format('woff'),
    url(/static/fonts/iconfont.ttf) format('truetype');
  font-display: swap;
}
* {
  @include useTheme {
    @include scrollbar(5px, getVal(scrollColor));
  }
}

html,
body,
#app {
  height: 100%;
}
</style>
