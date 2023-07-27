console.log("Yeah buddy light weight")
//////////////call stack and Hoisting/////////////
c()
let a = 5;
function c(){
    var b = 15
    console.log(b)
}
console.log(a)
//////////First class function////////////
function adittion(num){
    return num+num
}
function returnval(fn){
    console.log("added",fn(20))
   
}
/(returnval(adittion))
// ////////////IIFC(Immediately Invoke Function)
(function value(num){
    console.log(num*num)
})(10000000000000000)