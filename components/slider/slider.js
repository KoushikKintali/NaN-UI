const sliderElement = document.getElementById('slider');
const maxValue = document.getElementById('silder-max-value');

sliderElement.oninput = function () {
    maxValue.textContent = this.value;
    this.style.background = `linear-gradient(to right, #007bff 0%, #007bff ${this.value}%, #fff ${this.value}%, white 100%)`;
}