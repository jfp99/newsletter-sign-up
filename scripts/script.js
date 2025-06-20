const main = document.querySelector('main');
const form = document.querySelector('.newsletter-signup-form');
const inputField = document.querySelector('#email');
const successMessageContainer = document.querySelector('.success-message-container');
const successSpanEmail = document.querySelector('.success-span-email');
const formErrorMessage = document.querySelector('.form-error-message');
const formSubmitButton = document.querySelector('.form-submit-button');
const successMessageDismissButton = document.querySelector('.success-message-dismiss-button');

// Prevent the default behavior of the onsubmit event.
formSubmitButton.addEventListener('click', function (e) {
    e.preventDefault();
    const data = {};
    const fields = e.target.querySelectorAll("input");
    for (const field of fields) {
      data[field.name] = field.value;
    }
    const isValid = validationCheck(
        inputField.value,
        inputField,
        formSubmitButton,
        formErrorMessage,
        successMessageContainer,
        main,successSpanEmail
    );
    if (isValid) {
        console.log("Email passed validation");
        console.log(data);
    }
    else {
        inputField.classList.add('shake-input-fields');
    }
});
function dismissSuccessMessage(successMessage,main) {
        successMessage.classList.add('hidden');
        main.classList.remove('hidden');
        main.classList.add('modal-apear-animation');
}
function validationCheck(
        email,
        inputField,
        submitButton,
        errorMessage,
        successMessage,
        main,
        successSpanMessage) {
    const emailValid = isValidEmail(email,inputField,submitButton, errorMessage);
    if (emailValid) {
        main.classList.add('hidden');
        successMessage.classList.remove('hidden');
        successMessage.classList.add('modal-apear-animation');
        successSpanMessage.innerHTML = email;
        console.log("Subscribe succesful");
        return true;
    } else {
        main.classList.remove('hidden');
        successMessage.classList.add('hidden');
        return false;
    }
}
function isValidEmail(
    email,
    inputField,
    submitButton,
    errorMessage) {
    const atIndex = email.indexOf("@");
    const dotIndex = email.lastIndexOf(".");
    if (atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1) {
        errorMessage.innerText = "";
        submitButton.classList.add('button-gradient');
        inputField.classList.remove('input-field-error-state');
        inputField.classList.remove('shake-input-fields');
        inputField.classList.remove('placeholder-field-eror');
        return true;
    } else {
        submitButton.classList.remove('button-gradient');
        errorMessage.innerText = "Valid email required";
        inputField.classList.add('input-field-error-state');
        inputField.classList.add('shake-input-fields');
        inputField.classList.add('placeholder-field-eror');
        return false;
    }
}
successMessageDismissButton.addEventListener('click', successMessageDismissButton.addEventListener('click', function () {
    dismissSuccessMessage(successMessageContainer, main);
  }));