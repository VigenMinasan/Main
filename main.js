let i = 5;
let z= "Bujhm";
let v= "iiii";
let n =124;
let p= n.toString();
let c= p[0];
let b = Number(p[0]);
let a= n.toString();
//1
if(i>=0){
    console.log("Полож");  
}
else{
    console.log("отриц");
}
//2
console.log("Длина стркои ="+z.length);

//3
console.log(z[z.length - 1]);
//4
if (i/2==0){
console.log("Число четное");
} 
else{
    console.log("Число нечетное");
}

//5
if (z[0]==v[0])
{
    console.log("совподают");
}

else{
    console.log("неосвподают");  

}
//6
console.log(Number(p[0])+Number(p[p.length - 1]));
//7
let sum = 0;

let num = "123";

for (let i = 0; i < num.length; i++) {
    sum=sum+Number(num[i]);
   
  }
console.log(`Сумма всех цифр числа: `+sum)