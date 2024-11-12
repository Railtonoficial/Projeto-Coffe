window.onload = function () {
    window.scrollTo(0, 0);
};

document.getElementById('increase').addEventListener('click', function () {
    let quantityInput = document.getElementById('quantity');
    quantityInput.value = parseInt(quantityInput.value) + 1;
});

document.getElementById('decrease').addEventListener('click', function () {
    let quantityInput = document.getElementById('quantity');
    if (parseInt(quantityInput.value) > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
});

