const score = 400
// console.log(score);


// All number methods
// 1. number()
// 2. parselnt()
// 3. parseFloat()
// 4. isFinite()
// 5. isInteger()
// 6. toFixed(x)
// 7. toPrecision(x)


// const balance = New Number(100)
// console.log(balance); 

// [[Prototype]]: Number

// constructor:  ƒ Number()
// toExponential: ƒ toExponential()
// toFixed: ƒ toFixed()
// toLocaleString: ƒ toLocaleString()
// toPrecision: ƒ toPrecision()
// toString: ƒ toString()
// valueOf: ƒ valueOf()

const Number = 123.8966
// console.log(Number.toPrecision(4));
// console.log(Number.toPrecision(5));
// console.log(Number.toPrecision(6));

const money = 1000000
// console.log(money.toLocaleString()); // it is by defual to us money
// console.log(money.toLocaleString('en-IN')); // it is a indian money


// All number methods

// 1. number()
    // let num = Number(a)
    // console.log(num);

// 2. parselnt()
    const a = "99"
    let b = "10.33"
    let b1 = "50 years"
    let b2 = "050 years"
    let b3 = "He was 50"

    // console.log(a);
    // console.log(b);
    // console.log(b1);
    // console.log(b2);
    // console.log(b3);


    let num1 = parseInt(a)
    let num2 = parseInt(b)
    let num2_1 = parseInt(b1)
    let num2_2 = parseInt(b2)
    let num2_3 = parseInt(b3)

    // console.log(num1);
    // console.log(num2);
    // console.log(num2_1);
    // console.log(num2_2);


// 3. parseFloat()
    const c1 = "10.33"
    const c2 = "10 33"
    const c3 = "10.33 years"


        // console.log(c1);
        // console.log(c2);
        // console.log(c2);



    let  pf1 = parseFloat(c1)
    let  pf2 = parseFloat(c2)
    let  pf3 = parseFloat(c3)


        // console.log(pf1);
        // console.log(pf2);
        // console.log(pf3);


// 4. isFinite()  // this is check for given number is finte or infinity
    const d1 =  100
    const d2 =  -100
   


    // console.log(d1);
    // console.log(d2);


    let f1 = isFinite(d1)
    let f2 = isFinite(d2)

    // console.log(f1);
    // console.log(f2);


// 4. isFinite()  
    const d3 = "Hello"
    // console.log(d3);

    let f3 = isFinite(d3)
    // console.log(f3);




// 5. isInteger() // this is check for given number is integer or not-integer

    // const g1 = 100

        // console.log(g1);

    // let h1 = Number.isInteger(g1)
        // console.log(h1);

// 6. toFixed(x)
    const  i1 = 5.56789
        console.log(i1);
    
    let j1 = i1.toFixed(2)
        console.log(j1);

// 7. toPrecision(x)    
    const  k1 = 5.56789
        console.log(k1);

    let l1 = k1.toPr(2)
        console.log(l1);