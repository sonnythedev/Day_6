var x=5;
let y=6;
let z=7;

function myFunc(){
    let x=10;
    let y=11;
    let z=12;
}

var x=7;

myFunc();

console.log(x,y,z);

function Person(){

}

//Pre ES6 version
function Animal(name,soundType){
     // BUT IT'S DEFINING A CLASS
    let privateVal='secret';
    if(name!=undefined){
        this.name=name;
    }
    else{
       this.name='General Name';
    }
    this.hasLegs=true;
    this.printMyName=function(){
        console.log('My name is '+this.name);
    }
    this.makeSound=function(){
        console.log('I make '+soundType+' sound');
    }
}

//ES6 version
class Animal{ //transpiles into function notation
    constructor(name,soundType){
       this.name=name;
       this.soundType=soundType;
    }
    
    printMyName(){
        console.log('My name is '+this.name);
    }
    makeSound(){
        console.log('I make '+this.soundType+' sound');
    }
}

let cat1=new Animal('cat','meow'); ///Animal()
cat1.printMyName();
cat1.makeSound();
cat1.hasLegs;
console.log(cat1.privateVal);
console.log(Object.keys(cat1));
let dog1=new Animal('dog','woof');
dog1.printMyName();
dog1.makeSound();

let m1=new Person();

console.log('is cat1 instance of',cat1 instanceof Animal);
console.log('is m1 instance of',m1 instanceof Animal);