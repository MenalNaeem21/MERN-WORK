/*function myfunc() {
  console.log("hello world\nthis is my first func");
}
myfunc();
function sum(a, b) {
  return a + b;
}
console.log(sum(4, 7));
//arrow func
const arrowmult = (a, b) => {
  return a * b;
};
console.log(arrowmult);
console.log(arrowmult(3, 4));
function vowels(str) {
  let i = 0;
  for (s of str) {
    if (s == "a" || s == "e" || s == "i" || s == "o" || s == "u") i++;
  }
  console.log("count of vowels is ", i);
}
vowels("my name is menal");
// for each loop for arrays 
let arr=[1,2,3,4,5]
arr.forEach((val,idx)=>{
    console.log(val,idx)

})
console.log('\n')
//higher order func->for each (take func as para or ret func as a val )
arr.forEach((val)=>{
    console.log(val*val)
})
//or 
/*let  calcSquare=(num)=>{
    console.log(num*num)

}
arr.forEach(calcSquare)
//map method ret new array
let newarr=arr.map((val)=>{

return val*3 
})
console.log(newarr)
//filter method filgter vals of array and ret a new arr
numbers=[12,5,6,7,8,98,0]
let evenArray=numbers.filter((val)=>{
    return val %2===0
})
console.log(evenArray)
//reduce same as pdc
let output=numbers.reduce((rest,curr)=>{
return rest+curr
}) 
console.log(output)
marks=[78,98,87,99,91,24,92]
let mrks=marks.filter
((val)=>{
    return val>90
})
console.log(mrks)*/
let num = prompt("enter a number");
let array = [];
for (let i = 1; i <= num; i++) {
  array[i - 1] = i;
}
let sum = array.reduce((prev, curr) => {
  return prev + curr;
});
