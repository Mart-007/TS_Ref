function getSum(num1: number, num2: number): number{
    return num1 + num2;
}
console.log(getSum(3,4));

let getNum = function(num1:any, num2:any): number{
    if(typeof num1 == 'string'){
        num1 = parseInt(num1);
    }
    if(typeof num2 == 'string'){
        num2 = parseInt(num2);
    }
    return num1 + num2;
}
console.log(getNum('3', 4))

// const getNum = (num1, num2) => {
//     return num1 * num2;
// }
// console.log(getNum(5,4));

function getName(firstname:string, lastname?:string):string{ // "?"" to set as optional
    if(lastname == undefined){
        return firstname;
    }
    return firstname + ' ' + lastname;
}
console.log(getName("Kei"));

function myVoids(): void{ //void return null and undefined
    return;
}