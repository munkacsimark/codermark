<script lang="ts">
type IconProps = { title: string; href: string; iconUrl: string };

export type { IconProps };
</script>

<script setup lang="ts">
defineProps<IconProps>();
</script>

<template>
  <a :title="title" :href="href" target="_blank" class="icon">
    <img :src="iconUrl" />
  </a>
</template>

<style scoped>
.icon {
  display: inline-block;
  width: 3rem;
  height: 3rem;
  margin: 0 0.5rem;
  transform: scale(1);
  transition: 0.1s;
}

.icon:hover img {
  animation: 3s wobble linear;
}

.icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

@media (max-width: 769px), (max-height: 769px) {
  .icon {
    width: 2rem;
    height: 2rem;
  }
}
</style>
