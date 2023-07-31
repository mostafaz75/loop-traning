
// peyda kardan v gaygozin 
let text=  "The color of the sky changes throughout the day. The color of  The color of the sky changes"
function find(kalemeh,gaygozin){
  
    let sentence= text.replaceAll(kalemeh, gaygozin)
   

    console.log(sentence)
  
  
}
find("color","sky")


// tamrine stare 
function star(n){
    let string = "";
    // Upside pyramid
    for (let i = 1; i <= n; i++) {
      // printing spaces
      for (let j = n; j > i; j--) {
        string += " ";
      }
      // printing star
      for (let k = 0; k < i * 2 - 1; k++) {
        string += "*";
      }
      string += "\n";
    }
    // downside pyramid
    for (let i = 1; i <= n - 1; i++) {
      // printing spaces
      for (let j = 0; j < i; j++) {
        string += " ";
      }
      // printing star
      for (let k = (n - i) * 2 - 1; k > 0; k--) {
        string += "*";
      }
      string += "\n";
    }
    console.log(string);
  }
 star(9)