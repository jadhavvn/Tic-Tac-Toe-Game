let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newGame = document.querySelector("#new-game");
let msg = document.querySelector("#win");
let msgContainer = document.querySelector(".msg-container");



let turnO = true; // X turn , O turn 

const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame = ()=>{
    turnO = true;
    enabledBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

const checkWinner = () => {
    for(let pattern of winPattern){
        let position1 = boxes[pattern[0]].innerText;
        let position2 = boxes[pattern[1]].innerText;
        let position3 = boxes[pattern[2]].innerText;

        if(position1 != "" && position2 != "" && position3 != ""){
            if(position1 === position2 && position2 === position3)
            {
                winnnerMsg(position1);
            }
        }
    }
    
}


const winnnerMsg = (winner)=> {
    msg.innerText= `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
   

}

const drawGame = ()=>{
    msg.innerText= "Game was draw";
};

const disabledBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
        }
};

const enabledBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        }
};

reset.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);