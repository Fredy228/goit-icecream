!function(){var e,t,s,a,o,n,r,i,c,l;e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-close-button]"),s=document.querySelector("[data-menu]"),a=document.querySelector("[data-header-btn]"),o=document.querySelector("[data-body]"),n=document.querySelector("[data-link-1]"),r=document.querySelector("[data-link-2]"),i=document.querySelector("[data-link-3]"),c=document.querySelector("[data-link-4]"),l=document.querySelector("[data-link-5]"),e.addEventListener("click",(function(){var t="true"===e.getAttribute("aria-expanded")||!1;e.classList.add("is-open"),e.setAttribute("artia-expanded",!t),s.classList.add("is-open"),a.classList.add("is-open"),o.classList.add("no-scroll")})),t.addEventListener("click",(function(){var t="true"===e.getAttribute("aria-expanded")||!1;e.classList.remove("is-open"),e.setAttribute("artia-expanded",!t),s.classList.remove("is-open"),a.classList.remove("is-open"),o.classList.remove("no-scroll")})),n.addEventListener("click",(function(){var t="true"===e.getAttribute("aria-expanded")||!1;e.classList.remove("is-open"),e.setAttribute("artia-expanded",!t),s.classList.remove("is-open"),a.classList.remove("is-open"),o.classList.remove("no-scroll")})),r.addEventListener("click",(function(){var t="true"===e.getAttribute("aria-expanded")||!1;e.classList.remove("is-open"),e.setAttribute("artia-expanded",!t),s.classList.remove("is-open"),a.classList.remove("is-open"),o.classList.remove("no-scroll")})),i.addEventListener("click",(function(){var t="true"===e.getAttribute("aria-expanded")||!1;e.classList.remove("is-open"),e.setAttribute("artia-expanded",!t),s.classList.remove("is-open"),a.classList.remove("is-open"),o.classList.remove("no-scroll")})),c.addEventListener("click",(function(){var t="true"===e.getAttribute("aria-expanded")||!1;e.classList.remove("is-open"),e.setAttribute("artia-expanded",!t),s.classList.remove("is-open"),a.classList.remove("is-open"),o.classList.remove("no-scroll")})),l.addEventListener("click",(function(){var t="true"===e.getAttribute("aria-expanded")||!1;e.classList.remove("is-open"),e.setAttribute("artia-expanded",!t),s.classList.remove("is-open"),a.classList.remove("is-open"),o.classList.remove("no-scroll")})),$(document).ready((function(){$("#menu").on("click","a",(function(e){e.preventDefault();var t=$(this).attr("href"),s=$(t).offset().top;$("body,html").animate({scrollTop:s},1500)}))})),$((function(){var e=$("#nav");$("#navToggle");$("[data-scroll]").on("click",(function(t){t.preventDefault();var s=$(this).data("scroll"),a=$(s).offset().top;e.removeClass("show"),$("html, body").animate({scrollTop:a-70})})),$("#navToggle").on("click",(function(t){t.preventDefault(),e.toggleClass("show")}))})),$((function(){var e=$("#hero");$("#navToggle");$("[data-scroll]").on("click",(function(t){t.preventDefault();var s=$(this).data("scroll"),a=$(s).offset().top;e.removeClass("show"),$("html, body").animate({scrollTop:a-70})})),$("#navToggle").on("click",(function(t){t.preventDefault(),e.toggleClass("show")}))}))}();
//# sourceMappingURL=index.b4ed2f02.js.map
