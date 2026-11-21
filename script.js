const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.textContent = isOpen ? "×" : "☰";
});
document.querySelectorAll(".main-nav a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.textContent = "☰";
}));
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent("Website Enquiry - " + data.get("service"));
  const body = encodeURIComponent(
    "Name: " + data.get("name") + "\n" +
    "Email: " + data.get("email") + "\n" +
    "Area of interest: " + data.get("service") + "\n\n" +
    "Requirement:\n" + data.get("message")
  );
  window.location.href = "mailto:info@ugrarupaenergy.in?subject=" + subject + "&body=" + body;
});