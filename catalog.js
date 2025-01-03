document.querySelectorAll('.card').forEach(card => {
    const quantityEl = card.querySelector('.card-quantity');
    let quantity = parseInt(quantityEl.textContent) || 0;

    // Обработчик для кнопки "Добавить в корзину"
    const addToCartButton = card.querySelector('.add-to-cart');
    addToCartButton.addEventListener('click', () => {
        if (quantity === 0) {
            quantity++;
            updateQuantityAndButton();
        }
    });

    // Обработчик для кнопки "-"
    const minusBtn = card.querySelector('.minus');
    minusBtn.addEventListener('click', () => {
        if (quantity > 0) {
            quantity--;
            updateQuantityAndButton();
        }
    });

    // Обработчик для кнопки "+"
    const plusBtn = card.querySelector('.plus');
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