document.addEventListener("DOMContentLoaded", function () {
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
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      goTopBtn.classList.add("show");
    } else {
      goTopBtn.classList.remove("show");
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  goTopBtn.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
});

function validateForm() {
  const tel = document.getElementById("tel").value;
  const postalcode = document.getElementById("postalcode").value;
  const ssn = document.getElementById("ssn").value;

  const telPattern = /^\+33\d{9}$/;
  const postalcodePattern = /^\d{5}$/;
  const ssnPattern = /^\d{13}$/;

  if (!telPattern.test(tel)) {
    alert("Le numéro de téléphone doit commencer par +33 suivi de 9 chiffres.");
    return false;
  }

  if (!postalcodePattern.test(postalcode)) {
    alert("Le code postal doit comporter 5 chiffres.");
    return false;
  }

  if (!ssnPattern.test(ssn)) {
    alert("Le numéro de sécurité sociale doit comporter 13 chiffres.");
    return false;
  }

  return true;
}

document.addEventListener("DOMContentLoaded", function () {
  // Select all favorite icons
  const favoriteIcons = document.querySelectorAll(".fa-heart");

  // Add click event listener to each icon
  favoriteIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
      // Toggle the 'active' class on click
      this.classList.toggle("active");

      // Toggle between far and fas classes
      if (this.classList.contains("far")) {
        this.classList.remove("far");
        this.classList.add("fas");
      } else {
        this.classList.remove("fas");
        this.classList.add("far");
      }
    });
  });
});
