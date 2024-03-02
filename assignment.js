// // problem 1
console.log("calculate the square of a number");
let n = 6;
let sum;
console.log(sum = n*n);
console.log( "square is: "+sum);


// problem 2 
var a = 2;
var b = 3;
var c = 4;
var d = 5;
var e = 6;
var add = ((a + b) * c / d - e);
console.log(add);


// // problem 3 ( swap of a number)
var x = 20;
var y = 67;
if(y==0){
y= x;
x= 0;
}
else if(x==0){
x= y;
y= 0;
}
else{
    x= x*y;
    y= x/y;
    x= x/y;

}
console.log("after swapping");
console.log(" x=" + x);
console.log( "y=" + y);


// problem 4 (c to f)

var celsius = 32;
var fahrenheit = ( (celsius*9)/5)+32;
console.log("fahrenheit ="+  fahrenheit);


// problem 5 (area of rectangle)

var length = 8;
var width = 5;
var areaOfRectangle = length * width;
console.log("area of rectangle= "+areaOfRectangle);


// problem 5 (multiple 5 or not)

var num = 47;

if( num%5==0){
   console.log(" it is multiple of 5");
}
else{
    console.log(" it is not multiple of 5");

}








