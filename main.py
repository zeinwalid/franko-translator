function replaceEnglishWithArabic(string) {
  var letterMapping = {
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

  if (string[0] === 'o') {
    console.log('ok');
    letterMapping['o'] = 'ع';
  }

  var translatedString = '';
  for (var i = 0; i < string.length; i++) {
    var char = string[i].toLowerCase();
    if (char in letterMapping) {
      translatedString += letterMapping[char];
    } else {
      translatedString += string[i];
    }
  }

  var franks = {
    '2': 'ء',
    '3': 'ع',
    '4': 'ش',
    '5': 'خ',
    '7': 'ح',
    '8': 'غ'
  };

  var text = translatedString.replace(/[234578]/g, function(match) {
    return franks[match];
  });

  return text;
}
