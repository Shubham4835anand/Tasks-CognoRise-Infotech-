function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    
    if (weight > 0 && height > 0) {
        const bmi = weight / (height * height);
        displayResult(bmi);
    } else {
        alert("Please enter valid weight and height.");
    }
}

function displayResult(bmi) {
    let resultText = `Your BMI is: ${bmi.toFixed(2)}`;
    
    if (bmi < 18.5) {
        resultText += " (Underweight)";
    } else if (bmi < 24.9) {
        resultText += " (Normal weight)";
    } else if (bmi < 29.9) {
        resultText += " (Overweight)";
    } else {
        resultText += " (Obesity)";
    }

    document.getElementById('result').innerText = resultText;
}
