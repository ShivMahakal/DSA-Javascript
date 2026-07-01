//first
const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
  ];
  
  const groupItem = {}
  
  inventory.forEach((item) => {
      if(!groupItem[item.type]){
          groupItem[item.type] = []
      }
      groupItem[item.type].push(item)
  })
  
  console.log(groupItem)

// second
  const inventory1 = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
  ];
  
  const groupedByReduce = inventory.reduce((acc, item) => {
    if (!acc[item.type]) acc[item.type] = [];
    acc[item.type].push(item);
    return acc;
  }, {});
  
  console.log(groupedByReduce);
  

//   third
const groupedByForOf = {};

for (const item of inventory) {
  if (!groupedByForOf[item.type]) groupedByForOf[item.type] = [];
  groupedByForOf[item.type].push(item);
}

console.log(groupedByForOf);


// fourth group
const result = Object.groupBy(inventory, ({ type }) => type);
