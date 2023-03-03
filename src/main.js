import { tsParticles } from "tsparticles-engine";
import { loadLinksPreset } from "tsparticles-preset-links";

const getCssVariable = (property) =>
  getComputedStyle(document.documentElement).getPropertyValue(property).trim();

const setVh = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

const calcExperience = () => new Date(Date.now()).getFullYear() - 2014;

const main = async () => {
  // set year of experience
  document.getElementById("year-of-experience").textContent = calcExperience();

  // fix vh
  window.addEventListener("resize", setVh);
  setVh();

  // init particles
  await loadLinksPreset(tsParticles);
  await tsParticles.load("particles", {
    preset: "links",
    particles: {
      color: [
        getCssVariable("--color-orange"),
        getCssVariable("--color-pink"),
        getCssVariable("--color-purple"),
      ],
      links: { color: getCssVariable("--color-gray") },
      move: {
        outMode: "bounce",
      },
      size: {
        random: true,
        value: { min: 0.2, max: 3 },
      },
    },
  });
};

main();
