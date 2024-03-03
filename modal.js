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

// Fonction pour valider le prénom
function validateFirstName() {
  const firstName = document.getElementById("first").value.trim();
  const firstNameError = document.querySelector(".firstNameErreur");
  const regex = /^[a-zA-ZÀ-ÿ\s'-]{2,18}$/; // Expression régulière pour valider le prénom

  if (!regex.test(firstName)) {
    firstNameError.textContent = "Le prénom est invalide.";
    return false;
  } else {
    firstNameError.textContent = "";
    return true;
  }
}

// Fonction pour valider le nom
function validateLastName() {
  const lastName = document.getElementById("last").value.trim();
  const lastNameError = document.querySelector(".lastNameErreur");
  const regex = /^[a-zA-ZÀ-ÿ\s'-]{1,18}$/; // Expression régulière pour valider le nom

  if (!regex.test(lastName)) {
    lastNameError.textContent = "Le nom est invalide.";
    return false;
  } else {
    lastNameError.textContent = "";
    return true;
  }
}

// Fonction pour valider l'email
function validateEmail() {
  const email = document.getElementById("email").value.trim();
  const emailValidationMessage = document.getElementById("emailValidationMessage");
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expression régulière pour valider l'email

  if (!regex.test(email)) {
    emailValidationMessage.textContent = "L'adresse électronique est invalide.";
    emailValidationMessage.style.color = "red";
    return false;
  } else {
    emailValidationMessage.textContent = "L'adresse électronique est valide.";
    emailValidationMessage.style.color = "green";
    return true;
  }
}

// Fonction pour valider la date de naissance
function validateBirthdate() {
  const birthdateInput = document.getElementById("birthdate");
  const birthdateValue = birthdateInput.value.trim(); // Supprimer les espaces blancs
  if (birthdateValue === "") {
    alert("Veuillez saisir votre date de naissance.");
    return false;
  }

  const birthdate = new Date(birthdateValue);
  const currentDate = new Date();
  const age = currentDate.getFullYear() - birthdate.getFullYear();

  if (age < 18) {
    alert("Vous devez avoir plus de 18 ans pour vous inscrire.");
    birthdateInput.value = ""; // Réinitialisation de la valeur du champ de date de naissance
    return false;
  } else {
    return true;
  }
}



// Fonction pour valider la case à cocher
function validateCheckbox() {
  const checkbox1 = document.getElementById("checkbox1");

  if (!checkbox1.checked) {
    alert("Veuillez cocher la case pour accepter les conditions d'utilisation.");
    return false;
  } else {
    return true;
  }
}

// Fonction pour vérifier si tous les champs sont valides avant de soumettre le formulaire
function checkAllFields() {
  const isFirstNameValid = validateFirstName();
  const isLastNameValid = validateLastName();
  const isEmailValid = validateEmail();
  const isBirthdateValid = validateBirthdate();
  const isCheckboxValid = validateCheckbox();

  const isFormValid = isFirstNameValid && isLastNameValid && isEmailValid && isBirthdateValid && isCheckboxValid;

  if (isFormValid) {
    displayConfirmationMessage();
  }

  return isFormValid;
}

function displayConfirmationMessage() {
  // Afficher le message de confirmation
  const confirmationMessage = document.getElementById("confirmationMessage");
  if (confirmationMessage) {
    confirmationMessage.style.display = "block";
  }

  // Masquer le formulaire
  const form = document.querySelector(".modal-body form");
  if (form) {
    form.style.display = "none";
  }
}

// Ajouter des événements de changement pour chaque champ
document.getElementById("first").addEventListener("input", validateFirstName);
document.getElementById("last").addEventListener("input", validateLastName);
document.getElementById("email").addEventListener("input", validateEmail);
document.getElementById("birthdate").addEventListener("change", validateBirthdate);
document.getElementById("checkbox1").addEventListener("change", validateCheckbox);

// Ajouter un événement de clic sur le bouton de soumission
document.querySelector(".btn-submit").addEventListener("click", function(event) {
  event.preventDefault(); // Empêcher la soumission du formulaire si un champ est invalide
  checkAllFields();
});

/*
 * Fonction pour fermer la modale
 */
function closeModal() {
  modalbg.style.display = "none"; 
}

closeBtn.addEventListener("click", closeModal);
