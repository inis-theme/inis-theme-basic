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
import { useHead } from '@vueuse/head'
import useResponsive from '@/hooks/responsive'

useResponsive(false)

useHead({
  meta: [
    {
      name: 'viewport',
      content:
        'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'
    }
  ]
})
</script>

<style lang="scss"></style>
