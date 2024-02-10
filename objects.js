// var person={name:"anjali",colour:"pink",fruit:"apple"};
// console.log(person);
// console.log(typeof(person));
// console.log(person.name);
// console.log(person.name.length);
function person(name,age)
{
    this.name=name;
    this.age=age;
}
var p1=new person("anjali",19);
var p2=new person("kala",20);
console.log(p1);
console.log(p2);
console.log(p1.name);
console.log(p1.age);
console.log(p2.name);
console.log(p2.age);

