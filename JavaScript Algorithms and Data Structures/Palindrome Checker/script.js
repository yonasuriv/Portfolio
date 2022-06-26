/*
// METHOD 1 
function palindromeCheck1(str) {                  // L1 - create function where we can input a 'string', and then perform following to said string:
  return (                                        // L2 - return () -> will output a boolean value based on the === operator, true or false. 
    str.replace(/[\W_]/g, "").toLowerCase() ===   // L3 - "first version" deletes all non-alpha-numeric elements, and lowercases remaining characters -> "ivudang"
    
    str                                           // L4 - "second version" aka the reversed version 
      .replace(/[\W_]/g, "")                      // L5 - deletes all non-alpha-numeric elements
      .toLowerCase()                              // L6 - lowercases the remaining characters
      .split("")                                  // L7 - splits characters into elements within an array BECAUSE STRINGS ARE IMMUTABLE (cannot be altered)
      .reverse()                                  // L8 - AND then we can reverse the elements within the array -> ["g", "n", "a", "d", "u", "v", "i"]
      .join("")                                   // L9 - and then convert it back into a string -> "gnaduvi"
  );                                              // THEREFORE, "ivudang" === "gnaduvi" -> FALSE 
}

// TEST EXAMPLE
console.log(palindromeCheck2("Race Car_")); // True
console.log(palindromeCheck2("i Vu_Dang")); // False 

/*
// HIGH LEVEL OUTLINE 
We will create an two versions of the string stripping away all non-alpha-numeric characters, 
and then we'll compare with === aka strictly equal operator to see if they are the same. 

*/


// METHOD 2 
function palindromeCheck2(str) {                                                   // L1
  
  const nonAlphaNum = /[\W_]/g;                                                    // L2
  
  let firstVersion = str.toLowerCase().replace(nonAlphaNum, '');                   // L3 
  let reversedVersion = firstVersion.split('').reverse().join('');                 // L4 
  
  return reversedVersion === firstVersion;                                         // L5
}

// TEST EXAMPLE
console.log(palindromeCheck2("Race Car_")); // True
console.log(palindromeCheck2("i Vu_Dang")); // False 

/*
// HIGH LEVEL OUTLINE 
We will group our 'methods' applied to our two versions of the strings into variables, 
and then compare the two variables, to give our code hints of structural programming. 

L1 - function syntax -> function name(input) { }
        
        
L2 - created a const variable called 'nonAlphaNum', because it won't be changed. It will remain a constant reference where we'll use to remove non-alpha-numeric characters for both versions of the string.  
/ / -> start and end of a RegExp object, used to match text with a pattern 
[ ] -> start and end of a character set, to match characters based on exp inside 
\W -> matches to all NON-alpha-numeric characters. Same as [^A-Za-z0–9]. 
 _ -> matches underscores 
g modifier -> it will operate on all matches, rather than stopping after the first match
*/ 

/*

L3 - created our first version of the string, where we converted all elements to lower case, and removed all non-alpha-numeric characters
.replace syntax -> .replace(find value, new value)
We referenced back to our variable 'const nonAlphaNum' to find all current non-alpha-numeric characters, and replaced it with '' meaning whatever was found was replaced with nothing, aka deleting the element. 
str.toLowerCase() -> "i vu_dang"
.replace(nonAlphaNum, ''); -> "ivudang"


L4 - created our second or the reversed version of the string, where we took our first version and applied a few more methods to it. 
firstversion -> takes our modified string earlier that has been converted to all lower-case and has all non-alpha-numeric characters removed
.split('') -> creates new array with all characters in the string separated into single characters -> ["i", "v", "u", "d", "a", "n", "g"]
.reverse() -> reverses the order of the elements in an array -> ["g", "n", "a", "d", "u", "v", "i"]
.join('') -> convert an array of elements into one string -> "gnaduvi"


L5 - reversedVersion === firstVersion   ->    "ivudang" === "gnauvi"  -> FALSE 

*/ 

<!--------------------------------------START WEB API ----------------------------------------->        
// WEB API - JAVASCRIPT TO HTML
let submitButtonEvent = document.getElementById("submitButton");        // L1 - create var referencing our HTML element with the id "submitButton"

submitButtonEvent.addEventListener("click", function() {                // L2 - document.addEventListener(event, function), event usually "click"
    'use strict';                                                       // L3 - 'use strict' -> good conventiont to detect errors e.g. undeclared variables

    var value = document.getElementById("inputString").value;           // L4 - creates first local variable, referencing our HTML with id "inputString"
    var notification = document.getElementById("notification");         // L5 - creates second local variable, referencing our HTML with id "notification"
    var displayWord = document.getElementById("displayWord");
  
    if(palindromeCheck2(value)) {                                       // L6 - references our function name, and starts do this if
      notification.innerHTML = "\"" + value.toString() + "\"" + ` ` + `is a Palindrome!`;     // L7 - print if function resulted true. Refs our variables. 
      displayWord.innerHTML = 
        `Fowards: ` + value.toLowerCase().replace(/[\W_]/g, '') + "<br>" + `Backwards: ` + value.toLowerCase().replace(/[\W_]/g, '').split('').reverse().join(''); 
      
    } else {
      notification.innerHTML = "\"" + value.toString() + "\"" + ` ` + `is NOT a palindrome!`; // L8 - print if function resulted false
      displayWord.innerHTML = 
        `Fowards: ` + value.toLowerCase().replace(/[\W_]/g, '') + "<br>" + `Backwards: ` + value.toLowerCase().replace(/[\W_]/g, '').split('').reverse().join('');  
    }
});

<!--------------------------------------END WEB API ----------------------------------------->