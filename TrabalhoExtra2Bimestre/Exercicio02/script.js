function checkTriangle() {
    var side1 = parseInt(document.getElementById('side1').value);
    var side2 = parseInt(document.getElementById('side2').value);
    var side3 = parseInt(document.getElementById('side3').value);

    if (side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2) {
      if (side1 === side2 && side2 === side3) {
        showResult("Triângulo Equilátero");
      } else if (side1 === side2 || side1 === side3 || side2 === side3) {
        showResult("Triângulo Isósceles");
      } else {
        showResult("Triângulo Escaleno");
      }
    } else {
      showResult("Não forma um triângulo");
    }
  }

  function showResult(message) {
    var result = document.getElementById('result');
    result.textContent = message;
  }