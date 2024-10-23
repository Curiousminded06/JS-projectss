var generateBtn = document.querySelector("#generate");

function generatePassword() {
    var uppercase = confirm("Should your password have an uppercase letter?");
    var lowercase = confirm("Should your password have a lowercase letter?");
    var symbols = confirm("Should your password have a symbol?");
    var numbers = confirm("Should your password have a number?");
    
    var keyLength = parseInt(prompt("Password length (8-128 characters):"));
    if (keyLength < 8 || keyLength > 128) {
        alert("Password length must be between 8 and 128 characters.");
        return ""; // Change here: Return an empty string if length criteria are not met
    }

    var uppercaseABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercaseABC = "abcdefghijklmnopqrstuvwxyz";
    var specialSymbols = "!@#$%^&*()_+[]{}|;:,.<>?";
    var numeric = "0123456789";
    var multiSelect = "";

    if (!uppercase && !lowercase && !symbols && !numbers) {
        alert("Select at least one character type!");
        return ""; // Change here: Return an empty string if no criteria are selected
    }

    if (uppercase) multiSelect += uppercaseABC;
    if (lowercase) multiSelect += lowercaseABC;
    if (symbols) multiSelect += specialSymbols;
    if (numbers) multiSelect += numeric;

    let finalPassword = "";
    for (let i = 0; i < keyLength; i++) {
        let rng = Math.floor(Math.random() * multiSelect.length);
        finalPassword += multiSelect[rng];
    }

    return finalPassword; // Return the final password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}
