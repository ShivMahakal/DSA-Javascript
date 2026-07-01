let student = {
  name: "Ram",
  address: {
    personal: {
      city: "Hapur",
      pincode: 24501,
    },
    office: {
      city: "Noida",
      pincode: 10239,
    },
  },
};

let outputObj = {};

let recursive = (obj, name) => {
  for (let key in obj) {
    if (typeof obj[key] == "object") {
      recursive(obj[key], name + "_" + key);
    } else {
      outputObj[name + "_" + key] = obj[key];
    }
  }
};

recursive(student,"student")
console.log(outputObj,"outputObj")