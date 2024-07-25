import * as module from "./module.js";

module.copyPassword.addEventListener("click", () => {
    module.copyPasswordEvent()
});
module.inputCopyPassword.addEventListener("click", () => {
    module.copyPasswordEvent()
});

module.inputPasswordLength.addEventListener("input", () => {
    module.showPasswordLength.innerHTML = module.inputPasswordLength.value
})

module.generateBtn.addEventListener("click", () => {
    module.generatePassword()
});
