<template>
  <div class="admin-side-wrap no-select">
    <div class="side-logo-wrap py-10 flex-center">
      <div class="flex-yc g-5">
        <img :src="systemStore.site?.logo" />
        <h1 v-if="!appStore.isMobile" class="title-color fs-24 fw-600">
          {{ systemStore.site?.site_name }}
        </h1>
      </div>
    </div>

    <a-menu
      class="mt-5"
      :collapsed="appStore.isMobile"
      :popup-max-height="false"
      auto-scroll-into-view
      v-model:open-keys="openKeys"
      v-model:selected-keys="selectedKeys"
      auto-open-selected
      @menu-item-click="methods.handleClick"
    >
      <RouteItem :route-list="routeList" />
    </a-menu>
  </div>
</template>

<script setup lang="ts">
import ADMIN_ROUTES from '@/router/routes/modules/admin'
import { listenerRouteChange } from '@/utils/emitter/router'

const route = useRoute()
const router = useRouter()
const appStore = useAppStore()
const systemStore = useSystemStore()
const routeList = ADMIN_ROUTES[0].children || []
const openKeys = ref<string[]>([String(route.matched[1]?.name)])
const selectedKeys = ref<string[]>([String(route.name)])

listenerRouteChange((val) => {
  selectedKeys.value = [val.name as string]
  if (!openKeys.value.includes(val.matched[1]?.name as string)) {
    openKeys.value.push(val.matched[1]?.name as string)
  }
})

const methods = {
  handleClick: (e: string) => {
    router.push({ name: e })
  }
}
</script>

<style lang="scss">
.admin-side-wrap {
  .arco-menu-inline-content {
    position: relative;
    &::before {
      position: absolute;
      content: '';
      left: 5px;
      top: 0;
      bottom: 22px;
      width: 1px;
      background-color: var(--border-color);
    }

    .arco-menu-indent {
      position: relative;
      &::before {
        position: absolute;
        content: '';
        right: 5px;
        top: -6px;
        width: 10px;
        height: 1px;
        background-color: var(--border-color);
      }
    }
  }

  .arco-menu-item {
    height: 35px;
    line-height: 35px;
    border-radius: 5px;
    padding: 0;
    font-weight: 600;

    &.arco-menu-selected {
      color: #fff;
      background-color: rgba($theme-color, 0.85) !important;
      .iconfont {
        color: #fff;
      }
    }

    &.arco-menu-has-icon {
      padding: 0 12px !important;
    }

    .px-12 {
      padding: 0 12px;
    }
  }

  .arco-menu {
    @include useTheme {
      background-color: getVal(pureColor);
    }
  }

  .arco-menu-inline,
  .arco-menu-item {
    margin-top: 10px;
  }

  .arco-menu-inline-content {
    .arco-menu-item {
      margin-top: 8px;
      display: flex;
      padding: 0;
      background-color: transparent !important;
    }

    .arco-menu-item-inner {
      padding: 0;
      border-radius: 5px;
      @include useTheme {
        background-color: rgba(getVal(keyColor), 0.03);
      }
    }

    .arco-menu-selected {
      .arco-menu-item-inner {
        color: #fff;
        background-color: rgba($theme-color, 0.85) !important;
        .iconfont {
          color: #fff;
        }
      }
    }
  }

  .side-logo-wrap {
    border-bottom: 1px solid var(--color-border);
    img {
      height: 32px;
    }
  }
  .arco-menu-inline-header {
    display: flex;
    height: 35px;
    padding-right: 12px;
    line-height: 35px;
    font-weight: 600;

    @include useTheme {
      background-color: rgba(getVal(keyColor), 0.03) !important;
    }
  }

  .arco-menu-inline-content {
    .arco-menu-item-inner {
      font-weight: 500 !important;
    }
  }
}
</style>
