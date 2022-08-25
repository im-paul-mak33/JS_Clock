const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.minute-hand')
const hourHand = document.querySelector('.hour-hand')

let setDate = () => {
    const now = new Date()

    const seconds = now.getSeconds()
    const secondsDegrees = ((seconds / 60) * 360) + 90
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`

    const minutes = now.getMinutes()
    const minutesDegrees = ((minutes / 60) * 360) + 90
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`

    const hours = now.getMinutes()
    const hoursDegrees = ((minutes / 12) * 360) + 90
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`
}

setInterval(setDate, 1000)

setDate()













