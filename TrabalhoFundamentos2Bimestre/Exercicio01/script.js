function calculateArea() {
    var length = parseInt(document.getElementById("length").value);
    var width = parseInt(document.getElementById("width").value);
    var area = length * width;
  
    document.getElementById("result").innerHTML = "Área do terreno: " + area + "m²";
  }
  