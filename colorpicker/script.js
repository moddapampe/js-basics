let colorInput = document.querySelector('#color');
let hexaInput = document.querySelector('#hexa');

colorInput.addEventListener('input', () => {
    let color = colorInput.value;
    hexaInput.value = color;
    document.querySelector('h1').style.color = color;
});

