<script setup lang="ts">
import Icon from "./Icon.vue";
import type { IconProps } from "./Icon.vue";
import resumeIcon from "../assets/resume-icon.svg";
import gitHubIcon from "../assets/github-logo.svg";
import twitterIcon from "../assets/twitter-logo.svg";
import telegramIcon from "../assets/telegram-logo.svg";
import devToIcon from "../assets/devto-logo.svg";
import stackOverflowIcon from "../assets/stackoverflow-logo.svg";
import resumeFile from "../assets/mark_munkacsi_resume_2023.pdf";

const icons: IconProps[] = [
  {
    title: "Resume",
    href: resumeFile,
    iconUrl: resumeIcon,
  },
  {
    title: "GitHub",
    href: "https://github.com/munkacsimark",
    iconUrl: gitHubIcon,
  },
  {
    title: "Twitter",
    href: "https://twitter.com/0xMarkcius",
    iconUrl: twitterIcon,
  },
  {
    title: "Telegram",
    href: "https://t.me/markmunkacsi",
    iconUrl: telegramIcon,
  },
  {
    title: "Dev.to",
    href: "https://dev.to/munkacsimark",
    iconUrl: devToIcon,
  },
  {
    title: "Stack Overflow",
    href: "https://stackoverflow.com/users/3372050",
    iconUrl: stackOverflowIcon,
  },
];
</script>

<template>
  <div class="icons">
    <template v-for="{ title, href, iconUrl } in icons" :key="title">
      <Icon :title="title" :href="href" :icon-url="iconUrl" />
    </template>
  </div>
</template>

<style scoped>
.icons {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3rem 0;
}

@media (max-width: 769px), (max-height: 769px) {
  .icons {
    margin-top: 1.2rem;
  }
}
</style>
