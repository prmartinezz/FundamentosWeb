function calculatePayment() {
    var price = parseFloat(document.getElementById('price').value);
    var paymentOption = document.getElementById('payment-option').value;
    
    var total;

    switch (paymentOption) {
      case 'a':
        total = price * 0.9;
        break;
      case 'b':
        total = price * 0.85;
        break;
      case 'c':
        total = price;
        break;
      case 'd':
        total = price * 1.1;
        break;
      default:
        total = 0;
    }

    var result = document.getElementById('result');
    result.innerHTML = "Valor a ser pago: R$ " + total.toFixed(2);
  }