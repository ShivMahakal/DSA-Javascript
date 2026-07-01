function findLongestWord(sentence) {
  let longestWord = "";
  let word = sentence.split(" ");
  console.log(word);

  for (let i = 1; i < word.length; i++) {
    if (word[i].length > longestWord.length) {
      longestWord = word[i];
    }
  }

  return longestWord;
}

let sentence = "JavaScript is a powerful and versatile programming language";
let longest = findLongestWord(sentence);
console.log("The longest word is:", longest);
