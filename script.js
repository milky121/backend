// let n = 5;

// for(let i=0; i<n; i++){
//     console.log("hello", i);
// }
// console.log("bye");
// let args = process.argv;
// for(let i=2; i<args.length; i++){
// console.log("hello to ", args[i]);
// }
// const math = require("./math");
// console.log(math.sum(2, 2));
// console.log(math.PI);

// const info = require("./fruits");
// console.log(info);  //require folder

// import keyword

import{sum, PI} from "./math.js";
import { generate} from "random-words";
console.log(generate());
// console.log(sum(2,2));

