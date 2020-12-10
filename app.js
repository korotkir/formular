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


let month = [january, february, march, april, may, june, july, august, september, october, november, december]
let hour = ['744','672','744','720','744','720','744','744','720','744','720','744']

function monthHour() {
  for(i = 0; i < month.length; i++) {
    month[i].innerHTML = hour[i]
  } 
}

monthHour()
