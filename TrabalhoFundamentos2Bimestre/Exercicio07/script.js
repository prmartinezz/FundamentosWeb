function calcularDiasDesdeInicioAno() {
    var dia = parseInt(document.getElementById("dia").value);
    var mes = parseInt(document.getElementById("mes").value);
    var diasDesdeInicioAno = (mes - 1) * 30 + dia;

    document.getElementById("result").textContent = "Dias desde o início do ano: " + diasDesdeInicioAno;
  }