

console.log("PRIME NUMBER 2 TO 30: ")
for(num=2;num<=30;num++){
    count=true;
    for(i=2;i<num;i++){
        if(num%i==0){
            count=false;
            break
        }
    }
    if(count){
        console.log(num,"is prime")
    }
}