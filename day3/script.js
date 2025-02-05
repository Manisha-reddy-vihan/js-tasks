
console.log("print even numbers from 1 to 20: ")
for(i=1;i<=20;i++){
    if(i%2==0){
        console.log(i)
    }
}

console.log("print multiples of 5 up to 50: ")
for(i=1;i<=50;i++){
    if(i%5==0){
        console.log(i)
    }
}

console.log("calculate factorial: ")
fact=1
for(i=5;i<=1;i--){
    console.log(i)
    fact*=i


    
}
console.log(fact)

console.log("multiplication table(1 to 5): ")

for(i=1;i<=5;i++){
for(j=1;j<=10;j++){
console.log(i+"*"+j+"="+i*j);
}
}

console.log("print alphabet: ")
fact=""
for(i=65;i<=90;i++){
    fact+=String.fromCharCode(i);
}
console.log(fact)