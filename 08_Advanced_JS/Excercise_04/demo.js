const productNameInputElement = document.getElementById('product-name');
const remainingCharsElement = document.getElementById('remaining-chars');

const maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacters() {
    const enteredText = event.target.value;
    const enteredTextLength = enteredText.length;

    const remainingCharacters = 60 - enteredTextLength;

    remainingCharsElement.textContent = remainingCharacters;
}

productNameInputElement.addEventListener('input', updateRemainingCharacters);