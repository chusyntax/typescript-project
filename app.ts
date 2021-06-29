type StringOrNum = string | number; //type alias

let greet: Function;

greet = ()=>{
    console.log('hello')
}

//
//can also add default values for parameter
//in typescript, functions return void when it does not have a return in it
let add =(a:StringOrNum, b:StringOrNum ,c?:number|string )=>{
console.log(a)
}