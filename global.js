function fun()
{
    //global sccope without var and let it can be accessed anywhere.
    a=10;
    console.log(a);
}
fun();
console.log("The value of a is:-"+a);