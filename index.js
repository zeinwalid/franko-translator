function replaceEnglishWithArabic(string) {
  let letterMapping = {
      'a': 'ا',
      'b': 'ب',
      'c': 'ث',
      'd': 'د',
      'e': 'ي',
      'f': 'ف',
      'g': 'ج',
      'h': 'ه',
      'i': 'ي',
      'j': 'ج',
      'k': 'ك',
      'l': 'ل',
      'm': 'م',
      'n': 'ن',
      'o': 'و',
      'p': 'ب',
      'q': 'ك',
      'r': 'ر',
      's': 'س',
      't': 'ت',
      'u': 'يو',
      'v': 'ف',
      'w': 'و',
      'y': 'ي',
      'z': 'ز'
      // Define the mapping for other letters...
  };
  
  let translatedString = '';
  for (let i = 0; i < string.length; i++) {
      let char = string[i].toLowerCase();
      if (char in letterMapping) {
          translatedString += letterMapping[char];
      } else {
          translatedString += string[i];
      }
  }
  
  var franks = {
      '2': 'ئ',
      '3': 'ع',
      '4': 'ش',
      '5': 'خ',
      '7': 'ح',
      '8': 'غ'
  };

  var text = translatedString.replace(/[234578]/g, function(match) {
      return franks[match];
  });
  

  
  // Replace the first letter "e" if present in the string
    var replacementE = "ا"; // Replace 'e' with 'ز'
    if (text.startsWith('ي')) {
        text = replacementE + text.slice(1);
    }
    var replacement2 = "ا"
    if (text.startsWith("ئ")) {
        text = replacement2 + text.slice(1);
    }
  text = text.replace(/سه/g, "ش");
  text = text.replace(/كه/g, "خ");
  text = text.replace(/ثه/g, "ش");
  text = text.replace(/(.)\1+/g, '$1')
  return text;
}

// Example usage
let inputString = '2k2d';
let translatedText = replaceEnglishWithArabic(inputString);
console.log(translatedText);

let frankoInput = document.getElementById("frankoInput")
let arabicInput = document.getElementById("arabicInput")
frankoInput.onkeyup = ()=>{
    arabicInput.value = replaceEnglishWithArabic(frankoInput.value)
}
const body = document.body;
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    body.classList.add("dark-mode");
  } else {
    body.classList.add("light-mode");
  }