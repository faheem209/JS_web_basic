var a=10;
var b="Faheem";
var d=undefined;
var e=null;
console.log(typeof a, typeof b, typeof d, typeof e);
let c="Faheem Nazir";
{
    let c="M Faheem";
    console.log("block scope veriable c: "+c+" ");
}
console.log("Global Scope c: "+c);
let obj={
    id : "1",
    "First Name: " : "Faheem",
    "Last Name: ": "Nazir",
    Married: "No"
}
console.log(typeof obj)