document.addEventListener("DOMContentLoaded", function() {
    function closeOpenDropdowns(e) {
      let openDropdownEls = document.querySelectorAll("details.dropdown[open]");
  
      if (openDropdownEls.length > 0) {
        // If we're clicking anywhere but the summary element, close dropdowns
        if (e.target.parentElement.nodeName.toUpperCase() !== "SUMMARY") {
          openDropdownEls.forEach((dropdown) => {
            dropdown.removeAttribute("open");
          });
        }
      }
    }
  
    document.addEventListener("click", closeOpenDropdowns);
  
    // Get the button
    let goTopBtn = document.getElementById("goTopBtn");
  
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};
  
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        goTopBtn.classList.add("show");
      } else {
        goTopBtn.classList.remove("show");
      }
    }
  
    // When the user clicks on the button, scroll to the top of the document
    goTopBtn.addEventListener("click", function() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  });
  