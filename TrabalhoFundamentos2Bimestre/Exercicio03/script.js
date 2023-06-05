function calcularArrecadacao() {
    var quantidadePaes = parseInt(document.getElementById("paes").value);
    var quantidadeBroas = parseInt(document.getElementById("broas").value);
    var valorPaes = quantidadePaes * 0.12;
    var valorBroas = quantidadeBroas * 1.50;
    var totalArrecadado = valorPaes + valorBroas;
    var poupanca = totalArrecadado * 0.1;

    document.getElementById("result").textContent = "Arrecadação total: R$ " + totalArrecadado.toFixed(2) +
      "\nValor a ser guardado na poupança: R$ " + poupanca.toFixed(2);
  }