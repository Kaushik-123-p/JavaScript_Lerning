// const name = "kaushik"
// const count = 50
// console.log(name  + " " + count + " value") 

// console.log(`Hello my name is ${name} and my count is  ${count}`)

// const gameName = new String('kaushik')

// console.log(gameName[0]);
// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toLocaleUpperCase())
// console.log(gameName.charAt(3))
// console.log(gameName.indexOf('s'))



// const newString = gameName.substring(0,4)
// console.log(newString);

// const newStringOne = gameName.slice(-2,7)
// console.log(newStringOne)


// const newStringTwo = "   kaushik   "
// console.log(newStringTwo);
// console.log(newStringTwo.trim());   // this trim() is remove the black spaces


// const url= "https://kaushik.com/kaushik%20prajapati"
// console.log(url);
// console.log(url.replace('%20', '-'));


// console.log(url.includes('kaushik'));


// const gameNameOne = new String('kaushik-prajapati-21')
// console.log(gameNameOne.split('-'));




// [[Prototype]]: String
// anchor: ƒ anchor()
// at: ƒ at()
// big: ƒ big()
// blink: ƒ blink()
// bold: ƒ bold()
// charAt: ƒ charAt()
// charCodeAt: ƒ charCodeAt()
// codePointAt: ƒ codePointAt()
// concat: ƒ concat()
// constructor: ƒ String()
// endsWith: ƒ endsWith()
// fixed: ƒ fixed()
// fontcolor: ƒ fontcolor()
// fontsize: ƒ fontsize()
// includes: ƒ includes()
// indexOf: ƒ indexOf()
// isWellFormed: ƒ isWellFormed()
// italics: ƒ italics()
// lastIndexOf: ƒ lastIndexOf()
// length: 0
// link: ƒ link()
// localeCompare: ƒ localeCompare()
// match: ƒ match()
// matchAll: ƒ matchAll()
// normalize: ƒ normalize()
// padEnd: ƒ padEnd()
// padStart: ƒ padStart()
// repeat: ƒ repeat()
// replace: ƒ replace()
// replaceAll: ƒ replaceAll()
// search: ƒ search()
// slice: ƒ slice()
// small: ƒ small()
// split: ƒ split()
// startsWith: ƒ startsWith()
// strike: ƒ strike()
// sub: ƒ sub()
// substr: ƒ substr()
// substring: ƒ substring()
// sup: ƒ sup()
// toLocaleLowerCase: ƒ toLocaleLowerCase()
// toLocaleUpperCase: ƒ toLocaleUpperCase()
// toLowerCase: ƒ toLowerCase()
// toString: ƒ toString()
// toUpperCase: ƒ toUpperCase()
// toWellFormed: ƒ toWellFormed()
// trim: ƒ trim()
// trimEnd: ƒ trimEnd()
// trimLeft: ƒ trimStart()
// trimRight: ƒ trimEnd()
// trimStart: ƒ trimStart()
// valueOf: ƒ valueOf()
// Symbol(Symbol.iterator): ƒ [Symbol.iterator]()


// charAt: ƒ charAt()
const string = "prajapati kaushik"
// console.log(string.charAt(5));  // op- p

// indexOf: ƒ indexOf()

const String = "The code undefined code code"

// String.indexOf()

// console.log(String.indexOf('code')); // op-4

// index with position
// console.log(String.indexOf('code',4));  // op-4
// console.log(String.indexOf('code',5)); // op- 19
// console.log(String.indexOf('code',-5));  // op- 4

// empty index
// console.log(String.indexOf('')); // 0
// console.log(String.indexOf()); // 9 becose it is undefinded




// String.lastIndexOf()
// console.log(String.lastIndexOf('code'));  // 24

// lastIndex with position
// console.log(String.lastIndexOf('code',24)); // 24
// console.log(String.lastIndexOf('code',23)); // 19
// console.log(String.lastIndexOf('code',-5)); // -1

// empty index
// console.log(String.lastIndexOf('')); //28
// console.log(String.lastIndexOf()); // 9


        //   01234567891123456789212
const s_2 = "The morning is upon us."

// console.log(s_2.length);// length is 23

    // string.slice(indexstart)
        // console.log(s_2.slice(12)); // is upon us.
        // console.log(s_2.slice(-11)); // is upon us
        // console.log(s_2.slice(23)); // blank becose text lenght is 22

    //string.slice(indexStart,indexEnd)
        // console.log(s_2.slice(13, 18)); // s upo
        // console.log(s_2.slice(16, 13)); // blank becose not consider to reverse 

    // string.substring(indexStart)
        // console.log(s_2.substring(12)); // is upon us.
        // console.log(s_2.substring(-11)); // The morning is upon us.
        // console.log(s_2.substring(23));  // blank becose text lenght is 22

    // string.substring(indexStart, indexEnd)
        // console.log(s_2.substring(13,18)); // s upo
        // console.log(s_2.substring(18,13)); // s upo


// const s_3 = "The morning is upon us."
// const arr0 = string.split(s_3)
// console.log(arr0)

const s_4 ='cats are the best!'
//startsWith(serachString)
// console.log(s_4.startsWith('cat'))
// console.log(s_4.startsWith
// ('are'))

//startsWith(serachString,Position)
// console.log(s_4.startsWith('are',5))


