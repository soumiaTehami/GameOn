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
  var emailInput = this.value;
  var emailValidationMessage = document.getElementById("emailValidationMessage");
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regex.test(emailInput)) {
    emailValidationMessage.textContent = "L'adresse électronique n'est pas valide.";
  } else {
    emailValidationMessage.textContent = "";
  }
});

 

// Fonction pour valider les cases à cocher avant la soumission du formulaire
  function validateForm() {
    // Récupérer les références des cases à cocher
    const checkbox1 = document.getElementById("checkbox1");
    const checkbox2 = document.getElementById("checkbox2");
    
    // Vérifier si au moins une case à cocher est cochée
    if (!checkbox1.checked && !checkbox2.checked) {
      // Aucune case à cocher n'est cochée, afficher un message d'erreur
      alert("Veuillez cocher au moins une des options.");
      return false; // Empêcher la soumission du formulaire
    }
    
    // Si au moins une case à cocher est cochée, le formulaire peut être soumis
    return true;
  }






/*
 * Fonction pour fermer la modale
 */
function closeModal() {
  modalbg.style.display = "none"; 
}

closeBtn.addEventListener("click", closeModal);
