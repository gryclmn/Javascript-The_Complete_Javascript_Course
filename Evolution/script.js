// THIS IS A WORK IN PROGRESS

/* 
TODO:
1. Get maximum number of attempts. PRESENTLY HARDCODED
2. Get string to match. PRESENTLY HARDCODED
2. While maximum number not reached:
  1. Get random string. DONE
  2. Count attempts +1 (to compare to max attempts). DONE
  3. Compare random string to original. 
    - Are there any matching characters by index?
      - Store number of total matches.
      - Store index of each match.
  4. If there are matches
    - Format random string at match indexes.
    - Compare random string to previous matches.
      - Give greater weight to greater number of matches.
    - Add match to table of 5 Closest Matches and reorder table.
*/

var asciiCodeStart = 97;
var asciiCodeEnd = 122;
var maximumAttempts = 10;
var attempts = 0;
var originalString = "evolution";
var randomString = "";
var originalStringLength = originalString.length;
var indexes = [];

// Constructor for object "match"
function matchObject() {
    this.possibleMatch = "";
    this.formattedString = "";
//    this.numOfMatches = 0;
    this.indexes = [];
    // Object functions
    this.setIndex = function(index) {
        this.indexes.push(index);
    }
    this.getNumOfMatches = function() {
        return this.indexes.length;
    }
    this.setDefault = function() {
        this.possibleMatch = "";
        this.formattedString = "";
//        this.numOfMatches = 0;
        this.indexes = [];
    };
}

// Declare 5 match objects
var match1 = new matchObject();
var match2 = new matchObject();
var match3 = new matchObject();
var match4 = new matchObject();
var match5 = new matchObject();

function debug(match, matchName) {
//  alert(originalString.charAt(i) + " matches. Attempt #" + 
//              attempts + ". Random word is " + match.possibleMatch + ". Number of Matches: " + match.numOfMatches +
//             ". Index: " + match.indexes[match.indexes.length-1]);
    
//    alert( match.indexes[0]);
    
    alert(matchName + " has a possibleMatch of " + match.possibleMatch + ", with " + match.getNumOfMatches() + " numOfMatches.");
}

function test() {
    debug("test()");
  match1.setIndex("12");
  debug(match1.indexes[0]);  
}

function main() {
  
        // reset object
    match1.setDefault();
    match2.setDefault();
    match3.setDefault();
    match4.setDefault();
    match5.setDefault();
//      debug(match1);
    
  while(attempts < maximumAttempts) {
    
    // Increment attempts for each try
    attempts ++;
    
    // Get a random string with length matching the string we are attempting to match
    randomString = getRandomString(originalStringLength);
   
    // Compare random string to string to match
    getMatch(originalString, randomString);
    
    // ***@@@ DEBUGGING WHILE DEVELOPING @@@***
    // test();
    // attempts = maximumAttempts;
    document.getElementById("result").innerHTML = randomString + ". Number of attempts: " + attempts;
      document.getElementById("match1").innerHTML = match1.possibleMatch;
      document.getElementById("match2").innerHTML = match2.possibleMatch;
      document.getElementById("match3").innerHTML = match3.possibleMatch;
      document.getElementById("match4").innerHTML = match4.possibleMatch;
      document.getElementById("match5").innerHTML = match5.possibleMatch;
    // debug(0);
      
  }
  
  // reset values
  attempts = 0;
  originalString = "evolution";
  randomString = "";
  originalStringLength = originalString.length;
    
// reset object
//    match1.setDefault();
//    match2.setDefault();
//    match3.setDefault();
//    match4.setDefault();
//    match5.setDefault();
}

function getRandomNumber(min, max) {
    
  var ranNum = Math.floor(Math.random() * (max - min + 1) + min);
    
  return ranNum;
    
}

function getRandomString(length) {
    
  var randomString = "";
    
  for(i = 0; i < length; i++) {
        
    randomString = randomString + String.fromCharCode(getRandomNumber(asciiCodeStart, asciiCodeEnd));
        
    }
    
  return randomString;
    
}

function getMatchingChar() {
  
   //
  
}

function getMatch(originalString, randomString) {
  
  for (i = 0; i < originalString.length; i++) {
    
    if(originalString.charAt(i) === randomString.charAt(i)) {
        // Check if match# has possibleMatch and if it is the same match      
       if (match1.possibleMatch === "" || match1.possibleMatch === randomString) {
         match1.possibleMatch = randomString;
         match1.setIndex(i);
//           match1.numOfMatches ++;
           debug(match1, "match1")
       } else if (match2.possibleMatch === "" || match2.possibleMatch === randomString) {
         match2.possibleMatch = randomString;
         match2.setIndex(i);
//           match2.numOfMatches ++;
           debug(match2, "match2")
       } else if (match3.possibleMatch === "" || match3.possibleMatch === randomString) {
         match3.possibleMatch = randomString;
         match3.setIndex(i);
//           match3.numOfMatches ++;
           debug(match3, "match3")
       } else if (match4.possibleMatch === "" || match4.possibleMatch === randomString) {
         match4.possibleMatch = randomString;
         match4.setIndex(i);
//           match4.numOfMatches ++;
           debug(match4, "match4")
       } else if (match5.possibleMatch === "" || match5.possibleMatch === randomString) {
         match5.possibleMatch = randomString;
         match5.setIndex(i);
//           match5.numOfMatches ++;
           debug(match5, "match5")
       } else {
         //
       }
      
      
      // ***@@@ BOOKMARK @@@***    
      
      
    }
    
  }
    
}

function getMatchingSubString(string1, string2) {
  
  
  
}

function insert(str, index, value) {
    return str.substr(0, index) + value + str.substr(index);
}