//endsWith(serachString)
// console.log(s_4.endsWith
// ('best!'))
// console.log(s_4.endsWith
// ('best'))

//endsWith(serachString,length)
// console.log(s_4.endsWith
// ('best',17))




//  concat mathod

const str1 = 'Hello'
const str2 = 'mr_k'
const str3 = 'prajapati'

// console.log(str1.concat(str2))
// console.log(str1.concat(' ',str2));
// console.log(str1.concat(' ',str2,' ',str3));


// repeat() methos
const s_5 = ' abc'

// console.log(s_5.repeat(0));
// console.log(s_5.repeat(1))
// console.log(s_5.repeat(3))
// console.log(s_5.repeat(3.5))
// console.log(s_5.repeat(8/2))

// console.log(s_5.repeat(-1))  // this is given a error
// console.log(s_5.repeat(1/0)) // this is also given a error


// trim() mathod
const s_6 = '   Hello World!   '

// console.log(s_6.trimStart())
// console.log(s_6.trim())
// console.log(s_6.trimEnd())


// pad() mathod

const s_7 = 'abc'

// // padStart(targetLenght)
// console.log(s_7.padStart(10)) // after acb gives 7 space including abc total 10

// // padStart(targetLength, padString)
// console.log(s_7.padStart(10,'hyy')) 
// console.log(s_7.padStart(10,'1234567')) 
// console.log(s_7.padStart(10,'0123456789')) 


// // padEnd(targetLenght)
// console.log(s_7.padEnd(10))
// // padEnd(targetLength, padString)
// console.log(s_7.padEnd(10,'hyy')) 
// console.log(s_7.padEnd(10,'1234567')) 
// console.log(s_7.padEnd(10,'0123456789')) 


// search() method
// search(regexp)
    const  s_8 = 'The rain in SPAIN stays mainly in the plain'

    // console.log(s_8.search('ain'));
    // console.log(s_8.search(/ain/));
    // console.log(s_8.search(/AIN/));
    // console.log(s_8.search(/AIN/i));
    // console.log(s_8.search(/w/));


// match() method
    //    match(RegExp) 
    const  s_9 = 'The rain in SPAIN stays mainly in the plain'
        // console.log(s_9.match('ain'));
        // console.log(s_9.match(/ain/));
        // console.log(s_9.match (/ain/g)); // g is a global  // which word more then time reapet , this word give to a output
        // console.log(s_9.match (/ain/gi)); 
        // console.log(s_9.match (/w/)); 

// matchAll() method

    // matchAll(RegExp)
        // console.log(s_9.matchAll('ain'));
        // console.log(s_9.matchAll(/ain/g)); 
        // console.log(s_9.matchAll(/ain/gi)); 
        // console.log(s_9.match(/ain/));

// replace() method
    // replace(searchString, replacerString)

        const s_10 = 'Mr Blue has a blue house and a blue car'
            // console.log(s_10.replace('blue', 'red'));
    // replace(searchString, replacerFunction)
            // console.log(s_10.replace('blue',(match) => {
            //     return match.toUpperCase();
            // } ));
    
    // replace(RegExp, replacerString)
            // console.log(s_10.replace(/blue/g, 'red'));
            // console.log(s_10.replace(/blue/gi, 'red'));

            // console.log(s_10.replace(/blue/gi,(match) => {
            //     return match.toUpperCase();
            // } ));

// replaceAll() method
    // replaceAll(searchString, replacerString)
        
    const s_11 = 'Mr Blue has a blue house and a blue car'
        
    //     console.log(s_11.replaceAll('blue', 'red'));

    //      console.log(s_11.replaceAll('blue',(match) => {
    //             return match.toUpperCase();
    //         } )

// charCodeAt() method 
// URF-16
// 0 and 65535
    const s_12 = 'ABCD & abcd'
    // console.log(s_12.charCodeAt(0));
    // console.log(s_12.charCodeAt(4));
    // console.log(s_12.charCodeAt(5));


// codePointAt() method  
// Unicode
// 0 and 65535 & > 65535
    // console.log(s_12.codePointAt(0));
    // console.log(s_12.codePointAt(4));
    // console.log(s_12.codePointAt(5));

// fromCharCode() // this time not a function becode this function is remove
    // const s_13 = 'ok emoji'
    // fromCharCode(num)
        // console.log(s_13.fromCharPoint(0))
    // fromCharCode(num, num2,... , numN)
// fromCodePoint()


// normalize()  //aa mane nathi avadu
    // const s_13 = "i am kaushik , from gujarat"

    //     console.log(s_13)
    //     console.log(s_13.normalize())

// toLowerCase()
    const s_14 = "HELLO kaushik"

        // console.log(s_14.toLowerCase())
// toUpperCase()
        // console.log(s_14.toUpperCase())


// // toLocalLowerCase()   // not a function
// // toLocalLowerCase(locale)
    const s_15 = "iSTANBUL"

//         console.log(s_15.toLocalLowerCase())
// // toLocalUpperCase()
// // toLocalUpperCase(locale)
    const s_16 = "istanbul"
//         console.log(s_16.toLocalUpperCase())


// toString()
    const s_17 = "Hello World"
        // console.log(s_17.toString())
// valueOf
    const s_18 = "Hello World"
        // console.log(s_18.valueOf())


// // raw()
//     const s_19 = ""
//         console.log(s_19.)