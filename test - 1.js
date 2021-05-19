
const checkYuGiOh = (n) => {
  let arr = Array.from({ length: n }, (_, i) => i + 1);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] % 2 === 0) {
      arr[i] = 'yo';
    } else if (arr[i] % 3 === 0) {
      arr[i] = 'gi';
    } else if (arr[i] % 5 === 0) {
      arr[i] = 'oh';
    } else {
      arr[i];
    }
  }
  console.log(arr);
  return arr;
}

checkYuGiOh(10);


[1, 'yo', 'gi', 'yo', 'oh', 'yo', 7, 'yo', 'gi', 10];
