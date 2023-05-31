const button = document.getElementById('play')

button.addEventListener('click', function(){

    const grid = document.getElementById('grid');

    for(let i = 0; i < 100; i++){
        let square = createSquare();

    square.innerText = i + 1;

    square.addEventListener('click', function(){    //uso this sui quadretti
        //tolgo e aggiungo con toggle
        //this.classList.toggle('clicked')
        //console.log(this.innerText)
        if(!arrayBombs.includes(parseInt(this.innerText))){
            this.classList.add('clicked')
        }
        else{
            this.classList.add('bomb-found')
        }

    });

    //rendo visibili quadrati
    grid.append(square);
    }
})

//funzione quadretto
function createSquare(){
    let square = document.createElement('div');

    square.classList.add('square');
    return square;
}

//funzione che genera numero casuale
function generateRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//funzione che riempie l'array delle bombe
function fillArrayBombs(array_bombs, max){
    
    let check = false
    let random_number;

    while(!check === false){
        
        random_rumber = generateRandomNumber(1, 100)
        if(!array_bombs.includes(random_rumber)){
            check = true
        }
    }
    
    return random_number;
    
}

const arrayBombs = []

//invoco fillArrayBombs per riempire array di bombe
for(let i = 0; i < 16; i++){
    let number = fillArrayBombs(arrayBombs, 100);
    arrayBombs.push(number);
    console.log(arrayBombs)
}



