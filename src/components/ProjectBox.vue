<script lang="ts">
type ProjectProps = {
  title: string;
  description: string;
  liveLink?: string;
  githubLink?: string;
};
export type { ProjectProps };
</script>

<script setup lang="ts">
import Icon from "./Icon.vue";
import desktopIcon from "../assets/desktop-icon.svg";
import githubIcon from "../assets/github-logo.svg";

defineProps<ProjectProps>();
</script>

<template>
  <div class="box">
    <header>
      <h2>{{ title }}</h2>
      <div class="buttons">
        <template v-if="liveLink">
          <Icon title="Open project" :href="liveLink" :icon-url="desktopIcon" />
        </template>
        <template v-if="githubLink">
          <Icon
            class="icon"
            title="Open on GitHub"
            :href="githubLink"
            :icon-url="githubIcon"
          />
        </template>
      </div>
    </header>
    <p>{{ description }}</p>
  </div>
</template>

<style scoped>
h2 {
  margin: 0 0 1rem 0;
}

.box {
  padding: 1rem;
  border: 1px solid var(--color-gray);
  border-radius: 5px;
  max-width: 24rem;
  height: fit-content;
  background-color: color-mix(in srgb, var(--color-black) 66%, transparent);
  transition: 0.5s;
}

.box:hover {
  border-color: var(--color-orange);
  transition: 0.2s;
}

header {
  display: flex;
  justify-content: space-between;
}

.buttons {
  display: flex;
  justify-content: center;
}

.icon {
  width: 2rem;
  height: 2rem;
}

p {
  color: var(--color-gray);
}
</style>
