function sumArrayIntegers(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
      return 0;
    }
  
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  
    return sum;
  }
  
  const inputArray = [1, 2, 3, 4, 5];
  console.log(sumArrayIntegers(inputArray));
  