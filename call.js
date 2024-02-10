function greet(name)
{
    console.log(`Hello ${name}`);
}

function greetAnjali(greetFn)
{
    const name= "Anjali";
    greetFn(name);
}

greetAnjali(greet);