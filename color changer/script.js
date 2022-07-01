
function changeColor(){
    let red = document.querySelector('sliderRed').value;
    let green = document.querySelector('sliderGreen').value;
    let blue = document.querySelector('sliderBlue').value;
    let color = 'rgb(' + red + ',' + green + ',' + blue + ')';
    document.body.style.backgroundColor = color;
    document.querySelector('colorOutput').innerHTML = ': ' + color;
}

document.querySelector('sliderRed').addEventListener('input',changeColor);
document.querySelector('sliderGreen').addEventListener('input',changeColor);
document.querySelector('sliderBlue').addEventListener('input',changeColor);