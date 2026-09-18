const ticketSelect = document.querySelector('#ticket');
const quantityInput = document.querySelector('#quantity');
const calculateButton = document.querySelector('#calculate');
const resultBox = document.querySelector('#result');

function calculateTotal(price, quantity) {
  return price * quantity;
}

calculateButton.addEventListener('click', function () {
  const price = Number(ticketSelect.value);
  const quantity = Number(quantityInput.value);
  const total = calculateTotal(price, quantity);
  resultBox.textContent = `總金額：$${total.toLocaleString()}`;
});
