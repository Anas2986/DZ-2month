var array = [34, 65, 67, 89,8,9,23,21,10,23,28]
for (var i = 0; i < array.length; i++){
    var evenNumber = array[i]
    if (evenNumber % 2 === 0){
        console.log(evenNumber)
    }
}

var cinema = {
    Saw:{
        genres:{
            firstGenre:'horror',
            secondGenre:'thriller'
        },
        datePremiere:'21.12.2008',
        priceTicket:'3.5$',
        durationHour:1.25,
        mainActors: {
            firstActor:'Tobin Bell',
            secondActor:'Kevin Mak'
        },
        halls:{
            firstHall:'2D',
            secondHall:'3D'
        }
    },
    Tuck:{
        genres:{
            firstGenre:'horror',
            secondGenre:'thriller'
        },
        datePremiere:'25.11.2005',
        priceTicket:'5.5$',
        durationHour:2,
        mainActors: {
            firstActor:'Maik Taison',
            secondActor:'Maicl Jordan'
        },
        halls:{
            firstHall:'2D',
            secondHall:'3D'
        }
    }
}

var number = Number(prompt('введите число'))
switch (number){
    case 1:
        console.log('1 -> I')
        break
    case 2:
        console.log('2 -> II')
        break
    case 3:
        console.log('3 -> III')
        break
    case 4:
        console.log('4 -> VI')
        break
    case 5:
        console.log('5 -> VI')
        break
    case 6:
        console.log('6 -> VII')
        break
    case 7:
        console.log('7 -> VII')
        break
    case 8:
        console.log('8 -> VIII')
        break
    case 9:
        console.log('9 -> IX')
        break
    case 10:
        console.log('10 -> X')
        break
    case 11:
        console.log('11 -> XI')
        break
    case 12:
        console.log('12 -> XII')
        break
    case 13:
        console.log('13 -> XIII')
        break
    case 14:
        console.log('14 -> XIV')
        break
    case 15:
        console.log('15 -> XV')
        break
    default:
        console.log('INVALID NUMBER')
}