document.getElementById("loginForm")
  document.addEventListener("submit", function (event) {
    event.preventDefault(); 
    document.querySelectorAll(".error-message").forEach((el) => (el.style.display = "none"));
    

    const name = document.getElementById("name").value.trim();
    
    const password = document.getElementById("password").value.trim();
   

    let valid = true;

    if (!name) {
      valid = false;
      document.getElementById("nameError").style.display = "block";
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

