function convert () {
  const value = parseFloat(document.getElementById("inputValue").value);
  const type = document.getElementById("conversionType").value;
  const result = document.getElementById("result");
  
  if (isNaN(value)) {
    result.textContent = "Please enter a valid number.";
    return;
  }
  
  let output = "";
  
  if (type === "mToKm") {
    output = `${value} meters = ${value / 1000} kilomters`;
  } else if (type === "KgToLbs") {
    output = `${value} kg = ${value * 2.20462} lbs`;
  } else if (type === "cToF") {
    output = `${value}°C = ${(value * 9/5 + 32).toFixed(2)}°F`;
  }
  
  result.textContent = output;
}