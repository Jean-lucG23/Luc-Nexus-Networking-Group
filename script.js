document.getElementById("year").textContent = new Date().getFullYear();

const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
menu.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", open ? "true" : "false");
});
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
  });
});

const form = document.getElementById("consultationForm");
const status = document.getElementById("formStatus");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const d = new FormData(form);
  const message =
`Hello Luc Nexus Networking Group,

I'd like to request a consultation.

Name: ${d.get("name")}
Company: ${d.get("company") || "Not provided"}
Email: ${d.get("email")}
Phone: ${d.get("phone") || "Not provided"}
Service: ${d.get("service")}

Requirement:
${d.get("message")}`;

  status.textContent = "Opening WhatsApp with your enquiry…";
  window.open("https://wa.me/27824720050?text=" + encodeURIComponent(message), "_blank", "noopener");
});
