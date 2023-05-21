<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount, onMounted } from "vue";
import {
  tsParticles,
  RecursivePartial,
  IOptions,
  IAnimatableColor,
} from "tsparticles-engine";
import { loadLinksPreset } from "tsparticles-preset-links";
import AboutBox from "./components/about-box/AboutBox.vue";
import Icons from "./components/icons/Icons.vue";
import Footer from "./components/footer/Footer.vue";
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
  <main class="main">
    <AboutBox />
    <Icons />
  </main>
  <Footer />
</template>

<style scoped>
.main {
  font-weight: 600;
  font-size: 21px;
  line-height: 1.125;
  letter-spacing: 0.004em;
  color: var(--color-gray);
  max-width: 36rem;
  margin: auto;
  padding-right: calc(env(safe-area-inset-right) + 3rem);
  padding-left: calc(env(safe-area-inset-left) + 3rem);
  z-index: 1;
}

@media (max-width: 769px), (max-height: 769px) {
  .main {
    font-size: 16px;
    padding-right: calc(env(safe-area-inset-right) + 1.5rem);
    padding-left: calc(env(safe-area-inset-left) + 1.5rem);
  }
}
</style>
