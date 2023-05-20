import { tsParticles } from "tsparticles-engine";
import { loadLinksPreset } from "tsparticles-preset-links";

const getCssVariable = (property) =>
  getComputedStyle(document.documentElement).getPropertyValue(property).trim();

const setVh = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

const injectAnalytics = () => {
  const umamiWebsiteId = process.env.UMAMI_WEBSITE_ID;
  if (!umamiWebsiteId) {
    return;
  }

  const umamiScript = document.createElement("script");
  umamiScript.src = "https://analytics.umami.is/script.js";
  umamiScript.async = true;
  umamiScript.setAttribute("data-website-id", umamiWebsiteId);
  document.head.appendChild(umamiScript);
};

const main = async () => {
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
      number: { value: 100 },
    },
  });

  injectAnalytics();
};

main();
