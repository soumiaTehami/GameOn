function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}



  document.getElementById("email").addEventListener("input", function() {
    const emailInput = this.value;
    const emailValidationMessage = document.getElementById("emailValidationMessage");
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (regex.test(emailInput)) {
      emailValidationMessage.textContent = "L'adresse électronique est valide.";
      emailValidationMessage.style.color = "green";
    } else {
      emailValidationMessage.textContent = "L'adresse électronique n'est pas valide.";
      emailValidationMessage.style.color = "red";
    }
  });

 

  document.addEventListener("DOMContentLoaded", function() {
    const checkbox1 = document.getElementById("checkbox1");
    const myForm = document.getElementById("myForm");
    const btnSubmit = document.querySelector('.btn-submit');
  
    btnSubmit.addEventListener("click", function(event) {
      if (!checkbox1.checked) {
        alert("Veuillez cocher la case pour accepter les conditions d'utilisation.");
        event.preventDefault(); // Empêcher la soumission du formulaire
      }
    });
  });


/*
 * Fonction pour fermer la modale
 */
function closeModal() {
  modalbg.style.display = "none"; 
}

closeBtn.addEventListener("click", closeModal);
