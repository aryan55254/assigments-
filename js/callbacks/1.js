//Write a function called calculate that takes three arguments: two numbers and a callback function. The callback should perform an operation (like addition, subtraction, multiplication, or division) on the two numbers and return the result. Use the calculate function to perform each operation.
function calculate(x,y,callback){
    return callback(x,y);
}
function add(x,y){
    a = x + y;
    return a;
}
function subtract(x,y){
    b = x - y;
    return b;
}
function multiply(x,y){
c = x*y
return c;
}
result1 = calculate(3,4,add);
console.log(result1);