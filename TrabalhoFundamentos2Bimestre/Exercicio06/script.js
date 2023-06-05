function calcularValorPagar() {
    var pesoPrato = parseFloat(document.getElementById("peso").value);
    var valorPagar = pesoPrato * 12;

    document.getElementById("result").textContent = "Valor a pagar: R$ " + valorPagar.toFixed(2);
  }