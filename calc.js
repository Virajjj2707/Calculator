

document.getElementById("answer").readOnly = true; //set this attribute in Html file
let screen = document.getElementById("answer");
buttons = document.querySelectorAll("button");
let screenValue = "";
for (item of buttons) {
    item.addEventListener("click", (e) => {
        buttonText = e.target.innerText;
        if (buttonText == "X") {
            buttonText = "*";
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText == "C") {
            screenValue = "";
            screen.value = screenValue;
        } else if (buttonText == "=") {
            checkForBracketMulti(); // automatically evaluates if no brackets
        } else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    });
}