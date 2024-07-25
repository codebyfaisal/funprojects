export const inputCopyPassword = document.getElementById("get-password");
export const copyPassword = document.querySelector("#get-password+svg");
export const inputPasswordLength = document.getElementById("password-length");
export const showPasswordLength = document.querySelector(".show-password-length");
export const inputUpperCase = document.getElementById("upper-case");
export const inputLowerCase = document.getElementById("lower-case");
export const inputNumbers = document.getElementById("numbers");
export const inputSymbols = document.getElementById("symbols");
export const generateBtn = document.getElementById("generate-btn");

export const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
export const lowerCase = "abcdefghijklmnopqrstuvwxyz";
export const numbers = "0123456789";
export const symbols = "!@#$%^&*()-_=+{}[]|:;'\"<>,./?~";

const randomNumber = (length) => {
    return Math.ceil(Math.random() * length);
};

export const generatePassword = () => {
    const passwordLength = inputPasswordLength.value;
    let characters = "";
    let password = "";

    if (inputUpperCase.checked) characters += upperCase;
    if (inputLowerCase.checked) characters += lowerCase;
    if (inputNumbers.checked) characters += numbers;
    if (inputSymbols.checked) characters += symbols;

    // inputUpperCase.checked ? characters += upperCase : characters += ''
    // inputLowerCase.checked ? characters += lowerCase : characters += ''
    // inputNumbers.checked ? characters += numbers : characters += ''
    // inputSymbols.checked ? characters += symbols : characters += ''

    if (characters === "") characters = upperCase + lowerCase + numbers + symbols;

    for (let i = 0; i < passwordLength; i++) {
        password += characters.charAt(randomNumber(characters.length));
    }

    inputCopyPassword.value = password;

    notification("Password Generated Successfully");
};

export const copyPasswordEvent = () => {
    if (inputCopyPassword.value !== '') {
        navigator.clipboard
            .writeText(inputCopyPassword.value)
            .then(() => {
                copyPassword.innerHTML =
                    `<path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>`
                setTimeout(() => {
                    copyPassword.innerHTML = `<path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"/>`
                }, 2000)
                notification("Password copy to Clipboard")
            })
            .catch(() => notification("Failed copy to Clipboard"));
    }
};

export const notification = (notificationNote) => {
    const notificationBox = document.querySelector(".notification");
    notificationBox.innerHTML = notificationNote;
    notificationBox.style.opacity = "1";
    setTimeout(() => {
        notificationBox.style.opacity = "0";
    }, 2000);
};
