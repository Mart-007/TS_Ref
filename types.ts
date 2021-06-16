var myString: string  = "Hello, I'm Mart";
var myNum: number = 24;
var myBool: boolean = true;
var myVar: any = "This is number" + ' ' + 5 + ' ' + "and it's" +' '+ true;

var strArray: string[] = ["Hello", "Kei"];
var numArray: number[] = [7,6,5,4,3,2,1];
var boolArray: boolean[] = [true, false, false, true];
var strNumTuple: [string, number] = ["Keimoto", 7];  //you can add more values for the types given
var myVoid: void = null;

console.log(myString + ' ' + "and I am" + ' ' + myNum + ' ' + "Years old! and it's" + ' ' + myBool);
console.log(myVar);
console.log(strArray);
console.log(numArray);
console.log(boolArray);
console.log(strNumTuple);
console.log(myVoid);

//------------------------------------------------------------------------------------------------
// strNumTuple = ["Keimoto", 7]; //you can add more values for the types given 
// boolArray = [true, false, false, true];
// numArray = [7,6,5,4,3,2,1];
// strArray = ["Hello", "Kei"];
// myVar = "This is number" + ' ' + 5 + ' ' + "and it's" +' '+ true;
// myBool = false;
// myNum = 24;
// myString = "Hello, I'm Mart";

// ------------- Other approach of array --------------
// var strArray: Array<string> = ["Hello", "Kei"];
// var numArray: Array<number> = [7,6,5,4,3,2,1];
// var boolArray: Array<boolean> = [true, false, false, true];