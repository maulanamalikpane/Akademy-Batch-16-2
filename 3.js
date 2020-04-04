function dibagi(arr, size){
  let tmp = [];
  for (let i = 0; i < arr.length; i += size) {
    if((arr.length % size)!==1){
      arry = arr.slice(i, i+size);
      tmp.push(arry);
    } else {
      arry = arr.slice(i, i+size);
      if(arry.length!==1){
        tmp.push(arry);
      } else {
        tmp[tmp.length-1].push(arry[0]);
      }
    }
  }
  return tmp;
}

console.log(dibagi([1,2,3,4,5], 2));