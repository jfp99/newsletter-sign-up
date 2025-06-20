document.addEventListener('DOMContentLoaded', function() {
  // DOM Elements
const main = document.querySelector('main');
const form = document.querySelector('.newsletter-signup-form');
const inputField = document.querySelector('#email');
const successMessageContainer = document.querySelector('.success-message-container');
const successSpanEmail = document.querySelector('.success-span-email');
const formErrorMessage = document.querySelector('.form-error-message');
const formSubmitButton = document.querySelector('.form-submit-button');
const successMessageDismissButton = document.querySelector('.success-message-dismiss-button');

// Event Listeners
formSubmitButton.addEventListener('click', handleFormSubmit);
successMessageDismissButton.addEventListener('click', handleDismiss);
inputField.addEventListener('input', clearErrorState);
inputField.addEventListener('input', handleInput); // Added this line

  // New input handler
function handleInput() {
const email = inputField.value.trim();
if (validateEmail(email)) {
    formSubmitButton.classList.add('button-gradient');
    clearErrorState();
}
}
// Handle form submission
function handleFormSubmit(e) {
e.preventDefault();

const email = inputField.value.trim();
const isValid = validateEmail(email);

if (isValid) {
    showSuccessMessage(email);
    console.log("Email passed validation:", email);
} else {
    showErrorState();
    console.log("Validation failed");
}
}

// Validate email format
function validateEmail(email) {
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailRegex.test(email);
}

// Show error state
function showErrorState() {
formErrorMessage.textContent = "Valid email required";
inputField.classList.add('input-field-error-state', 'placeholder-field-eror', 'shake-input-fields');
formSubmitButton.classList.remove('button-gradient');

// Remove shake animation after it completes
setTimeout(() => {
    inputField.classList.remove('shake-input-fields');
}, 700);
}

// Clear error state when typing
function clearErrorState() {
if (inputField.classList.contains('input-field-error-state')) {
    inputField.classList.remove('input-field-error-state', 'placeholder-field-eror');
    formErrorMessage.textContent = "";
}
}

// Show success message
function showSuccessMessage(email) {
// Update email in success message
successSpanEmail.textContent = email;

// Hide main form and show success message with animation
main.classList.add('hidden');
successMessageContainer.classList.remove('hidden');
successMessageContainer.classList.add('modal-apear-animation');

// Remove appear animation after completion
setTimeout(() => {
    successMessageContainer.classList.remove('modal-apear-animation');
}, 300);
}

// Handle dismiss button click
function handleDismiss() {
formSubmitButton.classList.remove('button-gradient');
// Reset form
form.reset();
clearErrorState();

// Animate success message closing
successMessageContainer.classList.add('modal-close-animation');

setTimeout(() => {
    // Hide success message and show main form
    successMessageContainer.classList.add('hidden');
    successMessageContainer.classList.remove('modal-close-animation');
    main.classList.remove('hidden');
    
    // Add appear animation to main form
    main.classList.add('modal-apear-animation');
    
    // Remove appear animation after completion
    setTimeout(() => {
    main.classList.remove('modal-apear-animation');
    }, 300);
}, 300);
}
});