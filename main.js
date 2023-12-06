function showPrice(productId) {
    var price = document.getElementById(productId).querySelector('.price').textContent;
    var name = document.getElementById(productId).querySelector('.name').textContent;
    console.log(price, name);
    var content = `<span>${name} - ${price}</span><br>`;
    document.getElementById('basket').insertAdjacentHTML('afterend', content);
}