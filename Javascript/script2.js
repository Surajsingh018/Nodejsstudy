

var arr = [1,2,4,3,234,44,12,-1,2,-4-3.23,3.4,15];
// arr.forEach((val)=>{
//   console.log(val + 2);
// })
var newarr =arr.map((value)=>{
  return value;
})
console.log(newarr)
var oldarr = arr.filter((val)=>{
  if(val > 3)
  {return true}
})
console.log(oldarr)