// const myArr = [1,2,5,3,6,8,"pankaj"]
// console.log(myArr[4]);

//   PUSH FUN       it add any deta type in arry including arry          puch function is use to add a value in arr end (need argument)
                 

//   UNSHIFT FUN    unshift function is use to add a value in arr start (need argument)
           

//   SHIFT FUN      shift function is use to remov one value a value in arr end (No need argument)


//   INCLUDE FUN    [includes] fun. use to ask question and the they return Answer [ boolean deta type] true,false
       

//   INDEXOF FUN    [indexof] fun is use to check the index value of an arry value 


//   JOIN FUN       [join]fun is convert the arry into the string format

//  CONCAT FUN    add tow or more arry in a new[VARIABLE]

//  SPRED FUN     when we add two or more n number of arry to use spred fun

const marvle_hero = ["Iron","Hulk","Spiderman" ]
const dc_hero = ["Batman","Superman","Wonder Women"]
const all_hero =[...marvle_hero , ...dc_hero]
// console.log(all_hero);

// FLAT FUN  when in any arry they have more arry present so we can convert in single arry using  this fun {they store value in another variable}

const another_arry =[1,2,5,[4,7,5,4],8,[4,4,5,8,]]
const real_another_arry = another_arry.flat(Infinity)
//  console.log(real_another_arry);

let Score = 200
let Score2 = 300
let Score3 = 400
let Score4 = 500
let Score5 = 600
console.log(Array.of(Score,Score2,Score3,Score4,Score5));
