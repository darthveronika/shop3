document.querySelectorAll('.new-page .card').forEach(card => {
    const quantityEl = card.querySelector('.new-page .card-quantity');
    let quantity = parseInt(quantityEl.textContent) || 0;

    // Обработчик для кнопки "Добавить в корзину"
    const addToCartButton = card.querySelector('.new-page .add-to-cart');
    addToCartButton.addEventListener('click', () => {
        if (quantity === 0) {
            quantity++;
            updateQuantityAndButton();
        }
    });

    // Обработчик для кнопки "-" (уменьшение количества)
    const minusBtn = card.querySelector('.new-page .minus');
    minusBtn.addEventListener('click', () => {
        if (quantity > 0) {
            quantity--;
            updateQuantityAndButton();
        }
    });

    // Обработчик для кнопки "+ (увеличение количества)"
    const plusBtn = card.querySelector('.new-page .plus');
    plusBtn.addEventListener('click', () => {
        quantity++;
        updateQuantityAndButton();
    });

    // Функция для обновления количества и кнопки
    function updateQuantityAndButton() {
        quantityEl.textContent = quantity;
        if (quantity > 0) {
            addToCartButton.textContent = `В корзине: ${quantity}`;
            minusBtn.disabled = false;
        } else {
            addToCartButton.textContent = 'Добавить в корзину';
            minusBtn.disabled = true;
        }
    }
});