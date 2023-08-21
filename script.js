
function displayNum(num) {
    if (result.value == 0) {
        result.value = '';
    }
    result.value += num;
}

function clearScreen() {
    result.value = 0;
}

function evaluateNum() {
    result.value = eval(result.value);
}

function clearOne(){
    result.value = result.value.slice(0,-1)
}