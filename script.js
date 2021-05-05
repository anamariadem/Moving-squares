window.onload = () => {
    let toggle = false;

    let blackSquare = document.getElementById("black");

    blackSquare.addEventListener('click', () => {
        // setTimeout( () => {
            blackSquare.style.animation = 'move-black 10s linear';
        // }, 200);

    });

    let greenSquare = document.getElementById("green");
    greenSquare.addEventListener('click', () => {
        // setTimeout(() => {
            greenSquare.style.animation = 'move-green 10s linear';
        // }, 200);
    });

    let redSquare = document.getElementById("red");
    redSquare.addEventListener('click', () =>{
        // setTimeout(() => {
            toggle = !toggle;
            if(!toggle){
                console.log()
                redSquare.classList.remove('move-red-first');
                redSquare.classList.add('move-red-second');
            }else {
                redSquare.classList.remove('move-red-second');
                redSquare.classList.add('move-red-first');
            }
            redSquare.classList.add('avoid-clicks')
            setTimeout(() => {
                redSquare.classList.remove('avoid-clicks')
            }, 10000)
        // }, 200);
    })
}
