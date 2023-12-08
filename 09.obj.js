//       SINGLETON

//      OBJECT LITERALS  

const mySym = Symbol("key1")

const JsUsre = {
    name     :  "pankaj",
    age      :   20,
    location :  "Jaipur",
    email    :  "pankaj@2554.com",
    [mySym]  :  "mykey1"
}
// console.log(JsUsre);
// second way to use obj 
// console.log(JsUsre["name"]); 

// console.log(JsUsre[mySym]);


//    when we use any Symbol so we can use this way 

//    when we try then any other people not change our obj so we can use 
//           [Freeze fun]

JsUsre.greeting = function(){
//  console.log("hello World");

}

JsUsre.greetingTwo = function(){
    // console.log(`hello World,${this.name}`);
//  31,32 [ this ] fun is use to acsses the property of an obj 
}
// console.log(JsUsre.greeting());
// console.log(JsUsre.greeting);
// console.log("hello World");


// const TinderUser = new Object()
const TinderUser = {}
TinderUser.id = "123abc"
TinderUser.name = "ravi"
// console.log(TinderUser);

// ...................................................................................... 

// we can easily pass            obj in a obj 
const Regular = {
    firstName : {
        lasName: {
         Uname : "rahul",
        }
    }
}
console.log(Regular.firstName);
// console.log(Regular.firstName?);  ? is a condisnal oprator it is use when use ? with any expresion so doing this otherwise this 

// In any case we can try to access obj we present in a Array so use this sentext 
const Us1 = [
    {name: "prabahat" },
    {Age :20 }
]
Us1[1].Age
console.log(Us1[0]);