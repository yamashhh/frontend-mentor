document.addEventListener("DOMContentLoaded", () => {
  const mainNavigation =
    document.querySelector<HTMLElement>("#main-navigation");
  if (mainNavigation === null) {
    return;
  }
  document.querySelector("#hamburger-button")?.addEventListener("click", () => {
    mainNavigation.style.display = "flex";
  });
  document.querySelector("#close-button")?.addEventListener("click", () => {
    mainNavigation.style.display = "none";
  });
});
