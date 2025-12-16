function Generate() {
    let dictionary = "";

    if (document.querySelector("#lowercaseCb").checked) {
        dictionary = dictionary + "qwertyuiopasdfghjklzxcvbnm";
    }

    if (document.querySelector("#uppercaseCb").checked) {
        dictionary += "QWERTYUIOPASDFGHJKLZXCVBNM";
    }

    if (document.querySelector("#digitsCb").checked) {
        dictionary += "1234567890";
    }

    if (document.querySelector("#specialsCb").checked) {
        dictionary += "!@#$%^&*()_+-={}[];<>:";
    }

    let rangeLength = document.querySelector("#range").value;

    if (rangeLength < 1 || dictionary.length === 0) {
        return;
    }

    let password = "";
    for (let i = 0; i < rangeLength; i++) {
        let position = Math.floor(Math.random() * dictionary.length)
        password = password + dictionary[position];
    }

    document.querySelector("#passwordInput").value = password;

};

let range = document.querySelector("#range");
let rangeSpan = range.nextElementSibling;


range.addEventListener("input", () => {
    rangeSpan.textContent = range.value;
});

let copytBtn = document.querySelector("#copyBtn");

copytBtn.addEventListener("click", () => {
    let passwordText = document.querySelector("#passwordInput");
    passwordText.select();
    passwordText.setSelectionRange(0, 99);
    navigator.clipboard.writeText(passwordText.value);
    alert("Text Copied!")
});

let passwordInput = document.querySelector("#passwordInput");
let EyeBtn = document.querySelector("#togglePassword");
let eyeIcon = document.querySelector("i");


EyeBtn.addEventListener("click", () => {
    if (passwordInput.type === "text") {
        passwordInput.type = 'password';
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    }
    else {
        passwordInput.type = "text";
        eyeIcon.classList.remove("fa-eye-slash")
        eyeIcon.classList.add("fa-eye");
    }
});
