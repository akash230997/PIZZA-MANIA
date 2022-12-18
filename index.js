const PizzaOne = document.getElementsByClassName('PizzaOne')[0];
const PizzaTwo = document.getElementsByClassName('PizzaTwo')[0];
const dropPoint = document.getElementsByClassName('dropPoint')[0];
//==============================Second=====================================
const Pizza1 = document.getElementsByClassName('Pizza1')[0];
const Pizza2 = document.getElementsByClassName('Pizza2')[0];
const Pizza3 = document.getElementsByClassName('Pizza3')[0];
const Pizza4 = document.getElementsByClassName('Pizza4')[0];
const list = document.querySelector('.list')

let tukzer = document.getElementsByClassName('kudos');




PizzaOne.addEventListener('dragstart', PizzaOneDragStart)

function PizzaOneDragStart(e) {
    console.log('DragStart')
    e.target.className += ' hold'
}

PizzaOne.addEventListener('dragend', PizzaOneDragEnd)

function PizzaOneDragEnd(e) {
    console.log('dragend')
    e.target.className = "PizzaOne"
}


PizzaOne.addEventListener("dragover", PizzaOneDragOver);

function PizzaOneDragOver(e) {
    e.preventDefault();
    setTimeout(() => {
        dropPoint.classList.add("pizzabaseOne");
        dropPoint.classList.remove("pizzabaseTwo");
    }, 0);
}


PizzaTwo.addEventListener('dragstart', PizzaTwoDragStart);

function PizzaTwoDragStart(e) {
    console.log('DragStart')
    e.target.className += ' hold';
}

PizzaTwo.addEventListener('dragend', PizzaTwoDragEnd)

function PizzaTwoDragEnd(e) {
    console.log('dragend')
    e.target.className = "PizzaTwo";
}

PizzaTwo.addEventListener("dragover", PizzaTwoDragOver)

function PizzaTwoDragOver(e) {
    e.preventDefault();
    setTimeout(() => {
        dropPoint.classList.add("pizzabaseTwo");
    }, 0);
};

Pizza1.addEventListener('dragstart', Pizza1DragStart)

function Pizza1DragStart(e) {
    console.log('DragStart')
    e.target.className += ' hold'
}

Pizza1.addEventListener('dragend', Pizza1DragEnd)

function Pizza1DragEnd(e) {
    console.log('dragend')
    e.target.className = 'Pizza1'
}

Pizza1.addEventListener("dragover", Pizza1DragOver);

function Pizza1DragOver(e) {
    e.preventDefault();
    setTimeout(() => {
        dropPoint.classList.add("Pizza1Pepperoni");
        dropPoint.classList.remove("Pizza1Mushrooms");
        dropPoint.classList.remove("Pizza1Peppers");
        dropPoint.classList.remove("Pizza1Onions");
    }, 0);
}

Pizza2.addEventListener('dragstart', Pizza2DragStart);

function Pizza2DragStart(e) {
    console.log('DragStart')
    e.target.className += ' hold'
}

Pizza2.addEventListener('dragend', Pizza2DragEnd);

function Pizza2DragEnd(e) {
    console.log('dragend')
    e.target.className = 'Pizza2'
}


Pizza2.addEventListener("dragover", Pizza2DragOver);

function Pizza2DragOver(e) {
    e.preventDefault();
    setTimeout(() => {
        dropPoint.classList.add("Pizza1Mushrooms");
        dropPoint.classList.remove("Pizza1Pepperoni");
        dropPoint.classList.remove("Pizza1Peppers");
        dropPoint.classList.remove("Pizza1Onions");
    }, 0);
}


Pizza3.addEventListener('dragstart', Pizza3DragStart);

function Pizza3DragStart(e) {
    console.log('DragStart')
    e.target.className += ' hold'
}

Pizza3.addEventListener('dragend', Pizza3DragEnd);
function Pizza3DragEnd(e) {
    console.log('dragend')
    e.target.className = 'Pizza3'
}

Pizza3.addEventListener("dragover", Pizza3DragOver);

function Pizza3DragOver(e) {
    e.preventDefault();
    setTimeout(() => {
        dropPoint.classList.add("Pizza1Onions");
        dropPoint.classList.remove("Pizza1Mushrooms");
        dropPoint.classList.remove("Pizza1Pepperoni");
        dropPoint.classList.remove("Pizza1Peppers");
    }, 0);
}

Pizza4.addEventListener('dragstart', Pizza4DragStart);

function Pizza4DragStart(e) {
    console.log('DragStart')
    e.target.className += ' hold'
}

Pizza4.addEventListener('dragend', Pizza4DragEnd)

function Pizza4DragEnd(e) {
    console.log('dragend')
    e.target.className = 'Pizza4'
}

Pizza4.addEventListener("dragover", Pizza4DragOver);
function Pizza4DragOver(e) {
    e.preventDefault();
    setTimeout(() => {
        dropPoint.classList.add("Pizza1Peppers");
        dropPoint.classList.remove("Pizza1Onions");
        dropPoint.classList.remove("Pizza1Mushrooms");
        dropPoint.classList.remove("Pizza1Pepperoni");
    }, 0);
}

dropPoint.addEventListener("dragenter", function (e) {
    e.preventDefault()
    console.log('DragEnter')
    list.style.display = 'flex';

});
dropPoint.addEventListener("dragleave", function (e) {
    e.preventDefault()
    console.log("dragleave")

});
dropPoint.addEventListener("drop", function (e) {
    e.preventDefault();
    console.log('Drop workingg............!!!!');
});
