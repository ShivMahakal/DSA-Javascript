// function capitalizeString(str) {
//   return str
//     .split(" ")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//     .join(" ");
// }

// capitalizeString("hello world");

// using typescript

// function capitalizeString(str:string):string{

//     return str.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ")

//    }

//    let words = capitalizeString("hello world")

//    console.log(words)

function capitalizeString(str) {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (i === 0 || str[i - 1] === " ") {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i];
    }
  }

  console.log(newStr);
}

let capitalString = capitalizeString("hello world how are you");
