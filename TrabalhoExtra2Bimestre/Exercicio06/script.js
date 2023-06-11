function calculateCredit() {
    var balance = parseFloat(document.getElementById('balance').value);
    
    var creditPercentage;

    if (balance >= 0 && balance <= 200) {
      creditPercentage = 0;
    } else if (balance >= 201 && balance <= 400) {
      creditPercentage = 0.2;
    } else if (balance >= 401 && balance <= 600) {
      creditPercentage = 0.3;
    } else {
      creditPercentage = 0.4;
    }

    var credit = balance * creditPercentage;

    var result = document.getElementById('result');
    result.innerHTML = "Saldo Médio: R$ " + balance.toFixed(2) + "<br>";
    result.innerHTML += "Valor do Crédito: R$ " + credit.toFixed(2);
  }