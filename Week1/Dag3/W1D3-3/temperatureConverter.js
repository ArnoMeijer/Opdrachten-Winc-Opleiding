function celsiusToFahrenheit(celsiusTemp) {
    var celsiusInF = (celsiusTemp*9)/5 + 32;
    console.log(celsiusTemp + '°C is ' + celsiusInF + '°F');
  }
  
  function fahrenheitToCelsius(fahrenheitTemp) {
    var fahrenheitInC = ((fahrenheitTemp - 32)*5)/9;
    console.log(fahrenheitTemp + '°F is ' + fahrenheitInC + '°C');
  }

  celsiusToFahrenheit(25);
  fahrenheitToCelsius(88);
