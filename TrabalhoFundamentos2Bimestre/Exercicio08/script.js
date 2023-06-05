function calcularValorArrecadado() {
    var quantidadePequenas = parseInt(document.getElementById("quantidade-pequenas").value);
    var quantidadeMedias = parseInt(document.getElementById("quantidade-medias").value);
    var quantidadeGrandes = parseInt(document.getElementById("quantidade-grandes").value);

    var valorArrecadado = quantidadePequenas * 10 + quantidadeMedias * 12 + quantidadeGrandes * 15;

    document.getElementById("result").textContent = "Valor arrecadado: R$ " + valorArrecadado.toFixed(2);
  }