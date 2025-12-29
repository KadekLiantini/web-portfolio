export const scrollToSection = (id) => {
  const element = document.getElementById(id);
  const navbarHeight = 64;

  if (element) {
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;

    const offsetPosition = elementPosition - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};
