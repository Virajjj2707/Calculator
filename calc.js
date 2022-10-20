

document.getElementById("answer").readOnly = true; //this attribute is set in HTML file
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
            checkForBracketMulti(); // automatically gets the value if no brackets
        } else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    });
} 

document.getElementById("keydown", function(event){
            console.log(event.which);
            if(event.shiftKey == 57){
                event.key = "(";
            } else if (event.shiftKey == 48){
                event.key = ")";
            } else if(event.shiftKey == 53){
                event.key = "%"
            } if (event.keyCode == 88){
                event.key += "*"
                screen.value = screenValue
            } 
            if (
                event.key <= 9 ||
                event.key == "+" ||
                event.key == "-" ||
                event.key == "*" ||
                event.key == "." ||
                event.key == "/" ||
                event.key == "%" ||
                event.key == "(" ||
                event.key == ")"
            ) {
                screenValue += event.key
                screen.value = screenValue 
            }
            
})