(function () {
  "use strict";
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("mobile-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
  }
  var items = document.querySelectorAll(".navitem > button");
  items.forEach(function (b) {
    b.addEventListener("click", function () {
      var p = b.parentNode;
      var open = !p.classList.contains("open");
      document.querySelectorAll(".navitem.open").forEach(function (n) { n.classList.remove("open"); n.firstElementChild.setAttribute("aria-expanded", "false"); });
      if (open) { p.classList.add("open"); b.setAttribute("aria-expanded", "true"); }
    });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      document.querySelectorAll(".navitem.open").forEach(function (n) { n.classList.remove("open"); n.firstElementChild.setAttribute("aria-expanded", "false"); });
      if (menu && menu.classList.contains("open")) { menu.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); }
    }
  });
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".navitem")) {
      document.querySelectorAll(".navitem.open").forEach(function (n) { n.classList.remove("open"); n.firstElementChild.setAttribute("aria-expanded", "false"); });
    }
  });
  document.querySelectorAll(".faq-q").forEach(function (q) {
    q.addEventListener("click", function () {
      var a = document.getElementById(q.getAttribute("aria-controls"));
      var open = q.getAttribute("aria-expanded") === "true";
      q.setAttribute("aria-expanded", open ? "false" : "true");
      a.style.maxHeight = open ? "0px" : a.scrollHeight + "px";
    });
  });
  window.addEventListener("resize", function () {
    document.querySelectorAll(".faq-q[aria-expanded='true']").forEach(function (q) {
      var a = document.getElementById(q.getAttribute("aria-controls"));
      a.style.maxHeight = a.scrollHeight + "px";
    });
  });
})();
