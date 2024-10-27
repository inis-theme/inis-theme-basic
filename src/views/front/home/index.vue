<template>
  <div class="home-page-view wh-100 flex-center">
    <a-result status="success" title="恭喜你">
      <template #subtitle> 项目启动成功! </template>
      <template #extra>
        <a-space>
          <a-button type="primary" @click="router.push({ name: 'AdminHome' })">后台管理</a-button>
        </a-space>
      </template>
    </a-result>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
</script>

<style lang="scss" scoped></style>
