(function () {
    let pricePounds;
    const exchangeRate = 0.86;
    let priceEuros;

    const convertForm = document.getElementById('myForm');
    const msg = document.getElementById('msg');
    document.getElementById('pounds').value;
    convertForm.addEventListener('submit', (ev) => {
        ev.preventDefault();
        priceEuros = 0;
        pricePounds = parseFloat(document.getElementById('pounds').value);
        if (isNaN(pricePounds)) {
            msg.style.display = "block";
            msg.innerHTML = "You must enter a number";
            msg.setAttribute('class', 'error');
        } else {
            if (pricePounds === 0) {
                msg.style.display = "block";
                msg.innerHTML = "You must enter more than zero."
                msg.setAttribute('class', 'error');
            } else {
                priceEuros = pricePounds * exchangeRate;
                msg.style.display = "block";
                priceEuros = priceEuros.toFixed(2);
                msg.innerHTML = "You will get &euro;" + priceEuros;
                msg.removeAttribute('class');
            }
        }
    });
    document.getElementById('pounds').addEventListener('focus', (ev) => {
        ev.target.value = "";
        msg.innerHTML = "";
        msg.removeAttribute('class');
    });
})();