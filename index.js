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


const pizzaBaseA = () => {

    PizzaOne.addEventListener('dragstart', (e) => {
        console.log('DragStart')
        e.target.className += ' hold'
    })

    PizzaOne.addEventListener('dragend', (e) => {
        console.log('dragend')
        e.target.className = "PizzaOne"
    })



    PizzaOne.addEventListener("dragover", function (e) {
        e.preventDefault();
        setTimeout(() => {
            dropPoint.classList.add("pizzabaseOne");
            dropPoint.classList.remove("pizzabaseTwo");
        }, 1000);
    });

}
pizzaBaseA()

PizzaTwo.addEventListener('dragstart', (e) => {
    console.log('DragStart')
    e.target.className += ' hold';
})

PizzaTwo.addEventListener('dragend', (e) => {
    console.log('dragend')
    e.target.className = "PizzaTwo";
})

PizzaTwo.addEventListener("dragover", function (e) {
    e.preventDefault();
    setTimeout(() => {
        dropPoint.classList.add("pizzabaseTwo");
    }, 1000);
});

Pizza1.addEventListener('dragstart', (e) => {
    console.log('DragStart')
    e.target.className += ' hold'
})

Pizza1.addEventListener('dragend', (e) => {
    console.log('dragend')
    e.target.className = 'Pizza1'
})

Pizza1.addEventListener("dragover", function (e) {
    e.preventDefault();
    setTimeout(() => {
        dropPoint.classList.add("Pizza1Pepperoni");
        dropPoint.classList.remove("Pizza1Mushrooms");
        dropPoint.classList.remove("Pizza1Peppers");
        dropPoint.classList.remove("Pizza1Onions");
    }, 1000);
});


Pizza2.addEventListener('dragstart', (e) => {
    console.log('DragStart')
    e.target.className += ' hold'
})

Pizza2.addEventListener('dragend', (e) => {
    console.log('dragend')
    e.target.className = 'Pizza2'
})


Pizza2.addEventListener("dragover", function (e) {
    e.preventDefault();
    setTimeout(() => {
        dropPoint.classList.add("Pizza1Mushrooms");
        dropPoint.classList.remove("Pizza1Pepperoni");
        dropPoint.classList.remove("Pizza1Peppers");
        dropPoint.classList.remove("Pizza1Onions");
    }, 1000);
});



Pizza3.addEventListener('dragstart', (e) => {
    console.log('DragStart')
    e.target.className += ' hold'
})

Pizza3.addEventListener('dragend', (e) => {
    console.log('dragend')
    e.target.className = 'Pizza3'
})

Pizza3.addEventListener("dragover", function (e) {
    e.preventDefault();
    setTimeout(() => {
        dropPoint.classList.add("Pizza1Onions");
        dropPoint.classList.remove("Pizza1Mushrooms");
        dropPoint.classList.remove("Pizza1Pepperoni");
        dropPoint.classList.remove("Pizza1Peppers");
    }, 1000);
});

Pizza4.addEventListener('dragstart', (e) => {
    console.log('DragStart')
    e.target.className += ' hold'
})

Pizza4.addEventListener('dragend', (e) => {
    console.log('dragend')
    e.target.className = 'Pizza4'
})

Pizza4.addEventListener("dragover", function (e) {
    e.preventDefault();
    setTimeout(() => {
        dropPoint.classList.add("Pizza1Peppers");
        dropPoint.classList.remove("Pizza1Onions");
        dropPoint.classList.remove("Pizza1Mushrooms");
        dropPoint.classList.remove("Pizza1Pepperoni");
    }, 1000);
});

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