
// peyda kardan v gaygozin 
let text=  "The color of the sky changes throughout the day. The color of  The color of the sky changes"
function find(kalemeh,gaygozin){
  
    let sentence= text.replaceAll(kalemeh, gaygozin)
   

    console.log(sentence)
  
  
}
find("color","sky")



// ========================================
  
 // This function takes a parameter 'n' which represents the number of rows in the star pattern.
function star(n) {
  // Initialize an empty string to store the star pattern.
  let string = "";

  // First part of the star pattern: upper half
  for (let i = 1; i <= n; i++) {
    // Add spaces to the string to position the stars correctly in each row.
    // The number of spaces decreases as we move down the rows.
    for (let j = n; j > i; j--) {
      string += " ";
    }

    // Add '*' to the string to create the stars in each row.
    // The number of stars increases by 2 as we move down the rows.
    for (let k = 0; k < i * 2 - 1; k++) {
      string += "*";
    }

    // Move to the next line after completing each row.
    string += "\n";
  }

  // Second part of the star pattern: lower half
  // Note that we start from i=1 because the first row of the lower half is just spaces.
  for (let i = 1; i <= n - 1; i++) {
    // Add spaces to the string to position the stars correctly in each row.
    // The number of spaces increases as we move down the rows.
    for (let j = 0; j < i; j++) {
      string += " ";
    }

    // Add '*' to the string to create the stars in each row.
    // The number of stars decreases by 2 as we move down the rows.
    for (let k = (n - i) * 2 - 1; k > 0; k--) {
      string += "*";
    }

    // Move to the next line after completing each row.
    string += "\n";
  }

  // Print the final star pattern to the console.
  console.log(string);
}
star(7)



// ========================================

// This function, countWordOccurrences(input), takes a string 'input' as an argument and returns an object.
function countWordOccurrences(input) {
  // Initialize an empty object to store the word occurrences.
  let result = {};

  // Split the input string into an array of words using the space (' ') as the separator.
  const str = input.split(' ');

  // Iterate through each word in the 'str' array.
  for (let word of str) {
    // Check if the 'word' already exists as a key in the 'result' object.
    if (result[word]) {
      // If the word exists, increment its value by 1 to indicate another occurrence.
      result[word]++;
    } else {
      // If the word does not exist, create a new key in the 'result' object and set its value to 1.
      // This marks the first occurrence of the word.
      result[word] = 1;
    }
  }

  // Return the 'result' object containing word occurrences.
  return result;
}
console.log(countWordOccurrences('we get back the filtered array, showing only the position of the filtered truthy values. The good thing about this approach is that we can add more items to our if check'));


// ========================================



// This function, findAllOccurrences(text, word), takes two arguments: 'text' (input string) and 'word' (the word to find).
function findAllOccurrences(text, word) {
  // Initialize an empty array to store the indices where the 'word' is found in 'text'.
  let occurrences = [];

  // Use the 'indexOf()' method to find the first occurrence of the 'word' in 'text'.
  // The 'indexOf()' method returns the index of the first occurrence or -1 if the word is not found.
  let index = text.indexOf(word);

  // Use a 'while' loop to keep searching for the 'word' as long as there are more occurrences.
  // The loop runs until 'indexOf()' returns -1, meaning no more occurrences are found.
  
  while (index !== -1) {
    // Push the index of each occurrence into the 'occurrences' array.
    occurrences.push(index);

    // Update the starting index of the search for subsequent occurrences.
    // We pass 'index + 1' as the second argument to 'indexOf()', so it starts searching from the next character after the last occurrence found.
    index = text.indexOf(word, index + 1);
  }

  // Return the 'occurrences' array containing all the indexs where the 'word' is found in 'text'.
  return occurrences;
}

const text1 = "Please locate where locate occurs!";
const wordToFind = "locate";

const occurrences = findAllOccurrences(text1, wordToFind);
console.log(occurrences);