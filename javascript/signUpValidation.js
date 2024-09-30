document.getElementById("signup-form")
document.addEventListener("submit", function (event) {
  event.preventDefault();

  document
    .querySelectorAll(".error-message")
    .forEach((el) => (el.style.display = "none"));

  const Firstname = document.getElementById("Firstname").value.trim();
  const Lastname = document.getElementById("Lastname").value.trim();
  const Phone = document.getElementById("Phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const term = document.getElementById("terms").checked;

  let valid = true;

  if (!Firstname) {
    valid = false;
    document.getElementById("firstNameError").style.display = "block";
  }

  if (!Lastname) {
    valid = false;
    document.getElementById("lastNameError").style.display = "block";
  }

  if (!Phone || !validatePhone(Phone)) {
    valid = false;
    document.getElementById("phoneError").style.display = "block";
  }

  if (!validateEmail(email)) {
    valid = false;
    document.getElementById("emailError").style.display = "block";
  }

  if (!term) {
    valid = false;
    document.getElementById("termsError").style.display = "block";
  }

  if (!validatePassword(password)) {
    valid = false;
    document.getElementById("passwordError").style.display = "block";
  }

  if (valid) {
    alert("Form submitted successfully!");
    this.submit();
  }
});

function validatePassword(password) {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return re.test(password);
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePhone(phone) {
  const re = /^\+?[1-9]\d{1,14}$/;
  return re.test(phone);
}
