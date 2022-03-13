const sliderElement = document.getElementById('slider');
const maxValue = document.getElementById('silder-max-value');

sliderElement.oninput = function() {
    maxValue.textContent = this.value;
}