const getCssVariable = (property: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(property).trim();

const injectAnalytics = () => {
  const umamiWebsiteId = import.meta.env.VITE_UMAMI_WEBSITE_ID;
  if (!umamiWebsiteId) {
    return;
  }

  const umamiScript = document.createElement("script");
  umamiScript.src = "https://analytics.umami.is/script.js";
  umamiScript.async = true;
  umamiScript.setAttribute("data-website-id", umamiWebsiteId);
  document.head.appendChild(umamiScript);
};

export { getCssVariable, injectAnalytics };
