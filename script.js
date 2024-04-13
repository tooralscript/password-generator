
// Bu bir divdir ve bura sliderin neticesin yaziram
var valueOfRangeRes = document.querySelector(".value-of-range")

// Bu variable da slideri secirem
var valueOfRange = document.querySelector("#myRange")

// passwordu yazacagim div
var finalPasswordDiv = document.querySelector(".div-result-left")

// yeni password iconu secirem
var newPassword = document.querySelector(".fa-repeat")

// istifade edeceyimiz arraylari hazirla
newPassword.addEventListener("click",readyArrays)

// passowrdu hazirla ve goster
newPassword.addEventListener("click",generatePassword)

// local dan cixan passwordlari yazdigim div
var historyPasswordContainer = document.querySelector(".history-passwords-container")

// copy password duymesin secirem
coppyBtn = document.querySelector(".button-copy-password")

// password tarixin sil duymesi

var deletePassWordHistory = document.querySelector(".div-clr-hstr")

deletePassWordHistory.addEventListener("click" , ()=>{
  dataInLocal = []
  dataArrayToLocal = []
  localStorage.clear()
  finalPasswordDiv.innerHTML = ""
  downloadPasswordsFromHistory()
})


// dataArrayToLocal daki passwordlarin yaranma tarixi
// var dataDatesOfArraysToLocal = []

// bu arrayi local storage melumat gondermek ucun istifade edecem
var dataArrayToLocal = []

coppyBtn.addEventListener("click" , ()=>{
  navigator.clipboard.writeText(finalPasswordDiv.innerHTML);

})

window.addEventListener("load",readyArrays)
window.addEventListener("load",generatePassword)


valueOfRange.addEventListener("input",readyArrays)
valueOfRange.addEventListener("input",generatePassword)



// cetinlik seviyesin sliderden gotur reqem kimi goster
valueOfRange.addEventListener("input" , ()=>{
  valueOfRangeRes.innerHTML = `Length of password - ${valueOfRange.value}`
})

// Difficulty levellerin in xettleri >> divleri

var diffLine1 = document.querySelector("#diff-line-1")
var diffLine2 = document.querySelector("#diff-line-2")
var diffLine3 = document.querySelector("#diff-line-3")
var diffLine4 = document.querySelector("#diff-line-4")


// xettlerin sayin teyin etmek ucun variable

var difficultyOfPassword = 0;

// Checkboxlari document den gotururuk

var upperCaseCheckbox = document.querySelector("#up-letters")
var lowerCaseCheckbox = document.querySelector("#low-letters")
var numbersCheckbox = document.querySelector("#numbers")
var symbolsCheckbox = document.querySelector("#symbols")

upperCaseCheckbox.addEventListener("change",displayDifficulty())
lowerCaseCheckbox.addEventListener("change",displayDifficulty())
numbersCheckbox.addEventListener("change",displayDifficulty())
symbolsCheckbox.addEventListener("change",displayDifficulty())


// Cetinliyi display eden funskiya

function displayDifficulty(){

  // Bir bir butun checkboxlari yoxlayib cetinlik seviyesin teyin edirem
  if(upperCaseCheckbox.checked){
  difficultyOfPassword++;
  }
  if(lowerCaseCheckbox.checked){
    difficultyOfPassword++;
  }
  if(numbersCheckbox.checked){
    difficultyOfPassword++;
  }
  if(symbolsCheckbox.checked){
    difficultyOfPassword++;
  }


  // Cetinlik seviyesine gore xetlerin rengin teyin edirem, shert sayi coxdur cun ki bir qutunun rengi interaktiv shekilde deyishmelidir
  if(difficultyOfPassword == 1){
    diffLine1.style.backgroundColor = "red";
    diffLine2.style.backgroundColor = "#00F0FF";
    diffLine3.style.backgroundColor = "#00F0FF";
    diffLine4.style.backgroundColor = "#00F0FF";
  }else if(difficultyOfPassword == 2){
    diffLine1.style.backgroundColor = "red";
    diffLine2.style.backgroundColor = "red";
    diffLine3.style.backgroundColor = "#00F0FF";
    diffLine4.style.backgroundColor = "#00F0FF";
  }else if(difficultyOfPassword == 3){
    diffLine1.style.backgroundColor = "red";
    diffLine2.style.backgroundColor = "red";
    diffLine3.style.backgroundColor = "red";
    diffLine4.style.backgroundColor = "#00F0FF";
  }else if(difficultyOfPassword == 4){
    diffLine1.style.backgroundColor = "red";
    diffLine2.style.backgroundColor = "red";
    diffLine3.style.backgroundColor = "red";
    diffLine4.style.backgroundColor = "red";
  }else if(difficultyOfPassword == 0){
    diffLine1.style.backgroundColor = "#00F0FF";
    diffLine2.style.backgroundColor = "#00F0FF";
    diffLine3.style.backgroundColor = "#00F0FF";
    diffLine4.style.backgroundColor = "#00F0FF";
  }

  // bu variable reset edirem ki her click bash verdikde hesablama sifirdan bashlasin ki conlifct yaranmasin
  difficultyOfPassword = 0

}





