a=100;
if(a>3)
{
    let b=34;
    console.log("in");
    //no error because of inside the block 
    console.log(b);
    //global scope it can be printed both inside and outside the block
    var c=29;
    console.log(c);


}
//error  will be generated because it is outside the block 
//console.log(b);
console.log(c);