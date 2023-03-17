
export function MyBigNumber(stn1, stn2){
    var str='';
    var num1 = stn1.length -1;
    var num2 = stn2.length -1;
    var carry = 0;
    var sum

    while(num1 >= 0 || num2 >= 0){
        sum = (parseInt(stn1[num1]) || 0) + (parseInt(stn2 [num2]) || 0)
        sum += carry ? 1:0
        
        if(sum > 9 ){
            carry = 1 ;
            str = sum %10 + str
            console.log("Sum: ",sum,"","temp",str,"","carry","",carry )
        }else{
            str = sum + str;
            carry = 0
            console.log("Sum: ",sum,"","temp",str,"","carry","",carry )
        }
        num1--;
        num2--
    }
    if(carry){str = 1+ str}
    return str
};
console.log(MyBigNumber("189", "28"));

console.log(MyBigNumber("18900000", "13281274"));
