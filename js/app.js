const loginbutton = document.querySelector('#login-home button');
loginbutton.addEventListener("click", () => {
    window.location = "login.html";
});

const payment = document.querySelector('#cart-home-page img');
payment.addEventListener("click", ()=> {
    window.location = "cart.html";
});
