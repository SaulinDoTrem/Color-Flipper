const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const button = document.getElementById('button');

const color = document.querySelector(".color");

button.addEventListener("click",
    () => {
        const randomColor = getRandomColor();
        console.log(randomColor);
        document.body.style.backgroundColor = randomColor;
        color.textContent = randomColor;
    }
);

function getRandomColor(){
    let color = '#';

    for (let index = 0; index < 6; index++) {
        const randomNumber = getRandomNumber();
        const caracter = hex[randomNumber];
        color += caracter;
    }

    return color;
}

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}