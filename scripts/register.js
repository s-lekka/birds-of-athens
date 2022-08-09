const aboutMeBox = document.getElementById('about-me')
const initialSpanColor = document.querySelector('#remaining-chars').style.color

aboutMeBox.addEventListener('input', updateCharMeter);

function updateCharMeter(event) {
    const inputBox = event.target
    const spanElement = inputBox.nextElementSibling.childNodes.item('#remaining-chars')
    let remainingChars = inputBox.maxLength - inputBox.value.length
    
    //text
    spanElement.textContent = remainingChars
    //color
    if (remainingChars < 16) 
        spanElement.classList.add('warning')
    else 
        spanElement.classList.remove('warning')
}