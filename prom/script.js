function appendToDisplay(input) {
    if (display.value === "0") {
        display.value = input;
    } else {
        display.value += input;
    }
}

function clearScreen() {
    display.value = "0";
}

function deleteChar() {
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = "0";
    }
}

function calculate() {
    try {
        // eval is used for simplicity in this small project
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
        setTimeout(clearScreen, 1500);
    }
}
