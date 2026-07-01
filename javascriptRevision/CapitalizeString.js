function capitalizeString(str) {
  let str1 = str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return str1;
}

let capitalString = capitalizeString("hello world how are you");

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

let capitalStringWithLoop = capitalizeStringWithLoop("hello world how are you");
console.log(capitalStringWithLoop, "capitalStringWithLoop");
