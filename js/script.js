var discountCode = document.getElementById('discount_code1');
// id call for memory
const firstMemory = document.getElementById('first-memory');
const secondMemory = document.getElementById('second-memory');
const extraMemory = document.getElementById('extra-memory');

//storage id call 

const firstStorage = document.getElementById('first-storage');
const secondStorage = document.getElementById('second-storage');
const thirdStorage = document.getElementById('third-storage');
const extraStorage = document.getElementById('extra-storage');

//delevary id call

const freeDelivery = document.getElementById('free-delivery');
const primeDelivery = document.getElementById('prime-delivery');
const deliveryCharge = document.getElementById('delivery-charge');

//call grand total id

const grandTotal = document.getElementById('grand-total');

//total cost
const total = document.getElementById('total');
const bestPrice = document.getElementById('best-price');

//update memory for 8 gb
firstMemory.addEventListener('click', function () {
    extraMemory.innerText = '0';
    updateMamoryCost();
});

//update memory for 16gb

secondMemory.addEventListener('click', function () {
    extraMemory.innerText = '180';
    updateMamoryCost();
});
//update storage for 256gb

firstStorage.addEventListener('click', function () {
    extraStorage.innerText = '0';
    updateStorageCost();
});
//update storage for 256gb

secondStorage.addEventListener('click', function () {
    extraStorage.innerText = '100';
    updateStorageCost();
});
//update storage for 256gb

thirdStorage.addEventListener('click', function () {
    extraStorage.innerText = '180';
    updateStorageCost();
});

//update delivery

freeDelivery.addEventListener('click', function () {
    deliveryCharge.innerText = '0';
    updateDeliveryCost();

});
primeDelivery.addEventListener('click', function () {
    deliveryCharge.innerText = '20';
    updateDeliveryCost();

});

function updateMamoryCost() {
    const firstMemoryCost = Number(extraMemory.innerText);
    // const secondMemoryCost = Number(bestPrice.innerText);
    const secondMemoryCost = Number(total.innerText);
    const sum = firstMemoryCost + secondMemoryCost;
    total.innerText = sum;
    grandTotal.innerText = sum;
};

function updateStorageCost() {
    const firstStorageCost = Number(extraStorage.innerText);
    // const secondStorageCost = Number(bestPrice.innerText);
    const secondStorageCost = Number(total.innerText);
    const sum = firstStorageCost + secondStorageCost;
    total.innerText = sum;
    grandTotal.innerText = sum;
};
function updateDeliveryCost() {
    const firstDeliveryCost = Number(deliveryCharge.innerText);
    // const secondDeliveryCost = Number(bestPrice.innerText);
    const secondDeliveryCost = Number(total.innerText);
    const sum = firstDeliveryCost + secondDeliveryCost;
    total.innerText = sum;
    grandTotal.innerText = sum;
};

// code for 20% discaut cupon code 

const discount_code = () => {
    total.innerText = parseInt(grandTotal.innerHTML);
    let error = document.getElementById('error');
    if (discountCode.value === 'stevekaku') {
        let newTotal = grandTotal.innerText / 5;
        let newSum = grandTotal.innerText - newTotal;
        grandTotal.innerText = newSum;
        error.innerHTML = "code is valid";
    } else {
        error.innerHTML = "Try Again";
    }
};
