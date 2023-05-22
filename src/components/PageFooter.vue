<script setup lang="ts">
const currentYear = new Date(Date.now()).getFullYear();
</script>

<template>
  <footer class="footer">
    {{ currentYear }} | Crafted with
    <span class="gradientText">&#9825;</span> by me.
  </footer>
</template>

<style scoped>
.footer {
  color: #a1a1a6;
  font-size: 12px;
  margin-bottom: 1rem;
  padding: 0 3rem;
  text-align: center;
}

@media (max-width: 769px), (max-height: 769px) {
  .footer {
    font-size: 9px;
    margin-bottom: 0.5rem;
    padding: 0 1.5rem;
  }
}
</style>
