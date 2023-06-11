function sortValues() {
    var values = [];

    for (var i = 1; i <= 5; i++) {
      var input = document.getElementById('value' + i);
      var value = parseInt(input.value);
      values.push(value);
    }

    values.sort(function(a, b) {
      return b - a;
    });

    var result = document.getElementById('result');
    result.textContent = 'Valores em ordem decrescente: ' + values.join(', ');
  }