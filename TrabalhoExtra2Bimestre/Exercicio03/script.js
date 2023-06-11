function countNotes() {
    var amount = parseInt(document.getElementById('amount').value);

    var notes = {
      100: 0,
      50: 0,
      10: 0,
      5: 0,
      1: 0
    };

    if (amount >= 1) {
      notes[100] = Math.floor(amount / 100);
      amount %= 100;
      
      notes[50] = Math.floor(amount / 50);
      amount %= 50;
      
      notes[10] = Math.floor(amount / 10);
      amount %= 10;
      
      notes[5] = Math.floor(amount / 5);
      amount %= 5;
      
      notes[1] = amount;
    }

    var result = document.getElementById('result');
    result.innerHTML = "Valor lido: R$ " + document.getElementById('amount').value + "<br>";
    result.innerHTML += "Notas necessárias: <br>";
    result.innerHTML += "R$ 100: " + notes[100] + "<br>";
    result.innerHTML += "R$ 50: " + notes[50] + "<br>";
    result.innerHTML += "R$ 10: " + notes[10] + "<br>";
    result.innerHTML += "R$ 5: " + notes[5] + "<br>";
    result.innerHTML += "R$ 1: " + notes[1];
  }