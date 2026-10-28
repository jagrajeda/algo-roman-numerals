function toRomanLazy(num) {
  // for romanlazy I want to initialize an empty string that I will call output = "" to house my symbols
  // i need to identify my roman symbols and their corresponding values
  // i need to identify and define an array for the symbols in ascending order
  // I then want to loop through each symbol in that order and see how many values fit
  // I know this may break the DRY method but I want to repeat and add the times it appears to my output
  // I had to come back and reasses because I also need to handle updating my num to keep the remainedr (num % value)
  // and lastly I want to return the output

  let output = "";

  const romanNumeralToArabic = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
  };

  const romanNumeralInDescendingOrder = ["M", "D", "C", "L", "X", "V", "I"];
// now I iterate through each roman numeral in descending order
  for (let roman of romanNumeralInDescendingOrder) {
    let arabic = romanNumeralToArabic[roman];

    let count = Math.floor(num / arabic);

    if (count > 0) {
      output += roman.repeat(count);
      num %= arabic;
    }
    
  }
  return output;
}

function toRoman(num) {
  // I will use similar approach but now use a subtractive pairs in reverse or descending order
  // I will need to loop through this new order and divide to see how many times each value fits into num
  // then return the output after goign through all symbols

  let output = "";

  const romanNumeralToArabic = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  const romanNumeralInDescendingOrder = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

  for (let roman of romanNumeralInDescendingOrder) {
    let arabic = romanNumeralToArabic[roman];

    let count = Math.floor(num / arabic);

    if (count > 0) {
      output += roman.repeat(count);
      num %= arabic;
    }
  }
  return output;
}

module.exports = { toRoman, toRomanLazy };
