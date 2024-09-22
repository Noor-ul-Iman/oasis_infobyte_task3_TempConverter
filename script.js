function convertTemperature() {
    let inputValue = document.getElementById("inputValue").value;
    let inputUnit = document.getElementById("inputUnit").value;
    let result;

    if (inputValue === '') {
        document.getElementById("result").innerHTML = "Please enter a temperature";
        return;
    }

    if (inputUnit === "celsius") {
        result = (inputValue * 9/5) + 32;
        document.getElementById("result").innerHTML = `${inputValue}°C is equal to ${result.toFixed(2)}°F`;
    } else if (inputUnit === "fahrenheit") {
        result = (inputValue - 32) * 5/9;
        document.getElementById("result").innerHTML = `${inputValue}°F is equal to ${result.toFixed(2)}°C`;
    } else {
        document.getElementById("result").innerHTML = "Please select a valid unit";
    }
}