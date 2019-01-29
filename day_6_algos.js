//Write a function that will basically swap two items in a array. the function will take array, index1 and index2
arr=[1,2,3,4,5]
//swapItems(arr,3,4) ->[1,2,3,5,4]
//swapItems(arr,3,4) ->[1,2,3,5,4]

function swapItems(arr,index1,index2){
   temp=arr[index1];
   arr[index1]=arr[index2];
   arr[index2]=temp;
   return arr;
}

function swapItems_V2(arr,index1,index2){
    [arr[index1],arr[index2]]=[arr[index2],arr[index1]];
    //[a,b]=[b,a] where a=arr[index1], b=arr[index2]
    //[a,b,c,d,e,f]=[f,e,d,a,b,c]
    return arr;
}

let a=1,b=2, c=3;
let d=5,e=6,f=7;

[a,b,c,d,e,f]=[d,e,f,a,b,c];

console.log(a,b,c,d,e,f);
swappedArr=swapItems_V2(arr,1,2);
console.log(swappedArr);

//Write a function that gives you the x and y coordinate of a point, and you have to return the distance from 0,0.

function findDistance(x,y){
    return Math.sqrt(Math.pow(x,2)+Math.pow(y,2));
}

function findDistanceTwoPoints(x1,x2,y1,y2){
    //return Math.sqrt(Math.pow(x,2)+Math.pow(y,2));
     return Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));

}

//console.log(findDistance(3,4));

console.log(findDistanceTwoPoints(1,2,3,4));

////Write a function that will give us the Circumference/Permiteter of a Circle given it's radius

function calcCirclePerimeter(radius){
    return (2*Math.PI*radius).toFixed(2);
}

function calcCircleArea(radius){
    return (Math.PI*radius*radius).toFixed(2);
}

console.log(calcCirclePerimeter(5));