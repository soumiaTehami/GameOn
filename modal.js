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
const confirmationMessage = document.getElementById("confirmationMessage");
const form=document.querySelector("form");
const closemodalconfim=document.querySelector("#confirmationMessage button")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Fonction pour valider le prénom
function validateFirstName() {
  const firstName = document.getElementById("first").value.trim();
  const firstContainer = document.querySelector(".first-container");
  const errorDisplay = document.querySelector(".first-container > span");

  const regex = /^[a-zA-ZÀ-ÿ\s'-]{2,18}$/; // Expression régulière pour valider le prénom

  if (!regex.test(firstName)) {
    firstContainer.classList.add("error");
    errorDisplay.textContent = "le prénom invalide.";
    return false;
  } else {
    firstContainer.classList.remove("error");
    errorDisplay.textContent = "";
    return true;
  }
}

// Fonction pour valider le nom
function validateLastName() {
  const lastName = document.getElementById("last").value.trim();
  const lastContainer = document.querySelector(".last-container");
  const errorDisplay = document.querySelector(".last-container > span");
  const regex = /^[a-zA-ZÀ-ÿ\s'-]{2,18}$/; // Expression régulière pour valider le nom

  if (!regex.test(lastName)) {
    lastContainer.classList.add("error");
    errorDisplay.textContent = "Le nom invalide.";
    return false;
  } else {
    lastContainer.classList.remove("error");
    errorDisplay.textContent = ""; // Effacer le message d'erreur s'il y en avait un précédemment
    return true;
  }
}

// Fonction pour valider l'email
function validateEmail() {
  const email = document.getElementById("email").value.trim();
  const errorDisplay = document.querySelector(".email-container > span");
  const emailContainer = document.querySelector(".email-container"); // Sélection de l'élément contenant l'entrée de l'e-mail
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expression régulière pour valider l'e-mail

  if (!regex.test(email)) {
    emailContainer.classList.add("error"); // Ajouter la classe d'erreur à l'élément contenant l'entrée de l'e-mail
    errorDisplay.textContent = "L'adresse électronique est invalide.";
    return false;
  } else {
    emailContainer.classList.remove("error"); // Supprimer la classe d'erreur s'il n'y a pas d'erreur
    errorDisplay.textContent = "";
    return true;
  }
}

// Fonction pour valider la date de naissance
function validateBirthdate() {
  const birthdateInput = document.getElementById("birthdate");
  const birthdateValue = birthdateInput.value.trim(); // Supprimer les espaces blancs
  const birthdateContainer = document.querySelector(".birthdate-container");
  const errorDisplay = birthdateContainer.querySelector("span");

  if (birthdateValue === "") {
    birthdateContainer.classList.add("error");
    errorDisplay.textContent = "Veuillez entrer une date de naissance.";
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
    birthdateContainer.classList.remove("error");
    errorDisplay.textContent = ""; // Effacer le message d'erreur si la date de naissance est valide
    return true;
  }
}

// Fonction pour valider la case à cocher
function validateCheckbox() {
  const checkbox1 = document.getElementById("checkbox1");

  if (!checkbox1.checked) {
    alert(
      "Veuillez cocher la case pour accepter les conditions d'utilisation."
    );
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

  const isFormValid =
    isFirstNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isBirthdateValid &&
    isCheckboxValid;

  if (isFormValid) {
    displayConfirmationMessage();
  }
return isFormValid;

}

function displayConfirmationMessage() {
  // Afficher le message de confirmation
  
  if (confirmationMessage) {
    confirmationMessage.style.display = "block";
    modalbg.style.display = "none"; // Masquer le formulaire
    form.reset();
  } else {
    modalbg.style.display = "block"; // Afficher le formulaire
    document.querySelector(".formConfirmation").style.display = "none";
  }
  
}

// Ajouter des événements de changement pour chaque champ
document.getElementById("first").addEventListener("input", validateFirstName);
document.getElementById("last").addEventListener("input", validateLastName);
document.getElementById("email").addEventListener("input", validateEmail);
document.getElementById("birthdate")
document.addEventListener("change", validateBirthdate);
document.getElementById("checkbox1")
  .addEventListener("change", validateCheckbox);

// Ajouter un événement de clic sur le bouton de soumission
document.querySelector(".btn-submit")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Empêcher la soumission du formulaire si un champ est invalde
    checkAllFields();
  });

/*
 * Fonction pour fermer la modale
 */
function closeModal() {
  modalbg.style.display = "none";
}

closeBtn.addEventListener("click", closeModal);
closemodalconfim.addEventListener("click", ()=>{
  confirmationMessage.style.display="none";
  modalbg.style.display = "none";
})