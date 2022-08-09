let aboutMeBox = document.getElementById('about-me')
let initialSpanColor = document.querySelector('#remaining-chars').style.color

aboutMeBox.addEventListener('input', updateCharMeter);

function updateCharMeter(event) {
    let inputBox = event.target
    let remainingChars = inputBox.maxLength - inputBox.value.length
    let remainingCharSpan = inputBox.nextElementSibling.childNodes.item('#remaining-chars')

    //text
    remainingCharSpan.textContent = remainingChars
    //color
    if (remainingChars < 16) {
        if (remainingChars < 6) {
            remainingCharSpan.style.color = 'red'
        }
        else 
            remainingCharSpan.style.color = 'orange'
    }
    else 
        remainingCharSpan.style.color = initialSpanColor
}