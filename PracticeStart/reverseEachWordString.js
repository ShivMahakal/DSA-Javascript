function reverseEachWord(str) {
  let str1 = str?.split("").reverse().join("");

  let str2 = str1.split(" ").reverse().join(" ");
  return str2;
}
reverseEachWord("Hello World");

function reverseEachWordForLoop(str) {
  let words = str?.split(" ");

  for (let i = 0; i < words.length; i++) {
    let reversedWord = "";
    for (let j = words[i].length - 1; j >= 0; j--) {
      reversedWord += words[i][j];
    }
    words[i] = reversedWord;
    console.log(words[i]);
  }

  return words.join(" ");
}

reverseEachWordForLoop("Hello World");
