/////////////////////////////////////////primitive Types//////////////////////////////////////
//Number , String , Bool
let empName :string ="Arun"
let IsEmp:boolean  =true
let age:number=25


///////////////////////////////////////////ARRAYS/////////////////////////////////////////////

//Implicit
let numSample =[1,2,3]
let strSample=['a','b','c']
let boolSample =[true,false]

//Explicit
let numSamples:number[] =[1,2,3]
let strSamples:string[]=['a','b','c']
let boolSamples:boolean[] =[true,false]


//Declare And Assign Later 
let numSampless:number[]=[];
let strSampless:string[]=[];
let boolSampless:boolean[]=[];

numSample.push(1)
strSampless.push('Arun')
boolSampless.push(true)

//ReadOnly 
let numSamplesss: readonly number[] =[1,2,3]



///////////////////////////////////////////////Objects//////////////////////////////////////

//Implicit or Type Inference
let employee={
    empName:'Arun',
    age:25,
    IsPermanent:true
}

//Explicit
type Employee={
    empName:string,age:number,IsPermanent:boolean
}

let employees:Employee={
    empName:'Arun',
    age:25,
    IsPermanent:true
}

//optional
type Employees={
    empName:string,age?:number,IsPermanent:boolean
}

let employeess:Employees={
    empName:'Arun',
    //age:25,
    IsPermanent:true
}


///////////////////////////////////////////////Union Types//////////////////////////////////////
//Union Type - OR - '|'


//Implicit or Type Inference
let unionType =['one', 1, true]

//Explicit
let errorCode :(string|number);    //Normal Variable 
errorCode='401';
errorCode=401;

let unionArray:(string|number|boolean)[]=[]  //Array
unionArray.push(1)
unionArray.push('Arun')
unionArray.push(true)


///////////////////////////////////////////////Any Type//////////////////////////////////////

//Basic Types 
let empNameBasic:any='Arun'

//Anything can push into that "empNameBasic" 

type Employeess={
    empName:any,age?:any,IsPermanent:any
}

let employeesss:Employeess={
    empName:'Arun',
    //age:25,
    IsPermanent:true
}


///////////////////////////////////////////////Function//////////////////////////////////////
//Function With Parameter
function add(a:number,b:number){
return a+b;
}

//Function with Return Type :number
function adds(a:number,b:number):number{
    return a+b;
}

//Function With Union Type :||
function addss(a:number,b:number,c:(string|number)):number{
    if(typeof c==='number'){
        return a+b+c;
    }
    return a+b;
}

//Function With Optional: ?
function addsss(a:number,b:number,c?:(string|number)):number{
    if(typeof c==='number'){
        return a+b+c;
    }
    return a+b;
}