// const add = require("./add.js");
// //require("./add");

// console.log("Hell0!Good Evening");
// //EXPORTING THE MODULES
// const sum=add(1,2);
// const sum2=add(3,2);
// console.log(sum);
// console.log(sum2);

//require("./batman");
//require("./superman");

//Module Caching
//const SuperHero = require("./super-hero");
// console.log(superHero.getName());
// superHero.setName("Superman");
// console.log(superHero.getName());


// const newSuperHero = require("./super-hero");
// console.log(newSuperHero.getName());
//const batman =  new SuperHero("Batman");
// console.log(batman.getName());
// batman.setName("bruce Wayne");
// console.log(batman.getName());

// const superman = new SuperHero("Superman");
// console.log(superman.getName())


//Import Export Patterns
const math=require("./math");

const{add,subtract}=math;
console.log(math.add(2,3));
console.log(math.subtract(2,3));