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

    // if (string[0] === 'o') {
    //   console.log('ok');
    //   letterMapping['o'] = 'ع';
    // }
  
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

// console.log(replaceEnglishWithArabic("raye7"))


let translateBtn = document.getElementById("translatebtn");
let text = document.getElementById("text");
let modelBox = document.getElementById("modelBox")
let okayBtn = document.getElementById("okayBtn");

okayBtn.onclick = () =>{
    modelBox.classList.remove("active")
}

function remove (){
    modelBox.classList.remove("active")
}
translateBtn.addEventListener("click",()=>{

    modelBox.classList.add("active")
 
        if(text.value != ""){
            modelBox.innerHTML = `
                <h1>Translation:</h1>
                <div class= "text">
                
                <p>${replaceEnglishWithArabic(text.value)}</p>
                </div>
                <div class = "button-holder">
                    <button class = "btn" id = "okayBtn" onclick = remove()>okay</button>
                </div>
            `
            modelBox.classList.add("active")
        
        }


    })

