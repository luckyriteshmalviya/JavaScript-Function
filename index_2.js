// *****default function*****
// key points:-
// 1) When we call a default function before function initialization then it will operates normally.

// console.log(average(1,2,3,4,5));

// function average(a,b,c,d,e){
//     return ((a+b+c+d+e)/5);
// }
// console.log(average(9,8,7,6,5));
// _____________________________________________________________________________________________________



// *****default value to the parameters*****
// We can assign a default value to the parameters so it will take this default value for the operation and if we give value in the arguement then it will override it.

// function sum(a = 2,b = 4,c=6){

//     return( (a+b+c));
// }

// console.log(sum());
// console.log(sum(1,2,3));
// console.log(sum('','',3));
// console.log(sum(3));
// console.log(sum(a,b,3));
// _______________________________________________________________________________________________________



// //  *****Variable function & Function Expression*****
// key points:-
// 1) When we call a function variable before function initialization then it will show a error.
// 2) When we don't assign a number in arguement to the parameter then it will give us output as NaN.



// console.log(variable_1 (1,1,13));

// var variable_1 = function (a,b,c) {
//     return "Ritesh" + (a+b+c);
// }

// console.log(variable_1 (2,2,3));
// console.log(variable_1 (2,4,8));
// console.log(variable_1 );
// console.log(variable_1 ());
// console.log(variable_1 ("","",""));
// ____________________________________________________________________________________________________________


// const loopUpto = 10;
//   let output1 = 1;
//   for (let i = 0; i < loopUpto; i = i + 2) {
//     output1 = output1 + i;
//   }

//   console.log("Output: 1", output1);

//   const lo = 5;
//   let output2 = 1;
//   for (let i = 0; i < lo; i = i + 2) {
//     output2 = output2 + i;
//   }

//   console.log("Output 2", output2);

//   function sumUpto(limit) {
//     let result = 1;
//     for (let i = 0; i < limit; i = i + 2) {
//       result = result + i;
//     }

//     return result;
//   }

//   console.log("LN38", sumUpto(10));
//   console.log("LN39", sumUpto(100)); */

  // Normal Function
//   function uniqueName(a, b, c, d) {
//     return "Vishal";
//   }

//   
//   console.log("No Arguments: ", uniqueName());
//   console.log("1 Argument: ", uniqueName(1));
//   console.log("Ankit Argument: ", uniqueName("ankit"));
//   console.log("1, Ankit Arguments: ", uniqueName(1, "ankit")); */

//   uniqueName();
//   uniqueName(1);
//   uniqueName("Ankit");
//   uniqueName(1, 20, 100);

//   const getName = uniqueName();
//   //document.write(getName);
//   function addNumbers(a, b) {
//     console.log(a, b);
//     const output = a + b;
//     document.write("LN62: ", output);
//     document.write("<br/>");
//     return output;
//   }

//   //console.log("Sum: ", addNumbers(2, 4));

//   document.write("Sum: ", addNumbers(2, 4));
