// function to check number is armstrong or not
function CheckNumberIsArmStrong(number){

    let sum = 0 
    let temp = number

    while(temp > 0) {

        let remainder = temp % 10

        sum = sum + remainder * remainder * remainder

        temp = parseInt(temp / 10)

    }

    if(sum === number){
        return `${number} is an ArmStrong Number`
    }else {
        return `${number} is not an ArmStrong Number`

    }

}

let check = CheckNumberIsArmStrong(371)

console.log(check,"check")


// function to capitalize string

function stringCapitalize(str){
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


let str = stringCapitalize("hello world")