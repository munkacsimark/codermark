<template>
  <h1 class="heading">
    Hi, I&#x2019;m <span class="gradientText">Márk</span>!
  </h1>
  <h2>Frontend developer.</h2>
  <p>
    Mainly I&#x2019;m building performant client side apps designed for humans
    in <span class="strong">web3</span> space using modern JavaScript tools like
    <span class="strong">React</span>, <span class="strong">NextJS</span> with
    <span class="strong">TypeScript</span>.
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
