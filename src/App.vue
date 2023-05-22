<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount, onMounted } from "vue";
import {
  tsParticles,
  RecursivePartial,
  IOptions,
  IAnimatableColor,
} from "tsparticles-engine";
import { loadLinksPreset } from "tsparticles-preset-links";
import { getCssVariable, injectAnalytics } from "./helpers";

const particlesOptions: RecursivePartial<IOptions> = {
  preset: "links",
  particles: {
    color: [
      getCssVariable("--color-orange"),
      getCssVariable("--color-pink"),
      getCssVariable("--color-purple"),
    ] as RecursivePartial<IAnimatableColor>,
    links: { color: getCssVariable("--color-gray") },
    move: {
      outMode: "bounce",
    },
    size: {
      random: true,
      value: { min: 0.2, max: 3 },
    },
    number: { value: 100 },
  },
};

const setVh = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

onBeforeMount(() => {
  injectAnalytics();
});

onMounted(async () => {
  await loadLinksPreset(tsParticles);
  await tsParticles.load("particles", particlesOptions);
  window.addEventListener("resize", setVh);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", setVh);
});
</script>

<template>
  <router-view></router-view>
</template>
