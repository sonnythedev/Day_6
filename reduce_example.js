let arr=[7,8,9,10,11];

let sum=arr.reduce(
    function(acc,e,i,arr){
        acc +=e;
        console.log(acc,e,i);
        return acc;
    } //seed value
);


//sum=arr.reduce((acc,e,i,arr)=>acc+e);

console.log('sum:',sum);

arr=[1,2,3,4,5,6,7,8,9,10];
////Lets add all the even numbers. use reduce
let evenSum=arr.reduce(
    function(acc,e,i,arr){
        if(e%2==0){//the element is even
            acc +=e;
        }
        return acc;
    },
    0 //if you leave out initial value then it considers the first number
);

console.log('even sum:',evenSum);

let data=[
    {name:'john',salary:'50000',position:'accountant'}, //each item or e
    {name:'sally',salary:'50000',position:'accountant'},
    {name:'bob',salary:'60000',position:'IT'},
    {name:'rajesh',salary:'70000',position:'IT'},
    {name:'lisa',salary:'110000',position:'vice president'},
    {name:'rob',salary:'120000',position:'president'}
];

//We want concatenated names of employees whose salary is over 100000. So in our example, the output should be 'lisa_rob'


//Reduce Problem 1: We want to know the total salary(sum) of all the employees
/*
let totalSalary=data.reduce(
    function(acc,e,i){
        acc +=Number(e.salary);
        return acc;
    },
    0
);
*/

/*
let data=[
    {name:'john',salary:'50000',position:'accountant'}, //each item or e
    {name:'sally',salary:'50000',position:'accountant'},
    {name:'bob',salary:'60000',position:'IT'},
    {name:'rajesh',salary:'70000',position:'IT'},
    {name:'lisa',salary:'110000',position:'vice president'},
    {name:'rob',salary:'120000',position:'president'}
];*/

let totalSalary=data.reduce((acc,e,i)=>{
    //if running multiple statements we have to put curly braces and return type
    acc +=Number(e.salary);
    return acc;
},0);

console.log('total salary:',totalSalary);

//Problem 2: Total IT Salary
totalITSalary=data.reduce((acc,e)=>{
    if(e.position=='IT'){
        acc +=Number(e.salary);
    }
    return acc;
    
},0);
console.log('total IT salary:',totalITSalary);

let bigMoney=data.reduce(
    function(acc,e,i){
        if(Number(e.salary)>100000){
            acc +=e.name+'_';
        }
        return acc;
    },
    ''
);

console.log('big Money names:',bigMoney);

//arr.map will return an array with same number of items
//arr.filter will return an array with same or less number of items
//arr.reduce usually returns a accumulator(which can be of any data type: string, number, arr etc.)


