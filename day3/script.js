for(i=1;i<=20;i++){
    if(i%2==0){
        console.log(i)
    }
}

for(i=1;i<=50;i++){
    if(i%5==0){
        console.log(i)
    }
}

fact=1
for(i=5;i<=1;i--){
    console.log(i)
    fact*=i
}
console.log(fact)


for(i=1;i<=5;i++){
for(j=1;j<=10;j++){
console.log(i+"*"+j+"="+i*j);
}
}

fact=""
for(i=65;i<=90;i++){
    fact+=String.fromCharCode(i);
}
console.log(fact)

