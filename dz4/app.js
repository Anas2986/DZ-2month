var arithmeticNumber =(array)=>{
    var positivNumber=[]
    for (var i=0;i<array.length;i++){
        if (array[i] >=0){
            positivNumber.push(array[i])
        }
    }
    var sum = 0
    for (var j=0;j<positivNumber.length;j++){
        sum +=positivNumber[j]
    }
    var arithmetic=sum/positivNumber.length
    console.log(arithmetic)
}
arithmeticNumber([2, -78, 45,4,-7,-6,-10, 26, 30, 8])

var squaresNumber=(array)=> {
    var newArray = []
    var square = 0
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            square = array[i] * array[i]
            newArray.push(square)
        }
    }
    var sum  = 0
    for (var j = 0; j < newArray.length; j++) {
        sum += newArray[j]
    }
     return console.log(sum)
}
squaresNumber([8,7,6,8,8,3,3])

var checkFunction=(array)=>{
    for (var i=0; i<array.length;i++){
        if (array[i].toLowerCase().includes('t') && array[i].toLowerCase().includes('a')) {
            console.log(array[i])
        }
    }

}
checkFunction(['text', 'frontend', 'apple','sTage','star'])
