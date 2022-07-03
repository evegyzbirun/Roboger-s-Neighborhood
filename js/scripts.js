const inputArray = [];
function generateArray(input) {

  for (let index = 0; index <= input; index += 1) {
    inputArray.push(index);
  }
  return inputArray;
}

let words = ["Beep!", "Boop!", "Won't you be my neighbor?"];
// words = 0, 1, 2 elements
// 0  "Beep!" will be used if we have 1 in number from inpuArray and no 2, 3
// 1  "Boop!" will be used if we have 2 in number from inpuArray and no 3
// 2 "Won't you be my neighbor?" will be used if we have 3 in number from inpuArray (1 and 2 does't effect the result)
// if inputArray has 
