// arrays in javascript 

//1 For-each loop

var arr = [1,2,4,5,6,7,8];

arr.forEach(function(val){

console.log(val + " hello" );
});
    

//2 Map function

var newArr = arr.map((val) => {
    return val*13;

    
})
console.log(newArr);
