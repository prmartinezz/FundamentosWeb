function calculateTax() {
    var year = parseInt(document.getElementById('year').value);
    var value = parseFloat(document.getElementById('value').value);

    var taxRate = (year < 1990) ? 0.01 : 0.015;
    var tax = value * taxRate;

    var result = document.getElementById('result');
    result.textContent = "Imposto a ser pago: R$ " + tax.toFixed(2);
  }