const loginForm = document.querySelector("form");
const emailInput = document.querySelector(".email-container input");
const passwordInput = document.querySelector(".password-container input");
const error = document.querySelectorAll(".err");
const emailErr = document.querySelector(".email-err");
const passwordErr = document.querySelector(".password-err");
const loginBtn = document.querySelector(".btn");

const inputAll = document.querySelectorAll("input");

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function validatePassword(password) {
  // at least a symbol, upper and lower case letters and a number
  var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return re.test(password);
}


const inputEmail = (email) => {
  validateEmail(email.value) ? emailErr.textContent = "" : emailErr.textContent = "Invalid Email"
}

const inputPassword = (password) => {
  console.log(password.value);
  validatePassword(password.value) ? passwordErr.textContent = "" : passwordErr.textContent = "Wrong Password"
}

loginForm.addEventListener("click", function (e) {
  e.preventDefault();
  const clicked = e.target;

  clicked.addEventListener("focusout", function () {
    if (!clicked.value) {
      clicked.type === "email"
        ? (emailErr.textContent = "Email Should be Filled")
        : (passwordErr.textContent = "Password Should be Filled");
    }
  });

  clicked.addEventListener('keyup', function () {
    clicked.type === 'email' ? inputEmail(clicked) : inputPassword(clicked)
  })
});

loginBtn.addEventListener("click", () => {
  if (emailInput.value === "" && passwordInput.value === "") {
    error.forEach((ele) => {
      ele.textContent = "*Field Should be Filled";
    });
  } else if (!emailInput.value && passwordInput.value) {
    emailErr.textContent = "Email Should be Filled"
  }else if (emailInput.value && !passwordInput.value) {
    passwordErr.textContent = "Password Should be Filled"
  } else {
    
    emailInput.value = "";
    passwordInput.value = "";
  }
});
