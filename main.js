function checkPassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
  
    if (password === confirmPassword) {
      console.log("Пароль принят");
    } else {
      console.log("Пароль не принят");
    }
  }
  