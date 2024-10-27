<template>
  <a-dropdown trigger="click" position="bl">
    <a-avatar
      :size="30"
      object-fit="cover"
      :image-url="`${userStore.user?.result?.display.avatar}`"
      class="pointer"
    >
      {{ userStore.user?.nickname }}
    </a-avatar>
    <template #content>
      <div class="user-info p-10">
        <div class="title-color">
          {{ userStore.user?.nickname || userStore.user?.account || '--' }}
        </div>
        <div class="muted-color mt-5 fs-12">
          {{ userStore.user?.email || '--' || '--' }}
        </div>
      </div>
      <a-doption @click="router.push({ name: 'Home' })">
        <div class="flex-yc g-5"><IconFont name="home-5-line" /> <span>回到前台</span></div>
      </a-doption>
      <a-doption>
        <div class="flex-yc g-5">
          <IconFont name="settings-line" />
          <span>系统设置</span>
        </div>
      </a-doption>
      <a-doption @click="methods.handleLogout">
        <div class="flex-yc g-5">
          <IconFont name="login-circle-line" />
          <span>退出登录</span>
        </div>
      </a-doption>
    </template>
  </a-dropdown>
</template>

<script setup lang="ts">
import { Modal } from '@arco-design/web-vue'

const userStore = useUserStore()
const route = useRoute()
const router = useRouter()

const methods = {
  handleLogout: () => {
    Modal.warning({
      simple: true,
      hideCancel: false,
      titleAlign: 'start',
      title: '确认退出登录吗？',
      content: '确认退出登录吗？',
      onOk: async () => {
        await userStore.logout()
        router.replace({
          name: 'login',
          query: { redirect: encodeURIComponent(route.fullPath) }
        })
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.arco-avatar-image {
  line-height: 30px;
}

.user-info {
  border-bottom: 1px solid var(--border-color);
}
</style>
