const btn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".Menu-Horizontal");
const submenuItem = document.querySelector(".tiene-submenu");

function isMobile() {
  return window.innerWidth <= 600;
}

function closeAll() {
  menu.classList.remove("active");
  submenuItem?.classList.remove("submenu-open");
  btn?.setAttribute("aria-expanded", "false");
}

if (btn && menu) {
  btn.addEventListener("click", () => {
    const open = menu.classList.toggle("active");
    btn.setAttribute("aria-expanded", String(open));
    if (!open) submenuItem?.classList.remove("submenu-open");
  });

  menu.addEventListener("click", (e) => {
    if (!isMobile()) return;

    const a = e.target.closest("a");
    if (!a) return;

    if (a.classList.contains("submenu-link")) {
      e.preventDefault(); 
      submenuItem.classList.toggle("submenu-open");
      return;
    }

    closeAll();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 600) closeAll();
  });
}
