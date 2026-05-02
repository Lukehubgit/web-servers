/* =============================================
   Web Servers Project - main.js
   Luke Miller | IT 3203 Web Development
   Milestone 3: Mobile nav and site-wide JS
   ============================================= */

/* wait for the page to fully load before running any JS */
document.addEventListener("DOMContentLoaded", function() {

    /* ---- Hamburger Menu ----
       On mobile, the nav collapses. When the user clicks
       the menu button, we toggle the nav-open class on the
       nav element. CSS handles showing/hiding the menu links.
    */
    var menuToggle = document.getElementById("menu-toggle");
    var mainNav = document.getElementById("main-nav");

    if (menuToggle && mainNav) {
        menuToggle.addEventListener("click", function() {
            /* toggle the nav-open class to show or hide the menu */
            if (mainNav.classList.contains("nav-open")) {
                mainNav.classList.remove("nav-open");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.textContent = "Menu";
            } else {
                mainNav.classList.add("nav-open");
                menuToggle.setAttribute("aria-expanded", "true");
                menuToggle.textContent = "Close";
            }
        });

        /* close the menu if user clicks a nav link on mobile */
        var navLinks = mainNav.querySelectorAll("a");
        for (var i = 0; i < navLinks.length; i++) {
            navLinks[i].addEventListener("click", function() {
                mainNav.classList.remove("nav-open");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.textContent = "Menu";
            });
        }
    }

    /* ---- Active nav link highlight ----
       Checks the current page URL and adds the active class
       to the matching nav link automatically.
    */
    var currentPage = window.location.pathname.split("/").pop();
    var allNavLinks = document.querySelectorAll("nav a");
    for (var j = 0; j < allNavLinks.length; j++) {
        var linkHref = allNavLinks[j].getAttribute("href");
        /* remove active from all links first */
        allNavLinks[j].classList.remove("active");
        /* add active to the one matching current page */
        if (linkHref === currentPage || (currentPage === "" && linkHref === "index.html")) {
            allNavLinks[j].classList.add("active");
        }
    }

});
