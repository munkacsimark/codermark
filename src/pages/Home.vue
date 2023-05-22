<script setup lang="ts">
import AboutBox from "../components/AboutBox.vue";
import Icons from "../components/Icons.vue";
import PageFooter from "../components/PageFooter.vue";
</script>

<template>
  <main>
    <AboutBox />
    <Icons />
  </main>
  <PageFooter />
</template>

<style scoped>
main {
  font-weight: 600;
  font-size: 21px;
  line-height: 1.125;
  letter-spacing: 0.004em;
  color: var(--color-gray);
  max-width: 36rem;
  margin: auto;
  padding-right: calc(env(safe-area-inset-right) + 3rem);
  padding-left: calc(env(safe-area-inset-left) + 3rem);
}

@media (max-width: 769px), (max-height: 769px) {
  main {
    font-size: 16px;
    padding-right: calc(env(safe-area-inset-right) + 1.5rem);
    padding-left: calc(env(safe-area-inset-left) + 1.5rem);
  }
}
</style>
