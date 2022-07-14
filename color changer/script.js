// fetch colors from external API and assign the fetched randomColor to the sliders
function changeColor() {
    let red = document.querySelector("#sliderRed").valueRed;
    let green = document.querySelector("#sliderGreen").valueGreen;
    let blue = document.querySelector("#sliderBlue").valueBlue;

    let color = "rgb(" + red + "," + green + "," + blue + ")";

    document.body.style.backgroundColor = color;
    document.querySelector("#colorOutput").innerHTML = " " + color;
}
document.querySelector("#sliderRed").addEventListener("input", changeColor);
document.querySelector("#sliderGreen").addEventListener("input", changeColor);
document.querySelector("#sliderBlue").addEventListener("input", changeColor);

let randomButton = document.querySelector("#payme");

randomButton.addEventListener("click", () => {
    fetch("https://dummy-apis.netlify.app/api/color")
        .then((response) => {
            return response.json();
        })

    .then((randomObject) => {
        document.querySelector("#colorOutput").innerHTML =
            randomObject.rgb.r +
            ", " +
            randomObject.rgb.g +
            ", " +
            randomObject.rgb.b;

        let valueRed = String(randomObject.rgb.r);
        let valueGreen = String(randomObject.rgb.g);
        let valueBlue = String(randomObject.rgb.b);

        document.querySelector("#sliderRed").value = valueRed;
        document.querySelector("#sliderGreen").value = valueGreen;
        document.querySelector("#sliderBlue").value = valueBlue;

        let rgb = "rgb(" + valueRed + "," + valueGreen + "," + valueBlue + ")";

        document.body.style.backgroundColor = rgb;
    });
});