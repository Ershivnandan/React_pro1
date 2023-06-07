var numberWords = [
    "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
    "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen",
    "eighteen", "nineteen"
  ];
  
  function convertNumberToString(number) {
    if (number <= 19) {
      return numberWords[number];
    }
    else if (number <= 99) {
      var tensDigit = Math.floor(number / 10);
      var onesDigit = number % 10;
      var result = numberWords[tensDigit * 10];
      if (onesDigit !== 0) {
        result += " " + numberWords[onesDigit];
      }
      return result;
    }
    else {
      var hundredsDigit = Math.floor(number / 100);
      var remainder = number % 100;
      var result = numberWords[hundredsDigit] + " hundred";
      if (remainder !== 0) {
        result += " and " + convertNumberToString(remainder);
      }
      return result;
    }
  }
  
  var jsonArray = JSON.stringify(Array.from({ length: 1000 }, (_, i) => convertNumberToString(i + 1)));
  console.log(jsonArray);
  