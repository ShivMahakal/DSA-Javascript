function capitalizeString(str) {
  let str1 = str
    .split(" ")
    .map((word) => word.charAt(0) + word.slice(1))
    .join(" ");
  return str1;
}

function capitalizeStringWithLoop(str) {
  let newStr = "";

  for (let i = 0; i <= str.length - 1; i++) {
    if (i === 0 || str[i - 1] === " ") {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i].toLowerCase();
    }
  }

  return newStr;
}

let capitalString = capitalizeString("hello world how are you");
let capitalStringWithLoop = capitalizeStringWithLoop("hello world how are you");
console.log(capitalString);
console.log(capitalStringWithLoop);
