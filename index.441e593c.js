(()=>{const e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-close-button]"),o=document.querySelector("[data-menu]"),a=document.querySelector("[data-header-btn]"),n=document.querySelector("[data-body]");e.addEventListener("click",(()=>{const t="true"===e.getAttribute("aria-expanded")||!1;e.classList.add("is-open"),e.setAttribute("artia-expanded",!t),o.classList.add("is-open"),a.classList.add("is-open"),n.classList.add("no-scroll")})),t.addEventListener("click",(()=>{const t="true"===e.getAttribute("aria-expanded")||!1;e.classList.remove("is-open"),e.setAttribute("artia-expanded",!t),o.classList.remove("is-open"),a.classList.remove("is-open"),n.classList.remove("no-scroll")}))})(),$(document).ready((function(){$("#menu").on("click","a",(function(e){e.preventDefault();var t=$(this).attr("href"),o=$(t).offset().top;$("body,html").animate({scrollTop:o},1500)}))})),$((function(){let e=$("#nav");$("#navToggle");$("[data-scroll]").on("click",(function(t){t.preventDefault();let o=$(this).data("scroll"),a=$(o).offset().top;e.removeClass("show"),$("html, body").animate({scrollTop:a-70})})),$("#navToggle").on("click",(function(t){t.preventDefault(),e.toggleClass("show")}))})),$((function(){let e=$("#hero");$("#navToggle");$("[data-scroll]").on("click",(function(t){t.preventDefault();let o=$(this).data("scroll"),a=$(o).offset().top;e.removeClass("show"),$("html, body").animate({scrollTop:a-70})})),$("#navToggle").on("click",(function(t){t.preventDefault(),e.toggleClass("show")}))}));
//# sourceMappingURL=index.441e593c.js.map
