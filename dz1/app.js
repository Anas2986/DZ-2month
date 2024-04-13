var name = prompt('введите имя')
var surname = prompt('введите фамилию')


alert('Здравствуйте '+ name[0].toUpperCase() + " " + surname[0].toUpperCase())

var color = prompt('введите цвет').toLocaleLowerCase()
if (color === 'красный'){
    console.log('проезжать нельзя')
} else if (color === 'желтый'){
    console.log('скоро загорится красный')
} else if (color ==='зеленый'){
    console.log('проезжай')
} else {
    console.log('неправильно введен цвет')
}