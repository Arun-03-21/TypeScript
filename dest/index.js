"use strict";
/////////////////////////////////////////primitive Types//////////////////////////////////////
//Number , String , Bool
let empName = "Arun";
let IsEmp = true;
let age = 25;
///////////////////////////////////////////ARRAYS/////////////////////////////////////////////
//Implicit
let numSample = [1, 2, 3];
let strSample = ['a', 'b', 'c'];
let boolSample = [true, false];
//Explicit
let numSamples = [1, 2, 3];
let strSamples = ['a', 'b', 'c'];
let boolSamples = [true, false];
//Declare And Assign Later 
let numSampless = [];
let strSampless = [];
let boolSampless = [];
numSample.push(1);
strSampless.push('Arun');
boolSampless.push(true);
//ReadOnly 
let numSamplesss = [1, 2, 3];
///////////////////////////////////////////////Objects//////////////////////////////////////
//Implicit or Type Inference
let employee = {
    empName: 'Arun',
    age: 25,
    IsPermanent: true
};
let employees = {
    empName: 'Arun',
    age: 25,
    IsPermanent: true
};
let employeess = {
    empName: 'Arun',
    //age:25,
    IsPermanent: true
};
///////////////////////////////////////////////Union Types//////////////////////////////////////
//Union Type - OR - '|'
//Implicit or Type Inference
let unionType = ['one', 1, true];
//Explicit
let errorCode; //Normal Variable 
errorCode = '401';
errorCode = 401;
let unionArray = []; //Array
unionArray.push(1);
unionArray.push('Arun');
unionArray.push(true);
///////////////////////////////////////////////Any Type//////////////////////////////////////
//Basic Types 
let empNameBasic = 'Arun';
let employeesss = {
    empName: 'Arun',
    //age:25,
    IsPermanent: true
};
///////////////////////////////////////////////Function//////////////////////////////////////
//Function With Parameter
function add(a, b) {
    return a + b;
}
//Function with Return Type :number
function adds(a, b) {
    return a + b;
}
//Function With Union Type :||
function addss(a, b, c) {
    if (typeof c === 'number') {
        return a + b + c;
    }
    return a + b;
}
//Function With Optional: ?
function addsss(a, b, c) {
    if (typeof c === 'number') {
        return a + b + c;
    }
    return a + b;
}
