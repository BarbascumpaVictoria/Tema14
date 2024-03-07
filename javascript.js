
 var a = 2;
 var b = 3;
 var c = 4;
 var d = a +'' + b +''+c+'';
// Sarcina1-------------------------------------------
const func1 = (a,b,c) =>{
    return Math.sqrt(a+b+c);
}
console.log(func1(a,b,c));
// Sarcina2-------------------------------------------
const func2 = (d) => {
    let e =Math.floor(Math.random()*10);
    return d.charAt(e);
}
console.log(func2(d))
// Sarcina3-------------------------------------------
const func3 = (d) => {
    return d+d;
}
console.log(func3(d))