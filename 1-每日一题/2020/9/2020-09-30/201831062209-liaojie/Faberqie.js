//斐波拉契函数递归形式

// function Faberyqie(index){
//
//     if(index == 1 || index == 2){
//         return 1;
//     }
//     return Faberyqie(index-2)+Faberyqie(index-1);
// }


//斐波拉契函数迭代形式
function Faberyqie(index){

    let temp1 = 1,temp2=1,temp3=2;
    if(index == 1 || index == 2){
        return 1;
    }
    for(let i = 3; i <= index; i++){

        temp3 = temp1+temp2;
        temp1 = temp2;
        temp2 = temp3;

    }
    return temp3;
}


console.log(Faberyqie(3));
console.log(Faberyqie(4));
console.log(Faberyqie(5));
console.log(Faberyqie(6));
console.log(Faberyqie(7));
console.log(Faberyqie(8));


