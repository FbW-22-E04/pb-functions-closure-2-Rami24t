// # JS Closures / Scoping exercises
// 1. What’s the result of executing this code and why.
//
//   function test() {
//     let a;
//     console.log(a);
//     console.log(foo());

//     a = 1;
//     function foo() {
//        return 2;
//     }
//   }

//   test();
//   ```
// result is undefined because a was not defined and then 2 because foo() is a hoisted function and returns 2; 


// 2. What is result?
// result is 5 


// 3. What is the result of the following code? Explain your answer.
//   ```
// let fullname = 'John Doe';
// const obj = {
//     fullname: 'Colin Ihrig',
//     prop: {
//         fullname: 'Aurelio De Rosa',
//         getFullname: function () {
//             return this.fullname;
//         }
//     }
// };

// console.log(obj.prop.getFullname());

// const test = obj.prop.getFullname;

// console.log(test());
//   ```
// results are Aurelio De Rosa and then undefined
// because of the this keyword representing different things in different scopes


// 4. What will you see in the console for the following example? 1
// //   ```
// let a = 1;
// function b() {
//     a = 10;
//     return;
//     function a() { }
// }
// b();
// console.log(a);    

//  1 
