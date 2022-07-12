// fetch colors from external API and assign the fetched randomColor to the sliders


function changeColor(){
    let red = document.getElementById('sliderRed').value;
    let green = document.getElementById('sliderGreen').value;
    let blue = document.getElementById('sliderBlue').value;

    let color = 'rgb(' + red + ',' + green + ',' + blue + ')';

    document.body.style.backgroundColor = color;
    document.getElementById('colorOutput').innerHTML = ' ' + color;
}

document.getElementById('sliderRed').addEventListener('input',changeColor);
document.getElementById('sliderGreen').addEventListener('input',changeColor);
document.getElementById('sliderBlue').addEventListener('input',changeColor);

let randomButton = document.getElementById('payme');

randomButton.addEventListener('click' , () => {
  fetch("https://dummy-apis.netlify.app/api/color")
    
  .then((response) => {
      return response.json();
    })
    
    .then((randomObject) => {
      document.getElementById('colorOutput').innerHTML =
        randomObject.rgb.r + ", " + randomObject.rgb.g + ", " + randomObject.rgb.b;

      let = valueRed = String(randomObject.rgb.r);
      let = valueGreen = String(randomObject.rgb.g);
      let = valueBlue = String(randomObject.rgb.b);



      document.getElementById('sliderRed').addEventListener('input', valueRed);
      document.getElementById('sliderGreen').addEventListener('input', valueGreen);
      document.getElementById('sliderBlue').addEventListener('input', valueBlue);
      
      let rgb ="rgb(" +valueRed + "," + valueGreen + "," + valueBlue + ")";
        
        
       
      document.body.style.backgroundColor = rgb;
    });
});