<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount, onMounted } from "vue";
import type { ISourceOptions } from "@tsparticles/engine";
import { tsParticles } from "@tsparticles/engine";
import { loadLinksPreset } from "@tsparticles/preset-links";
import { getCssVariable, injectAnalytics } from "./helpers";

const particlePaintColors = [
    getCssVariable("--color-orange"),
    getCssVariable("--color-pink"),
    getCssVariable("--color-purple"),
];

const particlesOptions: ISourceOptions = {
    preset: "links",
    particles: {
        paint: particlePaintColors.map((color) => ({
            fill: {
                color: { value: color },
                enable: true,
            },
        })),
        links: { color: getCssVariable("--color-gray") },
        move: {
            outModes: "bounce",
        },
        size: {
            value: { min: 0.2, max: 3 },
        },
        number: { value: 100 },
    },
};

const setVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
};

onMounted(async () => {
    await loadLinksPreset(tsParticles);
    await tsParticles.load({
        id: "tsparticles",
        options: particlesOptions,
    });
});

onBeforeMount(() => {
    injectAnalytics();
});

onBeforeUnmount(() => {
    window.removeEventListener("resize", setVh);
});
</script>

<template>
    <router-view></router-view>
</template>
