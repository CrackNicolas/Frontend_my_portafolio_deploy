const price_1 = document.querySelector('#price-1')
const output_1 = document.querySelector('.price-1-output')

output_1.textContent = price_1.value

price_1.addEventListener('input', function() {
  output_1.textContent = price_1.value+"%"
});

const price_2 = document.querySelector('#price-2')
const output_2 = document.querySelector('.price-2-output')

output_2.textContent = price_2.value

price_2.addEventListener('input', function() {
  output_2.textContent = price_2.value+"%"
});