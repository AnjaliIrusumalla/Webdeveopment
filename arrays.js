var names=new Array("anjali","raghava","kala");
console.log(names);
console.log("array 1st element is:-"+names[0]);
names[1]="laxman";
console.log(names);
//another way of creating an array.
var a=new Array(10);
a[0]=2;
a[1]="anjali";
a[2]=3;
console.log(a);
for(i=0;i<10;i++)
{
    console.log(a[i]);
}
console.log("array length is:-"+a.length);
console.log("concatenation of two arrays:");
var b=names.concat(a);
console.log(b);
