let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active')
})

let products = [
    {
        id: 1,
        name: 'KUSHPU IDLY',
        image: '32.jpg',
        price: 55
    },
    {
        id: 2,
        name: 'MINI SAMBAR IDLY',
        image: '31.jpg',
        price: 80
    },
    {
        id: 3,
        name: 'CHEESH ROST DOSA',
        image: '29.jpg',
        price: 70
    },
    {
        id: 4,
        name: 'SPECIAL DOSA',
        image: '39.jpg',
        price: 150
    },
    {
        id: 5,
        name: 'CURRY DOSA',
        image: '30.jpg',
        price: 150
    },
    {
        id: 6,
        name: 'GHEE PONGAL',
        image: '33.jpg',
        price: 85
    },
    {
        id: 7,
        name: 'MINI TIFFEN',
        image: '35.jpg',
        price: 160
    },
    {
        id: 8,
        name: 'MINI TIFFEN',
        image: '34.jpg',
        price: 160
    },
    
    {
        id: 9,
        name: 'CHICKKEN BIRIYANI',
        image: '12.PNG',
        price: 230
    },
    {
        id: 10,
        name: 'MUTTON BIRIYANI',
        image: '14.jpeg',
        price: 350
    },
    {
        id: 11,
        name: 'CHICKEN FRIEDRICE',
        image: '13.jpeg',
        price: 120
    },
    {
        id: 12,
        name: 'CHICKEN NOODLES',
        image: '16.jpeg',
        price: 110
    },
    {
        id: 13,
        name: 'PRAWN NODDLES',
        image: '15.jpeg',
        price: 180
    },
    {
        id: 14,
        name: 'GRILLED CHICKEN',
        image: '17.jpeg',
        price: 250
    },
    {
        id: 15,
        name: 'DOUBLE CHEESH BURGER',
        image: '18.jpeg',
        price: 220
    },
    {
        id: 16,
        name: 'MARGIRITA PIZZA',
        image: '20.jpeg',
        price: 270
    },
    {
        id: 17,
        name: 'TOMATO PIZZA',
        image: '6.PNG',
        price: 190
    },
    {
        id: 18,
        name: 'WHITE SAUCE PASTA',
        image: '26.jpg',
        price: 190
    },
    {
        id: 19,
        name: 'DEAD BY CHOCOLATE',
        image: '22.jpeg',
        price: 130
    },
    { 
        id: 20,
        name: 'STAWBERRY DELIGHT',
        image: '23.jpg',
        price: 150
    },
    { 
        id: 21,
        name: 'CHACO DIP ICE CREAM',
        image: '24.jpg',
        price: 70
    },
    { 
        id: 22,
        name: 'CHOCOLATE SUNDAE',
        image: '25.jpg',
        price: 160
    },
    { 
        id: 23,
        name: 'CHOCOLATE BROWNIE',
        image: '36.jpg',
        price: 70
    },
    { 
        id: 24,
        name: 'JUICE',
        image: '27.jpg',
        price: 70
    },
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity)
{
   
    if(quantity == 0){
        delete listCards[key];
    }
    else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();   
}
// Assuming you have an event listener for the button onclick
document.getElementById('total').addEventListener('click', function() {
    // Redirect to the payment page
    window.location.replace = 'http://127.0.0.1:5500/payment.html';
    PaymentMethodChangeEvent.closeShopping
    newDiv.innerHTML = `
    <div ="total">
    <button onclick="changeevent(closeshopping, ${PaymentMethodChangeEvent})"></button>
    </div> ` 
});
