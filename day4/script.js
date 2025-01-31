var a="hello";
str="";
for(i=a.length-1;i>=0;i--){
    str+=a[i]
}

console.log("REVERSED STRING: "+str)

var arr=[23,54,67,64,46,95,98]
console.log("EVEN NUMBERS:");
for(i=0;i<arr.length;i++){
    if(arr[i]%2==0){
       console.log(arr[i])
    }
}
console.log("ODD NUMBERS:");
for(i=0;i<arr.length;i++){
    if(arr[i]%2!==0){
       console.log(arr[i]);
    }
}

var arr=[23,54,67,64,46,95,98]
console.log("EVEN SUM GREATER:");

var evensum=0;
for(i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        evensum=evensum+arr[i]
    }
}
console.log(evensum)

var arr=[23,54,67,64,46,95,98]
console.log("ODD SUM GREATER:");

var evenodd=0;
for(i=0;i<arr.length;i++){
    if(arr[i]%2!==0){
        evenodd=evenodd+arr[i]
    }
}
console.log(evenodd)
