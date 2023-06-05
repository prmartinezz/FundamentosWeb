function calcularDiasVida() {
    var nome = document.getElementById("nome").value;
    var idade = parseInt(document.getElementById("idade").value);
    var diasVida = idade * 365;

    document.getElementById("result").textContent = nome.toUpperCase() + ", VOCÊ JÁ VIVEU " + diasVida + " DIAS";
  }