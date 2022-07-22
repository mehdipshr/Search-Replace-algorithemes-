var str = "A quick brown fox jumped over the lazy dog";

let temp = str[0];
var arr= [];
for (let i = 1; i < str.length ; i++) {
    if ( str[i] === " ") {
    arr[arr.length] = temp ;
    temp= "";
    }else{
        temp = temp + str[i]; 
    }
    if (i === str.length-1 ){
        arr[arr.length] = temp;
    }
}
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'jumped' ) {
        arr[i] = 'leaped'
    }
    
}
var str2 = ""
for (let i = 0; i< arr.length; i++) {
    if (i === 0) {
        str2 = str2 + arr[i]
    } else { str2 = str2 + ' ' + arr[i]
    }
    
}
