function capitalizeString(str) {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (i === 0 || str[i - 1] === " ") {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i].toLowerCase();
    }
  }
  return newStr;
}

let capitalString = capitalizeString("hello world how are you");
console.log(capitalString, "1 Solution");

function capitalize(str) {
  let words = str.split(" ");
  let result = words
    ?.map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
  return result;
}

console.log(capitalize("hello world how are you"), "2 Solution");

function capitalizeUsingLoop(str) {
  let words = str.split(" ");
  for (let i = 0; i < words?.length; i++) {
    words[i] = words[i]?.substring(0, 1).toUpperCase() + words[i].substring(1);
  }
  return words.join(" ");
}
console.log(capitalizeUsingLoop("hello world how are you"), "3 Solution");
