function calculateWeight() {
    var height = parseFloat(document.getElementById('height').value);
    var gender = document.getElementById('gender').value;
    
    var weight;

    if (gender === "male") {
      weight = (72.7 * height) - 58;
    } else if (gender === "female") {
      weight = (62.1 * height) - 44.7;
    } else {
      weight = 0;
    }

    var result = document.getElementById('result');
    result.innerHTML = "Peso Ideal: " + weight.toFixed(2) + " kg";
  }