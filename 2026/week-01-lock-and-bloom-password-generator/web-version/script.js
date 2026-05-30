let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+'];
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


//Select HTML elements
const generateButton = document.getElementById("generateButton");
const nLetters = document.getElementById("nLetters");
const nSymbols = document.getElementById("nSymbols");
const nNumbers = document.getElementById("nNumbers");
const gardenImage = document.getElementById("gardenImage");


//listening for when someone clicks the generate password button
generateButton.addEventListener("click", function()
{
    let password = [];
    //capture string values
    const capturedLetters = nLetters.value;
    const capturedSymbols = nSymbols.value;
    const capturedNumbers = nNumbers.value;

    //converting into int
    let numLetters = parseInt(capturedLetters, 10);
    let numSymbols = parseInt(capturedSymbols, 10);
    let numNumbers = parseInt(capturedNumbers, 10);

    //loops to get random password array
    for (let i = 1; i <= numLetters;i++)
    {
        password.push(letters[Math.floor(Math.random()*letters.length)]);
    }
    for (let i = 1; i<=numSymbols;i++)
    {
        password.push(symbols[Math.floor(Math.random()*symbols.length)]);
    }
    for (let i = 1; i <= numNumbers; i++)
    {
        password.push(numbers[Math.floor(Math.random()*numbers.length)]);
    }

    //shuffle password array
    for (let i = password.length - 1; i > 0; i--)
    {
        const j = Math.floor(Math.random()*(i+1));
        const temp = password[i];
        password[i] = password[j];
        password[j] = temp;
    }

    //convert array into a string
    let finalPassword = password.join("")
    //send password into users screen
    const userPassword = document.getElementById("passwordResult");

    userPassword.textContent = "Your Password is\n" + finalPassword;

    gardenImage.classList.remove("grow-garden");
    void gardenImage.offsetWidth;
    gardenImage.classList.add("grow-garden");

});


