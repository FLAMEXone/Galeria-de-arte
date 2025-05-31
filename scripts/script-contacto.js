//funcion para valudar los inputs
function validateInput(
  id,
  validationMessagetId,
  validacion,
  errorMessage,
  validMessage
) {
  const inputElement = document.getElementById(id);
  const message = document.getElementById(validationMessagetId);

  inputElement.addEventListener("input", function () {
    const input = this.value.trim();
    const isValidMessage = validacion.test(input);

    if (
      isValidMessage &&
      input !== "" &&
      input !== null &&
      input !== undefined
    ) {
      message.textContent = validMessage;
      message.style.color = "green";
      inputElement.dataset.valid = "true";
    } else {
      message.textContent = errorMessage;
      message.style.color = "red";
      inputElement.dataset.valid = "false";
    }
  });
}

//funcion para validar los selects
function validateSelect(id, validationMessagetId, errorMessage, validMessage) {
  const selectElement = document.getElementById(id);
  const message = document.getElementById(validationMessagetId);

selectElement.addEventListener("change", function () {
    const selectedValue = this.value;

    if (
      selectedValue &&
      selectedValue !== "" &&
      selectedValue !== null &&
      selectedValue !== undefined
    ) {
      message.textContent = validMessage;
      message.style.color = "green";
      selectElement.dataset.valid = "true";
    } else {
      message.textContent = errorMessage;
      message.style.color = "red";
      selectElement.dataset.valid = "false";
    }
  });
}

//para validar todos los campos antes de enviar el formulario
function validateAllFieldsBeforeSubmit() {
  document.getElementById("name").dispatchEvent(new Event("input"));
  document.getElementById("correo").dispatchEvent(new Event("input"));
  document.getElementById("solicitud").dispatchEvent(new Event("change"));
}

  
//funcion para validar el formulario completo al hacer click en el boton de enviar
function validateOnSubmit(formId, submitButtonId, submitMessageId) {
  document
    .getElementById(submitButtonId)
    .addEventListener("click", function (e) {
      e.preventDefault();

      validateAllFieldsBeforeSubmit();

      const form = document.getElementById(formId);
      const submitMessage = document.getElementById(submitMessageId);
      const inputs = form.querySelectorAll("[data-valid]");
      let isFormValid = true;

      inputs.forEach((el) => {
        if (el.dataset.valid !== "true") {
          isFormValid = false;
          el.style.borderColor = "red";
        } else {
          el.style.borderColor = "green";
        }
      });

      if (isFormValid) {
        submitMessage.textContent = "✅ Formulario enviado correctamente";
        submitMessage.style.color = "green";
      } else {
        submitMessage.textContent =
          "❌ Por favor corrige los errores antes de enviar.";
        submitMessage.style.color = "red";
      }
    });
}

//validacion para el nombre
validateInput(
  "name",
  "name-message",
  /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,}$/,
  "❌ Ingresa un nombre válido (mínimo 2 letras, solo letras)",
  "✅ Nombre válido"
);

//validarion para el correo
validateInput(
  "correo",
  "email-message",
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  "❌ Ingresa un correo válido (ejemplo@dominio.com)",
  "✅ Correo válido"
);

//validacion para el select
validateSelect(
  "solicitud",
  "select-message",
  "❌ Debes seleccionar un tipo de solicitud",
  `✅ Tipo de solicitud seleccionado correctamente`
);

//validacion al enviar el formulario
validateOnSubmit("contact-form", "submit-button", "submit-message");
