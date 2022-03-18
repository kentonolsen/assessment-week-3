const colorBtn = document.getElementById(`color`)

const placeBtn = document.getElementById(`place`)

const ritualBtn = document.getElementById(`ritual`)

function alertColor(e) {
    alert(`Green`)
}
function alertPlace(e) {
    alert(`Home`)
}
function alertRitual(e) {
    alert(`Sleeping`)
}

colorBtn.addEventListener(`click`, alertColor)
placeBtn.addEventListener(`click`, alertPlace)
ritualBtn.addEventListener(`click`, alertRitual)