// Password yaratmag ucun istifade edeceyimiz arraylar

var arrayOfUpperLetters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];

var arrayOfLowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var arrayOfNumbers = ['0','1','2','3','4','5','6','7','8','9']

var arrayOfSymbols = ['!','@','#','$','%','^','&','*','(',')','-','+']

var arrayOfArrays = []

// bunu variable hec bir checkbox checked olmadigda buttun arraylerden istifade ederek password yaratmagima komek edecek
var atLeastOneArray;

// ashagida math random ucun istifade edeceyim length

let numOfArraysWillBeUsed;

// bu funksiya checkboxlara esasen yuxaridaki arraylarin hansilarin ishledeceyimizi secir
function readyArrays(){

  // console.log("ready arrays ishe salindi");

  // bu funskiya her cagirildiginda bu deyerler sifirlanir
  numOfArraysWillBeUsed = 0;
  atLeastOneArray = false;
  arrayOfArrays = []

  if(upperCaseCheckbox.checked){
    // console.log("bura true oldu");
    arrayOfArrays.push(arrayOfUpperLetters)
    atLeastOneArray = true;
    numOfArraysWillBeUsed++;
  }
  if(lowerCaseCheckbox.checked){
    arrayOfArrays.push(arrayOfLowerLetters)
    atLeastOneArray = true;
    numOfArraysWillBeUsed++;
  }
  if(numbersCheckbox.checked){
    arrayOfArrays.push(arrayOfNumbers)
    atLeastOneArray = true;
    numOfArraysWillBeUsed++;
  }
  if(symbolsCheckbox.checked){
    arrayOfArrays.push(arrayOfSymbols)
    atLeastOneArray = true;
    numOfArraysWillBeUsed++;
  }
  if(atLeastOneArray == false){
    arrayOfArrays = [arrayOfUpperLetters,arrayOfLowerLetters,arrayOfNumbers,arrayOfSymbols]
    numOfArraysWillBeUsed = 4;
  }

  // console.log(arrayOfArrays);
}

// bu funskiya passwordu yaradir
function generatePassword(){

  // historyPasswordContainer.innerHTML = ""

  // console.log("generate password ishe salindi");

  var combinationOfCharacters = []
  var finalResult = ''

  for(var i = 0 ; i < valueOfRange.value ; i++){
    // random olarag yuxaridaki 4 array den birini secirik ... bu funksiyani internetden goturdum
    var randomIndexOfArray = Math.floor(Math.random() * ((numOfArraysWillBeUsed-1) - 0 + 1) + 0)

    var neededArray = arrayOfArrays[randomIndexOfArray]

    var indexOfNeededValue = Math.floor(Math.random() * ((neededArray.length - 1) - 0 + 1) + 0)
    var neededValueFromArray = neededArray[indexOfNeededValue]

    combinationOfCharacters.push(neededValueFromArray)
  }

  finalResult = combinationOfCharacters.join("")


  finalPasswordDiv.innerHTML = finalResult

  dataArrayToLocal.push(finalResult)

  console.log(dataArrayToLocal);

  downloadPasswordsFromHistory()
  
}



function downloadPasswordsFromHistory(){

  let dataInLocal = JSON.parse(localStorage.getItem("data"))

  if(dataInLocal){
    console.log("Local storage bosh deyil");

    dataInLocal.push(dataArrayToLocal[dataArrayToLocal.length-1]);
    
    localStorage.setItem("data" , JSON.stringify(dataInLocal))
  }else{
    console.log("Local storage boshdur");
    localStorage.setItem("data" , JSON.stringify(dataArrayToLocal))
  }

  

  


  
  historyPasswordContainer.innerHTML = " "

  for(var i = JSON.parse(localStorage.getItem("data")).length - 1 ; i >= 0 ; i--){

    // console.log("local daki for a girdim");

    var templateDiv = document.createElement("div")

    templateDiv.classList.add("template-div")
    

    var templateDivInnerPassword = document.createElement("div")
    var node2 = document.createTextNode(JSON.parse(localStorage.getItem("data"))[i]);

    templateDivInnerPassword.appendChild(node2)
    templateDivInnerPassword.classList.add("password-from-local")

    var templateDivInnerIcon = document.createElement("i")
    templateDivInnerIcon.classList.add("fa-copy")
    templateDivInnerIcon.classList.add("fa-solid")
    

    templateDiv.appendChild(templateDivInnerPassword)
    templateDiv.appendChild(templateDivInnerIcon)
    

    historyPasswordContainer.appendChild(templateDiv)

    // console.log("download password ishe salindi");

  }
}



