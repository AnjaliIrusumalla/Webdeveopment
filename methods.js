// var person={name:"ram",age:25,
// changename: function cn(a){this.name=a; console.log("funcction call");}};
// console.log("before method caal");
// console.log(person.name);
// console.log("after method call");
// person.changename("laxman");
// console.log(person.name);
// function person(name,age)
// {
//     this.name=name;
//     this.age=age;
//     this.changename=function cn(name)
//     {
//         this.name=name;
//     }
// }
// var p1=new person("ram",10);
// console.log(p1.name+p1.age);
// console.log("before method call:");
// console.log(p1.name);
// console.log("after method call");
// p1.changename("laxman");
// console.log(p1.name);
function person(name,age)
{
    this.name=name;
    this.age=age;
    this.changename=cn;
}
function cn(name){
    this.name=name;
}
var p1=new person("ram",10);
console.log(p1.name+p1.age);
console.log("before method call:");
console.log(p1.name);
console.log("after method call");
p1.changename("laxman");
console.log(p1.name);