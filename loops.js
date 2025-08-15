let a=1;
for(let i=1;i<10;i++){
    console.log(a+i);
}
let obj={
    name: "Faheem",
    role: "Programmer"
}
for (const key in obj) {

        const element = obj[key];
        console.log(key, element)  
}
for (const c of "Faheem") {
    console.log(c);
}