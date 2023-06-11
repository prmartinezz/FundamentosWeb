function calculateNewSalary() {
    var salary = parseFloat(document.getElementById('salary').value);
    var position = document.getElementById('position').value;
    
    var increasePercentage;

    if (position === "101") {
      increasePercentage = 0.1;
    } else if (position === "102") {
      increasePercentage = 0.2;
    } else if (position === "103") {
      increasePercentage = 0.3;
    } else {
      increasePercentage = 0.4;
    }

    var newSalary = salary * (1 + increasePercentage);
    var difference = newSalary - salary;

    var result = document.getElementById('result');
    result.innerHTML = "Salário Antigo: R$ " + salary.toFixed(2) + "<br>";
    result.innerHTML += "Novo Salário: R$ " + newSalary.toFixed(2) + "<br>";
    result.innerHTML += "Diferença: R$ " + difference.toFixed(2);
  }