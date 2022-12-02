console.log('implements')

var booksQuantity = [0, 0, 0, 0, 0, 0];

var quantity = 0;

const start = () => {

    const bookOne = document.getElementById('bookOne').onclick = addBookOne;

    const bookTwo = document.getElementById('bookTwo').onclick = addBookTwo;

    const bookThree = document.getElementById('bookThree').onclick = addBookThree;

    const bookFour = document.getElementById('bookFour').onclick = addBookFour;

    const bookFive = document.getElementById('bookFive').onclick = addBookFive;

    const bookSix = document.getElementById('bookSix').onclick = addBookSix;;
};

const addBookOne = () => {
    booksQuantity[0] += 1;
    quantity += 1;

   actualizationQuantity();
};

const addBookTwo = () => {
    booksQuantity[1] += 1;
    quantity += 1;

    actualizationQuantity();
};

const addBookThree = () => {
    booksQuantity[2] += 1;
    quantity += 1;

    actualizationQuantity();
};

const addBookFour = () => {
    booksQuantity[3] += 1;
    quantity += 1;

    actualizationQuantity();
};

const addBookFive = () => {
    booksQuantity[4] += 1;
    quantity += 1;

    actualizationQuantity();
};

const addBookSix = () => {
    booksQuantity[5] += 1;
    quantity += 1;

    actualizationQuantity();
};

const actualizationQuantity = () => {
    document.getElementById("book1Quantity").innerHTML = "" + booksQuantity[0];
    document.getElementById("book2Quantity").innerHTML = "" + booksQuantity[1];
    document.getElementById("book3Quantity").innerHTML = "" + booksQuantity[2];
    document.getElementById("book4Quantity").innerHTML = "" + booksQuantity[3];
    document.getElementById("book5Quantity").innerHTML = "" + booksQuantity[4];
    document.getElementById("book6Quantity").innerHTML = "" + booksQuantity[5];
    document.getElementById("quantity").innerHTML = "" + quantity;

    console.log(booksQuantity[0]);
    console.log(booksQuantity[1]);
    console.log(booksQuantity[2]);
    console.log(booksQuantity[3]);
    console.log(booksQuantity[4]);
    console.log(booksQuantity[5]);
}

start();