function calcularFerraduras() {
    var cavalos = parseInt(document.getElementById("cavalos").value);
    var ferraduras = cavalos * 4; 
    // Cada cavalo tem 4 patas

    document.getElementById("result").textContent = "Total de Ferraduras necessárias: " + ferraduras;
  }