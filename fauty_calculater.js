let a=parseInt(prompt("enter first number: "))
let b=parseInt(prompt ("Enter 2nd Number: "))
let oper=prompt("What you want to do (+,-, /, or * ) : ")
let rand=Math.random(100)
console.log("You want to :"+oper)
console.log("RandomNumber is: "+rand)

if(rand<0.5)
{
    if(oper=="+")
        console.log(a-b)
    else if(oper=="-")
        console.log(a+b)
    else if(oper=="*")
        console.log(a/b)
    else if(oper=="/")
        console.log(a*b)
    else{
        console.log("Please input correct Operator!")
    }
}
else{
    console.log("Its a correct calculater!")
}