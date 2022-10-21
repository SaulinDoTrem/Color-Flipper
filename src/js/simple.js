const colors = ["Green", "Red", "rgba(133,122,200)", "#F15025"];

const button = document.getElementById('button');

const color = document.querySelector(".color");

button.addEventListener("click", 
    () => {
        // get random number between 0 and 3, because of the array
        const randomNumber = getRandomNumber();
        console.log(randomNumber);
        document.body.style.backgroundColor = colors[randomNumber];
        color.textContent = colors[randomNumber];
    }
);

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}