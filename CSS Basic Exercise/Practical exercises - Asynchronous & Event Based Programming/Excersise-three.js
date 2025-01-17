function calculate(num1, num2, operationCallback) {
   operationCallback(num1, num2) 
}
function operation(x,y){
   console.log('sum is: '+ (x+y))
   console.log('product is:'+ (x*y))
   console.log('division is: '+ (x/y))
}
calculate(10,5,operation)
