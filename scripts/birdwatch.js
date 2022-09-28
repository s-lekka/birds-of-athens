const formElement = document.querySelector('form')
const infoParagraphElement = document.getElementById('birdinfo')
const nameParagraphElement = document.getElementById('birdname')
const birdImgElement = document.getElementById('birdimg')
const colorCheckboxes = document.getElementsByName('colors');
const characteristicsCheckboxes = document.getElementsByName('characteristics');

let birdSize
let beakSize
let characteristics
let colors
let spotLocation

formElement.addEventListener('submit', guessBird)

function guessBird(event) {
    event.preventDefault()
    const formData = new FormData(event.target)

    initializeData()
    updateData(formData)
    
    let birdScore = {}
    let iter = 0

    for (const bird of birdList) {
        birdScore[iter] = 0
        if (bird.birdSize == birdSize) {
            birdScore[iter]+=2
        }
        if (bird.beakSize == beakSize) {
            birdScore[iter]++
        }
        if (bird.possibleLocations.includes(spotLocation))
        {
            birdScore[iter]++
        }
        for (const color of colors) {
            if (bird.colors.includes(color)) {
                birdScore[iter]+=0.5
            }
        }
        for (const characteristic of characteristics) {
            if (bird.colors.includes(characteristic)) {
                birdScore[iter]+=2
            }
        }
        iter++
    }

    let birdAnswer = birdList[findMaxScore(birdScore)]

    showResult(birdAnswer)
    
}

function initializeData() {
    birdSize = ''
    beakSize = ''
    characteristics = []
    colors = []
    spotLocation = ''
    nameParagraphElement.innerHTML = ''
    birdImgElement.src = ''
    birdImgElement.alt = ''
    infoParagraphElement.innerHTML = ''
}

function updateData(formData) {
    spotLocation = formData.get('location')
    beakSize = formData.get('beak-size')
    birdSize = formData.get('bird-size')

    for (const color of colorCheckboxes) {
        if (color.checked) {
            colors.push(color.value)
        }
    }

    for (const characteristic of characteristicsCheckboxes) {
        if (characteristic.checked) {
            colors.push(characteristic.value)
        }
    }

    console.log(spotLocation)
    console.log(beakSize)
    console.log(colors)
    console.log(characteristics)
}

function findMaxScore(birdScore) {
    let max = 0
    let current
    let birdIter
    for (let bird in birdScore) {
        current = birdScore[bird]
        if (current > max ) {
            max = current
            birdIter = bird
        }
    }

    return birdIter
}

function showResult(bird) {
    console.log(bird)
    nameParagraphElement.innerHTML = 'a '+bird.name+'?'
    birdImgElement.src = bird.imgsrc
    birdImgElement.alt = bird.name
    infoParagraphElement.innerHTML = bird.info
    document.getElementById('answer').style.display = 'flex'
}