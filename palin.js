const userInput = document.querySelector(".inp");
const messeg1 = document.querySelector(".h2-3")
const messeg2 = document.querySelector(".h2-4")
const radioLbl1 = document.querySelector(".lbl-1")
const radioLbl2 = document.querySelector(".lbl-2")
const radioButton = document.querySelectorAll(".radio")
const clickButton = document.querySelector("#btn")
const clearButton = document.querySelector("#clear") 
 
let msg = [];
msg[0] = "This sentence is a palindrome:" 
msg[1] = "This sentence is not a palindrome:"
msg[2] = "The longest palindrome is:"
// example palindrome
// "Anne, I vote more cars race Rome to Vienna." -> sentence
// "Bib Bob Detartrated Civic Deified Dewed Eve" -> word
// אבי, אל חי שמך, למה מלך משיח לא יבא
// דעו מאביכם כי לא בוש אבוש, שוב אשוב אליכם כי בא מועד 
// ילד כותב בתוך דלי
for (let i = 0; i < radioButton.length; i++) {
  radioButton[i].addEventListener("click", function() {
    
    radioLbl1.style.color = i == 0 ? "#116c5c" : "#924401";
    radioLbl2.style.color = i == 1 ? "#116c5c" : "#924401";   
  });
} 

clickButton.addEventListener("click", () => {   
       
    let isPalin;  
    let hebTest = (/[\u0590-\u05FF]/) // hebrew test
    let string = userInput.value.toLowerCase();  
  
    if(hebTest.test(string)){       
      string = convertHebSofiyot(string);             
    }    
         
    if(radioButton[0].checked){      
       isPalin = isPalindrome(string.replace(/[^a-z0-9א-ת]/gi,'')) // sentence true or false       
       messeg1.textContent = isPalin ? msg[0] : msg[1];       
       messeg2.textContent = userInput.value;
    }else{          
       isPalin = longestPalindrome(string) // longest Palindrome word       
       messeg1.textContent = msg[2];
       messeg2.textContent = isPalin;
    }       
      
      if(userInput.value == ""){
        messeg1.textContent = ""
      }
  });

clearButton.addEventListener("click", () => {
  userInput.value = ""; 
}); 

function convertHebSofiyot(hebString){ 
let hebSofiyot = "םןץףך";  
let mnzpcLetter ="מנצפכ";  
let str = [...hebString];
   
  for(i in str){
    if(hebSofiyot.includes(str[i])){    
      for(j in hebSofiyot){
        if(str[i] == hebSofiyot[j]){
          str[i] = mnzpcLetter[j];
        }
      }      
    }    
  }        
  return str.join(""); 
} 

function longestPalindrome(string) {
  // Initialize a variable to store the longest palindrome    
  let longest = "";
    
  // Loop through the string, starting at each character
for (let i = 0; i < string.length; i++) {
  // Loop through the string, starting at the end and working backwards
  for (let j = string.length - 1; j >= 0; j--) {
    // If the characters at the current indices are the same
    if (string[i] === string[j]) {
      // Check if the substring between the indices is a palindrome
      
      if (isPalindrome(string.substring(i, j + 1))) {            
        // If the substring is a palindrome and it is longer than the current longest palindrome, 
        // update the longest variable
        if (string.substring(i, j + 1).length > longest.length) {
          // longest = string.substring(i, j + 1); 
          longest = userInput.value.substring(i, j + 1);                     
        }
      }
    }
  }
}
 return longest;
}    

function isPalindrome(string) {     
     
    let conunt = 0;  
    let leng = string.length;    
    
    for(let i = 0; i < leng; i++){               
        if(string[i] === string[leng - 1 - i])                 
            conunt++;                                    
    } 
    if(conunt == leng)                 
      return true;        
    
    return false;              
 }
