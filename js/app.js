let ul = document.getElementById('ul');

let lovers = [];
function Foodlovers(cusName, foodType) {
    this.cusName = cusName;
    this.foodType = foodType;
    let randomNum = [];
    settingItems()
    lovers.push(this);
}

function settingItems() {
    let order = JSON.stringify(lovers);
    localStorage.setItem('key', order);


}
function getItems() {
    let strringOrder = localStorage.getItem('key');
    let normOrder = JSON.parse(strringOrder);
    if (normOrder !== null) {
        lovers = normOrder
    }
    render();
}

function getRandomArbitrary() {
    randomNum.push(Math.random() * (max - min) + min);
}

let form = document.getElementById('form');
form.addEventListener('submit', addOrder);

function addOrder(event) {
    event.preventDefault();

    let cusName = event.target.cusName.value;
    let foodType = event.target.foodType.value;

    new Foodlovers(cusName, foodType);
    render();
}

function render() {
    ul.textContent = "";
    for (let i = 0; i < lovers.length; i++) {
        let liEl = document.createElement('li');
        liEl.textContent = `${lovers[i].cusName} ordered ${lovers[i].foodType}`
        ul.appendChild(liEl);

    }
}


getItems();