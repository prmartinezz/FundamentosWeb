function calculateSalary() {
    var level = parseInt(document.getElementById('level').value);
    var hours = parseInt(document.getElementById('hours').value);
    
    var valuePerHour;

    switch (level) {
      case 1:
        valuePerHour = 12;
        break;
      case 2:
        valuePerHour = 17;
        break;
      case 3:
        valuePerHour = 25;
        break;
      default:
        valuePerHour = 0;
    }

    var salary = valuePerHour * hours * 4.5;

    var result = document.getElementById('result');
    result.innerHTML = "Salário do Professor: R$ " + salary.toFixed(2);
  }