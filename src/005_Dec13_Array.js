// Assignment 1
// Array and Object Destruction

let array = ['Hi', 'Hello', 'Hola'];

let [arr_elem1, arr_elem2, arr_elem3] = array;
console.log(arr_elem1, arr_elem2, arr_elem3);
// > Hi Hello Hola

[arr_elem4] = array;
console.log(arr_elem4);
// > Hi

[arr_elem5, , arr_elem6] = array
console.log(arr_elem5, arr_elem6);
// > Hi Hola

let [arr_elem7, ...restofElems] = array
console.log(arr_elem7, restofElems);
// > Hi ['Hello', 'Hola']

// Swapping

let a = 100, b = 200;

[a,b] = [b,a]
console.log(a,b);
// > 200, 100


const someObject = {
    first: 'First',
    second: 'Second',
    third: 'Third'
}

// Names of variables should be exact as key
let {first, third, second} = someObject;
console.log(first, second, third);
// > First Second Third

// If not using let, have to be wrapped in ()
({first_1, second_2, third_3} = someObject);
console.log(first, second, third);
// > First Second Third

// Aliasing keys and assigning values to left hand values
let {first: foo, second: bar} = someObject;
console.log(foo, bar);

// Assignment 2
// Rest Parameters

let anotherObject = {
    another_first: 'This is First',
    another_second: {
        second_first: 'This is First inside Second',
        second_second: 'This is Second inside Second'
    },
    another_third: 'This is Third'
}

let {another_first, ...restofObject} = anotherObject;

console.log(restofObject);
/* {
        another_second: {
            second_first: 'This is First inside Second',
            second_second: 'This is Second inside Second'
        },
        another_third: 'This is Third'
    }
*/

function someProduct(...numbers){
    let product = 1
    console.log(numbers);
    numbers.forEach(element => product*=element)
    return product
}

console.log(someProduct(1,2,3));
// > [ 1, 2, 3 ]
// > 6


// Assignment 3
// Program to find the second largest and second smallest number in any given array.

let max1 = 0, max2 = 0;
let min1 = Infinity, min2 = Infinity;

array = [1,5,1,4,465,52,4,2,4,3,6,4,23,32,4,3]
array.forEach(element => {
    if (element > max1) max1 = element;
    else if  (element > max2) max2 = element;
    else if (element < min1) min1 = element;
    else if (element < min2) min2 = element;
})

console.log(max1, max2, min1, min2);