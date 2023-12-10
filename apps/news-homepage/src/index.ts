const OPEN_CLASS = "-open";

document.addEventListener("DOMContentLoaded", () => {
  const mainNavigation =
    document.querySelector<HTMLElement>("#main-navigation");
  if (mainNavigation === null) {
    return;
  }
  document.querySelector("#hamburger-button")?.addEventListener("click", () => {
    mainNavigation.classList.add(OPEN_CLASS);
  });
  document.querySelector("#close-button")?.addEventListener("click", () => {
    mainNavigation.classList.remove(OPEN_CLASS);
  });
});
