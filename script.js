
let blackSquare = document.getElementById("black");

blackSquare.addEventListener('click', () => {
    setTimeout( () => {
        blackSquare.style.animation = 'move-black 10s linear';
    }, 200);

});

let greenSquare = document.getElementById("green");
greenSquare.addEventListener('click', () => {
    setTimeout(() => {
        greenSquare.style.animation = 'move-green 10s linear';
    }, 200);

});

let redSquare = document.getElementById("red");
redSquare.addEventListener('click', () =>{
    setTimeout(() => {
        redSquare.style.animation = 'move-red 10s linear';
    }, 200);
})