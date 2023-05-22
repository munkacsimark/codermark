<script setup lang="ts">
import ProjectBox from "../components/ProjectBox.vue";
import type { ProjectProps } from "../components/ProjectBox.vue";
import PageFooter from "../components/PageFooter.vue";
import routes from "../routes";

const projects: ProjectProps[] = [
  {
    title: "SA EV Loot checker",
    description:
      "This tool is designed for StarAtlas to help users check and track their collected rewards during the Escape Velocity. Simply input your Solana address, which you used for playing StarAtlas, into the search bar, and you can instantly view your rewards in a table format.",
    liveLink: "https://staratlas-ev-reward-checker.netlify.app/",
    githubLink: "https://github.com/munkacsimark/staratlas-ev-loot-check",
  },
  {
    title: "NFT lister",
    description:
      "This project lists NFTs from given Ethereum address. The preloaded address fetches BAYC NFTs but you can search for other contract addresses eg. on OpenSea. (Pls don't drain my API limit. 😀)",
    liveLink: "https://glittering-faun-55d932.netlify.app/",
    githubLink: "https://github.com/munkacsimark/nft-lister",
  },
  {
    title: "Typing app",
    description:
      "This is just a pet-project to play with Svelte and Typescript. It's an app to measure how fast can you write on a keyboard. It provides WPM and accuracy.",
    liveLink: "https://munkacsimark.github.io/typing-app/",
    githubLink: "https://github.com/munkacsimark/typing-app",
  },
  {
    title: "Local Storage wrapper",
    description:
      'This is a wrapper over browsers native localStorage. It uses "smart" items and can work with existing localStorage entries.',
    githubLink: "https://github.com/munkacsimark/local-data-storage",
  },
  {
    title: "react-flag",
    description:
      "This package is a Flag component for React, it's based on ISO-3166 country codes, contains 245 flags. It comes with minimum styled svg images but it cn be used with emojis as well.",
    githubLink: "https://github.com/munkacsimark/react-flag",
  },
];
</script>

<template>
  <main>
    <router-link :to="routes.HOME" class="backLink">Back to Home</router-link>
    <template
      v-for="{ title, description, liveLink, githubLink } in projects"
      :key="title"
    >
      <ProjectBox
        :title="title"
        :description="description"
        :live-link="liveLink"
        :github-link="githubLink"
      />
    </template>
  </main>
  <PageFooter />
</template>

<style scoped>
main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  max-width: 56rem;
  margin: 4rem 0;
  padding-right: calc(env(safe-area-inset-right) + 3rem);
  padding-left: calc(env(safe-area-inset-left) + 3rem);
}

.backLink {
  width: 100%;
  text-align: center;
  color: var(--color-white);
}
</style>
