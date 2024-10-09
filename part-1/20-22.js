// Q-20--> Fetch data from an api and use try-catch block
// const FetchData = () => {
//   try {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//       .then((response) => response.json())
//       .then((json) => console.log(json));
//   } catch (error) {
//     console.log(error);
//   }
// };
// FetchData();

// Q-21--> Print factroial using recursion

// function fact(num) {
//   if (num == 1)  return 1;
//   else return num * fact(num - 1);
// }
// console.log(fact(7));

// Q-22-->Print the Fibnocci number using recursion

// function Fib(num) {
//   if (num <= 1) return 1;
//   else return Fib(num - 1) + Fib(num - 2);
// }

// console.log(Fib(4));

// 1,2,3,5,8,13,21---to understand

// Q-22--> create a counter function Learn - clouser

// function createCounter() {
//   let count = 0;

//   function increment() {
//     count++;
//     console.log("count: ", count);
//   }

//   return {
//     incrementCounter: function () {
//       increment();
//     },
//     showCounterValue: function () {
//       console.log("count-Currentvalue: ", count);
//     },
//   };
// }
// let counter = createCounter();
// counter.incrementCounter()
// counter.incrementCounter()
// counter.incrementCounter()
// counter.incrementCounter()
// counter.showCounterValue()
// console.log(counter);
