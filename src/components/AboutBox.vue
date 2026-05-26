<script setup lang="ts">
import routes from "../routes.js";
</script>

<template>
    <h1>Hi, I&#x2019;m <span class="gradientText">Márk</span>!</h1>
    <h2>Frontend/Fullstack developer.</h2>
    <p>
        I focus on building high-performance client-side apps with
        <span class="strong">React</span>, <span class="strong">Next.js</span>,
        and <span class="strong">TypeScript</span>. My expertise spans from
        architecting <span class="strong">greenfield solutions</span> and
        integrating <span class="strong">agentic workflows</span> for rapid
        prototyping, to refactoring and optimizing legacy systems for
        scalability and maintainability. See some projects
        <router-link :to="routes.PROJECTS">here</router-link>.
    </p>
</template>

<style scoped>
h1 {
    font-size: 64px;
    margin: 0;
}

h2 {
    font-size: 48px;
    margin: 0 0 2rem 0;
}

h1,
h2,
a,
.strong {
    color: var(--color-white);
}

@media (max-width: 769px), (max-height: 769px) {
    h1 {
        font-size: 48px;
    }

    h2 {
        font-size: 40px;
        margin-bottom: 1.2rem;
    }
}
</style>
