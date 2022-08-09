const aboutMeBox = document.getElementById('about-me')
const initialSpanColor = document.querySelector('#remaining-chars').style.color

aboutMeBox.addEventListener('input', updateCharMeter);

function updateCharMeter(event) {
    const inputBox = event.target
    const remainingCharSpan = inputBox.nextElementSibling.childNodes.item('#remaining-chars')
    let remainingChars = inputBox.maxLength - inputBox.value.length
    

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