var tags= ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol', 'br']

var tagsOne ={}
for (var tag of tags){
    if (tagsOne[tag]===undefined){
        tagsOne[tag]=1
    } else {
        tagsOne[tag]++
    }
}
console.log(tagsOne)

var numbers = [2,3,4,5,234,654,45,789,876]
var sum =0
for ( var number of numbers){
    sum+=number
}
console.log(sum/numbers.length)

var books = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    genre: 'Fiction',
    pages: 218
}

for (var book in books ){
    console.log(`${book} ${books[book]}`)
}

var numbersArray =[35,56,44,38,37,42,7,4,3,2]
var evenNum=[]
 for (var num of numbersArray){
     if (num % 2===0){
         evenNum.push(num)
     }
 }
console.log(evenNum)