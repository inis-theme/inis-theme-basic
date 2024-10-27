<template>
  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
      <KeepAlive v-if="!route.meta.noKeepAlive">
        <component :is="Component" :key="route.path"></component>
      </KeepAlive>
      <component v-else :is="Component" :key="route.path"></component>
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import useResponsive from '@/hooks/responsive'

useResponsive(false)
</script>

<style lang="scss"></style>
