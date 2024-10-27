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
  <div class="flex-center wh-100" v-else>
    <a-spin dot tip="疯狂加载中..." />
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
  @include useTheme {
    background-color: getVal(bgColor);
  }
}

#app {
  color: var(--text-color);
  .arco-result-title {
    @include useTheme {
      color: getVal(titleColor);
    }
  }
}
</style>
