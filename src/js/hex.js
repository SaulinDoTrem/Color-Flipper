const button = document.getElementById('button');
const color = document.querySelector(".color");

button.addEventListener("click",
    () => {
        const randomColor = getRandomHexCode();
        console.log(randomColor);
        document.body.style.backgroundColor = randomColor;
        color.textContent = randomColor;
    }
);

function getRandomHexCode(){
    return `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
}