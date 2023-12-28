window.addEventListener("DOMContentLoaded", () => {
  // Get mode from local storage and set attribute to body
  const themeFromStorage = () => {
    return localStorage.getItem("theme") || "dark";
  };
  document.body.setAttribute("data-theme", themeFromStorage());
  iconMode(themeFromStorage());
});

// Set mode when toggle is on click
const onToggleMode = () => {
  const prevTheme = document.body.getAttribute("data-theme");
  const theme = prevTheme === "light" ? "dark" : "light";
  document.body.setAttribute("data-theme", theme);
  iconMode(theme);
  localStorage.setItem("theme", theme);
};

// Make image icon for button toggle mode
const iconMode = (mode) => {
  const icon = { light: "sun.svg", dark: "moon.svg" };
  const img = document.querySelector(".icon-toggle-mode");
  img.setAttribute("src", `../assets/${icon[mode]}`);
};
