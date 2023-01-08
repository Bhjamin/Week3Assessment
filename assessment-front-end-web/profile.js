const favColorBtn = document.querySelector('#favColor')
const favFoodBtn = document.querySelector('#favFood')
const favPlaceBtn = document.querySelector('#favPlace')
const favAnimalBtn = document.querySelector('#favAnimal')

const favColor = () => {
    alert('My favorite color is Purple')
}

const favFood = () => {
    alert('My favorite food is Steak with a side of mac and cheese with steamed broccoli')
}

const favPlace = () => {
    alert('My favorite place has to be where I grew up, Safford.')
}

const favAnimal = () => {
    alert('My favorite animals have to be cats and horses')
}

favColorBtn.addEventListener('click', favColor)

favFoodBtn.addEventListener('click', favFood)

favPlaceBtn.addEventListener('click', favPlace)

favAnimalBtn.addEventListener('click', favAnimal)