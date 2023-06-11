function calculateTotal() {
    var itemCode = document.getElementById('item').value;
    var quantity = parseInt(document.getElementById('quantity').value);

    var price;

    switch (itemCode) {
      case 'cachorro-quente':
        price = 11.00;
        break;
      case 'bauru':
        price = 8.50;
        break;
      case 'misto-quente':
        price = 8.00;
        break;
      case 'hamburguer':
        price = 9.00;
        break;
      case 'cheeseburger':
        price = 10.00;
        break;
      case 'refrigerante':
        price = 4.50;
        break;
      default:
        price = 0.00;
    }

    var total = price * quantity;

    var result = document.getElementById('result');
    result.innerHTML = "Valor a ser pago: R$ " + total.toFixed(2);
  }