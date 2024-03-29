
// ****** In javascript months start 0 to 11

let myDate = new Date()

// console.log(typeof myDate);  //  typeof  date is the object

console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());

console.log("jaydeep");



let myCreatedDate = new Date(2024, 0, 20)
    // console.log(myCreatedDate.toDateString());

let myCreatedDateTime = new Date(2024, 0, 20, 5, 3)
    // console.log(myCreatedDateTime.toLocaleString());

let myCreatedDateTime1 = new Date("2024-01-20")
    // console.log(myCreatedDateTime1.toLocaleString());

let myCreatedDateTime2 = new Date("01-20-2024")
    // console.log(myCreatedDateTime2.toLocaleString());

let myTimeStamp = Date.now()
    // console.log(myTimeStamp);

let dob = new Date("01-20-2024")
    // console.log(dob.getTime()); // getTime is using for date convert to   mili-second

// let DOB = new date("01-20-2024")
    // console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
    // console.log(newDate);
    // console.log(newDate.getMonth()); // its output is 2 becose in javascript months start with 0 that's why complete output for write +1 
    // console.log((newDate.getMonth()) + 1); 
    // console.log(newDate.getDay()); 

// console.log(newDate.toLocaleString('default',{
//     weekday :"long"
    
// }));



