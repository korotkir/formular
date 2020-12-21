let january = document.querySelector('.january')
let february = document.querySelector('.february')
let march = document.querySelector('.march')
let april = document.querySelector('.april')
let may = document.querySelector('.may')
let june = document.querySelector('.june')
let july = document.querySelector('.july')
let august = document.querySelector('.august')
let september = document.querySelector('.september')
let october = document.querySelector('.october')
let november = document.querySelector('.november')
let december = document.querySelector('.december')

let hourJanuary = document.querySelector('.hour-january')
let hourFebruary = document.querySelector('.hour-february')
let hourMarch = document.querySelector('.hour-march')
let hourApril = document.querySelector('.hour-april')
let hourMay = document.querySelector('.hour-may')
let hourJune = document.querySelector('.hour-june')
let hourJuly = document.querySelector('.hour-july')
let hourAugust = document.querySelector('.hour-august')
let hourSeptember = document.querySelector('.hour-september')
let hourOctober = document.querySelector('.hour-october')
let hourNovember = document.querySelector('.hour-november')
let hourDecember = document.querySelector('.hour-december')

let inputHour = document.querySelector('#hour')
let btn = document.querySelector('.btn')


let month = [january, february, march, april, may, june, july, august, september, october, november, december]
let hourMonth = [hourJanuary, hourFebruary, hourMarch, hourApril, hourMay, hourJune, hourJuly, hourAugust, hourSeptember, hourOctober, hourNovember, hourDecember]
let hour = [744,672,744,720,744,720,744,744,720,744,720,744]

function monthHour() {
  for(i = 0; i < month.length; i++) {
    month[i].innerHTML = hour[i]
  } 
}

function result(yourMonth) {
  // Сначала мы рассчитываем Январь (1 месяц)
  let firstMonth = []
  firstMonth[0] = +inputHour.value + hour[0]
  yourMonth[0].innerHTML = firstMonth

    for (i = 1; i < yourMonth.length; i++) {
      (function(ind) {
        setTimeout(function(){
          firstMonth[ind] = firstMonth[ind - 1] + hour[ind]
          hourMonth[ind].innerHTML = firstMonth[ind]
        }, 100 * ind)
      })(i)
    }

  console.table(firstMonth)
}


monthHour()
btn.addEventListener('click', () => result(hourMonth))