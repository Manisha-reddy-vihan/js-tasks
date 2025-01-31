console.log("Try programiz.pro");
prime=30
count=true;
for(i=2;i<prime;i++){
    if(prime%i==0){
        console.log(i,prime,"not prime")
        count=false;
        break
    }
}
if(count){
    console.log(prime,"is prime number")
}