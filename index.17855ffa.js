!function(){var e,t,a,s,d;e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-close-button]"),a=document.querySelector("[data-menu]"),s=document.querySelector("[data-header-btn]"),d=document.querySelector("[data-body]"),e.addEventListener("click",(function(){var t="true"===e.getAttribute("aria-expanded")||!1;e.classList.add("is-open"),e.setAttribute("artia-expanded",!t),a.classList.add("is-open"),s.classList.add("is-open"),d.classList.add("no-scroll")})),t.addEventListener("click",(function(){var t="true"===e.getAttribute("aria-expanded")||!1;e.classList.remove("is-open"),e.setAttribute("artia-expanded",!t),a.classList.remove("is-open"),s.classList.remove("is-open"),d.classList.remove("no-scroll")}))}();
//# sourceMappingURL=index.17855ffa.js.map
