function changeColor(){
    let red = document.getElementById('sliderRed').value;
    let green = document.getElementById('sliderGreen').value;
    let blue = document.getElementById('sliderBlue').value;
    let color = 'rgb(' + red + ',' + green + ',' + blue + ')';
    document.body.style.backgroundColor = color;
    document.getElementById('colorOutput').innerHTML = ': ' + color;
}

document.getElementById('sliderRed').addEventListener('input',changeColor);
document.getElementById('sliderGreen').addEventListener('input',changeColor);
document.getElementById('sliderBlue').addEventListener('input',changeColor);