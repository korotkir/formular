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

let inputHour = document.querySelector('#hour').value
let btn = document.querySelector('.btn')


let month = [january, february, march, april, may, june, july, august, september, october, november, december]
let hourMonth = [hourJanuary, hourFebruary, hourMarch, hourApril, hourMay, hourJune, hourJuly, hourAugust, hourSeptember, hourOctober, hourNovember, hourDecember]
let hour = [744,672,744,720,744,720,744,744,720,744,720,744]

function monthHour() {
  for(i = 0; i < month.length; i++) {
    month[i].innerHTML = hour[i]
  } 
}

function result() {
  let hourResult = []
  for(i = 0; i < 13; i++) {
    Number(hourResult[i]) = Number(inputHour) + hour[i]
    hourMonth[i].innerHTML = hourResult[i]

  }
}


monthHour()
btn.addEventListener('click', result)