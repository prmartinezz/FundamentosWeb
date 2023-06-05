function calcularLitros() {
    var precoLitro = parseFloat(document.getElementById("preco").value);
    var valorPagamento = parseFloat(document.getElementById("pagamento").value);
    var litros = valorPagamento / precoLitro;

    document.getElementById("result").textContent = "Quantidade de Litros colocados no tanque: " + litros.toFixed(2);
  }